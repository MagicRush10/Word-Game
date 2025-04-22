// Configurazione del gioco
const CONFIG = {
  gridSize: 12, // Griglia leggermente più grande ma non eccessiva
  timeLimit: 300, // 5 minuti in secondi
  wordDirections: ['horizontal', 'vertical', 'diagonal'],
  themes: {
    animali: ["LEONE", "TIGRE", "ELEFANTE", "GIRAFFA", "ZEBRA", "PANTERA", "SCOIATTOLO", "PAPPAGALLO", "DELFINO", "TARTARUGA", "LUPO", "CINGHIALE", "FALCO", "CIVETTA", "RAGNO"],
    citta: ["ROMA", "MILANO", "TORINO", "PALERMO", "BOLOGNA", "FIRENZE", "VENEZIA", "GENOVA", "BARI", "VERONA", "PISA", "SIENA", "NAPOLI", "MESSINA", "CATANIA"],
    sport: ["CALCIO", "TENNIS", "NUOTO", "CICLISMO", "BASKET", "VOLLEY", "RUGBY", "JUDO", "GOLF", "SCI", "HOCKEY", "ATLETICA", "BOXE", "KARATE", "CANOTTAGGIO"],
    paesi: ["ITALIA", "FRANCIA", "SPAGNA", "GERMANIA", "GRECIA", "BRASILE", "CANADA", "GIAPPONE", "CINA", "INDIA", "MESSICO", "EGITTO", "SVEZIA", "NORVEGIA", "DANIMARCA"],
    frutta: ["MELA", "BANANA", "PERA", "PESCA", "KIWI", "ANANAS", "COCCO", "LIMONE", "FRAGOLA", "LAMPONE", "MIRTILLO", "ANGURIA", "MELONE", "CILIEGIA", "MANDARINO"],
    musica: ["PIANO", "CHITARRA", "VIOLINO", "TROMBA", "FLAUTO", "ARPA", "TAMBURI", "SAXOFONO", "CLARINETTO", "CELLO", "DJEMBE", "MARACAS", "XILOFONO", "TROMBONE", "CORNO"]
  },
  wordsPerGame: 10 // Numero di parole da trovare per partita
};

// Stato del gioco
let gameState = {
  grid: [],
  words: [],
  foundWords: [],
  selectedCells: [],
  timeLeft: CONFIG.timeLimit,
  timer: null,
  currentTheme: null
};

// Elementi DOM
const puzzleGrid = document.getElementById("puzzle-grid");
const wordList = document.getElementById("word-list");
const timerDisplay = document.getElementById("timer");
const themeDisplay = document.getElementById("theme-display");
const messageDisplay = document.getElementById("message");
const newGameBtn = document.getElementById("new-game-btn");
const hintBtn = document.getElementById("hint-btn");

// Inizializza il gioco
function initGame() {
  // Scegli un tema casuale
  const themes = Object.keys(CONFIG.themes);
  gameState.currentTheme = themes[Math.floor(Math.random() * themes.length)];
  themeDisplay.textContent = `Tema: ${gameState.currentTheme}`;
  
  // Genera la griglia
  generateGrid();
  
  // Avvia il timer
  startTimer();
  
  // Aggiorna l'interfaccia
  updateUI();
}

// Genera la griglia con parole nascoste
function generateGrid() {
  // Reset stato
  gameState.grid = Array(CONFIG.gridSize).fill().map(() => Array(CONFIG.gridSize).fill(''));
  gameState.words = [];
  gameState.foundWords = [];
  gameState.selectedCells = [];
  
  // Seleziona N parole casuali dal tema
  const allWords = [...CONFIG.themes[gameState.currentTheme]];
  const words = [];
  
  while (words.length < CONFIG.wordsPerGame && allWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const selectedWord = allWords[randomIndex];
    
    // Filtra parole troppo lunghe per la griglia
    if (selectedWord.length <= CONFIG.gridSize) {
      words.push(selectedWord);
    }
    allWords.splice(randomIndex, 1);
  }
  
  // Posiziona le parole nella griglia
  words.forEach(word => {
    placeWordInGrid(word);
  });
  
  fillEmptyCells();
}

function placeWordInGrid(word) {
  let placed = false;
  let attempts = 0;
  const maxAttempts = 50;
  
  while (!placed && attempts < maxAttempts) {
    attempts++;
    const direction = CONFIG.wordDirections[Math.floor(Math.random() * CONFIG.wordDirections.length)];
    
    let startRow, startCol;
    if (direction === 'horizontal') {
      startRow = Math.floor(Math.random() * CONFIG.gridSize);
      startCol = Math.floor(Math.random() * (CONFIG.gridSize - word.length + 1));
    } 
    else if (direction === 'vertical') {
      startRow = Math.floor(Math.random() * (CONFIG.gridSize - word.length + 1));
      startCol = Math.floor(Math.random() * CONFIG.gridSize);
    } 
    else { // diagonale
      startRow = Math.floor(Math.random() * (CONFIG.gridSize - word.length + 1));
      startCol = Math.floor(Math.random() * (CONFIG.gridSize - word.length + 1));
    }
    
    if (canPlaceWord(word, startRow, startCol, direction)) {
      placeWord(word, startRow, startCol, direction);
      gameState.words.push({
        word: word,
        cells: getWordCells(word, startRow, startCol, direction),
        found: false
      });
      placed = true;
    }
  }
  
  if (!placed) {
    console.log(`Impossibile posizionare: ${word}`);
  }
}

// Ottiene le coordinate delle celle di una parola
function getWordCells(word, startRow, startCol, direction) {
  const cells = [];
  for (let i = 0; i < word.length; i++) {
    if (direction === 'horizontal') {
      cells.push({ row: startRow, col: startCol + i });
    } else if (direction === 'vertical') {
      cells.push({ row: startRow + i, col: startCol });
    } else { // diagonale
      cells.push({ row: startRow + i, col: startCol + i });
    }
  }
  return cells;
}

// Posiziona una parola nella griglia
function placeWord(word, row, col, direction) {
  for (let i = 0; i < word.length; i++) {
    if (direction === 'horizontal') {
      gameState.grid[row][col + i] = word[i];
    } else if (direction === 'vertical') {
      gameState.grid[row + i][col] = word[i];
    } else { // diagonale
      gameState.grid[row + i][col + i] = word[i];
    }
  }
}

// Controlla se una parola può essere posizionata
function canPlaceWord(word, row, col, direction) {
  for (let i = 0; i < word.length; i++) {
    let currentRow, currentCol;
    
    if (direction === 'horizontal') {
      currentRow = row;
      currentCol = col + i;
    } else if (direction === 'vertical') {
      currentRow = row + i;
      currentCol = col;
    } else { // diagonale
      currentRow = row + i;
      currentCol = col + i;
    }
    
    // Controlla se è fuori dalla griglia
    if (currentRow >= CONFIG.gridSize || currentCol >= CONFIG.gridSize) {
      return false;
    }
    
    // Controlla se la cella è già occupata da un'altra lettera
    if (gameState.grid[currentRow][currentCol] !== '' && 
        gameState.grid[currentRow][currentCol] !== word[i]) {
      return false;
    }
  }
  return true;
}

// Riempie le celle vuote con lettere casuali
function fillEmptyCells() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < CONFIG.gridSize; i++) {
    for (let j = 0; j < CONFIG.gridSize; j++) {
      if (gameState.grid[i][j] === '') {
        gameState.grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
}

// Aggiorna l'interfaccia
function updateUI() {
  // Pulisci la griglia
  puzzleGrid.innerHTML = '';
  
  // Riempila con le celle
  for (let i = 0; i < CONFIG.gridSize; i++) {
    for (let j = 0; j < CONFIG.gridSize; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = gameState.grid[i][j];
      cell.dataset.row = i;
      cell.dataset.col = j;
      
      // Controlla se la cella è selezionata
      if (gameState.selectedCells.some(c => c.row === i && c.col === j)) {
        cell.classList.add('selected');
      }
      
      // Controlla se la cella fa parte di una parola trovata
      const foundWord = gameState.words.find(w => 
        w.found && w.cells.some(c => c.row === i && c.col === j)
      );
      if (foundWord) {
        cell.classList.add('found');
      }
      
      cell.addEventListener('click', () => selectCell(i, j));
      puzzleGrid.appendChild(cell);
    }
  }
  
  // Aggiorna la lista delle parole
  wordList.innerHTML = '';
  gameState.words.forEach(wordObj => {
    const wordElement = document.createElement('div');
    wordElement.className = `word-item ${wordObj.found ? 'found' : ''}`;
    wordElement.textContent = wordObj.word;
    wordList.appendChild(wordElement);
  });
  
  // Aggiorna il timer
  const minutes = Math.floor(gameState.timeLeft / 60);
  const seconds = gameState.timeLeft % 60;
  timerDisplay.textContent = `TEMPO: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Gestisce la selezione delle celle
function selectCell(row, col) {
  const cellIndex = gameState.selectedCells.findIndex(c => c.row === row && c.col === col);
  
  if (cellIndex === -1) {
    // Seleziona la cella
    gameState.selectedCells.push({ row, col });
    
    // Se abbiamo abbastanza celle selezionate, controlla se formano una parola
    if (gameState.selectedCells.length > 1) {
      checkSelectedWord();
    }
  } else {
    // Deseleziona la cella
    gameState.selectedCells.splice(cellIndex, 1);
  }
  
  updateUI();
}

// Controlla se le celle selezionate formano una parola
function checkSelectedWord() {
  // Ordina le celle per mantenere l'ordine di selezione
  gameState.selectedCells.sort((a, b) => {
    if (a.row !== b.row) return a.row - b.row;
    return a.col - b.col;
  });

  const selectedLetters = gameState.selectedCells
    .map(cell => gameState.grid[cell.row][cell.col])
    .join('');

  // Controlla se le celle sono consecutive
  const isConsecutive = checkConsecutiveCells(gameState.selectedCells);
  
  if (!isConsecutive) {
    showMessage('Seleziona celle consecutive!', 'error');
    return;
  }

  // Cerca corrispondenze con le parole nascoste
  const matchedWord = gameState.words.find(wordObj => 
    !wordObj.found && wordObj.word === selectedLetters
  );

  if (matchedWord) {
    // Verifica che siano state selezionate tutte le celle della parola
    const allCellsSelected = matchedWord.cells.every(cell => 
      gameState.selectedCells.some(sel => sel.row === cell.row && sel.col === cell.col)
    );
    
    if (allCellsSelected) {
      matchedWord.found = true;
      gameState.foundWords.push(matchedWord.word);
      gameState.selectedCells = [];
      showMessage(`Trovato: ${matchedWord.word}!`, 'success');
      
      // Controlla se il giocatore ha vinto
      if (gameState.foundWords.length === gameState.words.length) {
        endGame(true);
      }
    } else {
      showMessage('Seleziona tutte le lettere della parola!', 'error');
    }
  } else {
    showMessage('Parola non valida!', 'error');
  }
}

// Controlla se le celle sono consecutive e allineate
function checkConsecutiveCells(cells) {
  if (cells.length < 2) return true;
  
  // Controlla allineamento orizzontale
  const sameRow = cells.every(cell => cell.row === cells[0].row);
  const cols = cells.map(c => c.col);
  const horizontalConsecutive = cols.every((col, i) => 
    i === 0 || col === cols[i-1] + 1
  );
  
  // Controlla allineamento verticale
  const sameCol = cells.every(cell => cell.col === cells[0].col);
  const rows = cells.map(c => c.row);
  const verticalConsecutive = rows.every((row, i) => 
    i === 0 || row === rows[i-1] + 1
  );
  
  // Controlla allineamento diagonale
  const diagonalConsecutive = cells.every((cell, i) => 
    i === 0 || (cell.row === cells[i-1].row + 1 && cell.col === cells[i-1].col + 1)
  );
  
  return (sameRow && horizontalConsecutive) || 
         (sameCol && verticalConsecutive) || 
         diagonalConsecutive;
}

// Timer di gioco
function startTimer() {
  clearInterval(gameState.timer);
  gameState.timeLeft = CONFIG.timeLimit;
  
  gameState.timer = setInterval(() => {
    gameState.timeLeft--;
    updateUI();
    
    if (gameState.timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
}

// Fine del gioco
function endGame(isWin) {
  clearInterval(gameState.timer);
  
  if (isWin) {
    showMessage(`Hai vinto! Hai trovato tutte le parole in ${formatTime(CONFIG.timeLimit - gameState.timeLeft)}`, 'success');
  } else {
    showMessage(`Tempo scaduto! Hai trovato ${gameState.foundWords.length} su ${gameState.words.length} parole.`, 'error');
    
    // Mostra le parole mancanti
    const missingWords = gameState.words
      .filter(w => !w.found)
      .map(w => w.word);
    
    if (missingWords.length > 0) {
      setTimeout(() => {
        showMessage(`Parole mancanti: ${missingWords.join(', ')}`, 'info');
      }, 2000);
    }
  }
}

// Formatta il tempo in MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Mostra un messaggio
function showMessage(msg, type) {
  messageDisplay.textContent = msg;
  messageDisplay.style.color = 
    type === 'error' ? '#ff5555' : 
    type === 'success' ? '#28a745' : '#FFD700';
  setTimeout(() => messageDisplay.textContent = '', 3000);
}

// Funzione di aiuto
function giveHint() {
  const hiddenWords = gameState.words.filter(w => !w.found);
  if (hiddenWords.length === 0) return;
  
  const randomWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
  const randomCell = randomWord.cells[Math.floor(Math.random() * randomWord.cells.length)];
  
  // Evidenzia la cella per 2 secondi
  const cellElement = document.querySelector(`.cell[data-row="${randomCell.row}"][data-col="${randomCell.col}"]`);
  cellElement.style.backgroundColor = 'rgba(255, 215, 0, 0.7)';
  
  setTimeout(() => {
    cellElement.style.backgroundColor = '';
  }, 2000);
}

// Event listeners
newGameBtn.addEventListener('click', initGame);
hintBtn.addEventListener('click', giveHint);

// Avvia il gioco al caricamento
document.addEventListener('DOMContentLoaded', initGame);
// Caricamento ritardato pubblicità
function loadAds() {
  // Aspetta 3 secondi dopo il caricamento della pagina
  setTimeout(() => {
    if(typeof adsbygoogle !== 'undefined') {
      adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    }
    
    // Aggiungi banner laterale dopo 30 secondi di gioco
    setTimeout(() => {
      const adSide = document.createElement('div');
      adSide.id = 'ad-side';
      adSide.className = 'ad-unit';
      adSide.innerHTML = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TUO_ID"></script>
        <ins class="adsbygoogle"
             style="display:inline-block;width:160px;height:600px"
             data-ad-client="ca-pub-TUO_ID"
             data-ad-slot="0987654321"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      `;
      document.body.appendChild(adSide);
    }, 30000);
  }, 3000);
}

// Chiama la funzione all'avvio del gioco
document.addEventListener('DOMContentLoaded', () => {
  initGame();
  loadAds(); // Aggiungi questa linea
});