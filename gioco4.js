// Configurazione del gioco
const categories = [
    "Città italiane", "Film", "Animali", "Colori", "Nomi Maschili", "Nomi Femminili", 
    "Sport", "Cibo", "Nazioni", "Videogiochi", "Professioni", "Marche di auto",
    "Fiori", "Strumenti musicali", "Scuola", "Mestieri", "Mezzi di trasporto"
  ];
  
  let currentCategory = "";
  let usedWords = [];
  let timer;
  let timeLeft = 10;
  let isGameActive = false;
  let currentPlayer = 0;
  let players = [];
  let bombExploded = false;
  
  // Elementi DOM
  const playerSetup = document.getElementById("playerSetup");
  const gameArea = document.getElementById("gameArea");
  const playerInfo = document.getElementById("playerInfo");
  const categoryDisplay = document.getElementById("category");
  const timerDisplay = document.getElementById("timer");
  const messageDisplay = document.getElementById("message");
  const wordInput = document.getElementById("word-input");
  const submitBtn = document.getElementById("submit-btn");
  const wordList = document.getElementById("word-list");
  const bombDisplay = document.getElementById("bomb-display");
  
  // Inizia il gioco
  function startGame(numPlayers) {
    playerSetup.style.display = "none";
    gameArea.style.display = "block";
    
    // Crea i giocatori
    players = [];
    for (let i = 0; i < numPlayers; i++) {
      players.push({
        name: `Giocatore ${i+1}`,
        lives: 3,
        element: null
      });
    }
    
    // Inizializza l'interfaccia giocatori
    updatePlayersUI();
    newRound();
    
    // Focus sull'input
    wordInput.focus();
  }
  
  // Nuovo round
  function newRound() {
    bombExploded = false;
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    categoryDisplay.textContent = currentCategory;
    usedWords = [];
    updateWordList();
    resetTimer();
    isGameActive = true;
    
    // Mostra il giocatore corrente
    messageDisplay.textContent = `Tocca a ${players[currentPlayer].name}! La bomba è nelle tue mani!`;
    messageDisplay.style.color = "#FFD700";
  }
  
  // Aggiorna l'UI dei giocatori
  function updatePlayersUI() {
    playerInfo.innerHTML = "";
    players.forEach((player, index) => {
      if (player.lives > 0) {
        const playerDiv = document.createElement("div");
        playerDiv.className = `player ${index === currentPlayer && isGameActive ? 'active-player' : ''}`;
        playerDiv.innerHTML = `
          ${player.name}<br>
          <span class="lives">Vite: ${'♥'.repeat(player.lives)}</span>
        `;
        playerInfo.appendChild(playerDiv);
        player.element = playerDiv;
      }
    });
  }
  
  // Gestione invio parola
  submitBtn.addEventListener("click", submitWord);
  wordInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      submitWord();
    }
  });
  
  function submitWord() {
    if (!isGameActive || bombExploded) return;
    
    const word = wordInput.value.trim().toUpperCase();
    
    if (word.length === 0) {
      showMessage("Inserisci una parola!", "error");
      return;
    }
    
    // Controlla se la parola è già stata usata
    if (usedWords.includes(word)) {
      showMessage("Parola già usata! Perdi una vita.", "error");
      penalizePlayer();
      return;
    }
    
    // Aggiungi la parola alla lista
    usedWords.push(word);
    updateWordList();
    wordInput.value = "";
    
    // Passa al prossimo giocatore
    nextPlayer();
    resetTimer();
  }
  
  // Passa al prossimo giocatore
  function nextPlayer() {
    do {
      currentPlayer = (currentPlayer + 1) % players.length;
    } while (players[currentPlayer].lives <= 0);
    
    updatePlayersUI();
    messageDisplay.textContent = `Tocca a ${players[currentPlayer].name}! La bomba è nelle tue mani!`;
    messageDisplay.style.color = "#FFD700";
    
    // Controlla se c'è un solo giocatore rimasto
    const alivePlayers = players.filter(p => p.lives > 0);
    if (alivePlayers.length === 1) {
      endGame(`${alivePlayers[0].name} vince!`);
    }
  }
  
  // Penalizza il giocatore corrente
  function penalizePlayer() {
    const player = players[currentPlayer];
    player.lives--;
    
    // Animazione esplosione
    bombExploded = true;
    const explosion = document.createElement("div");
    explosion.className = "explosion";
    bombDisplay.appendChild(explosion);
    
    // Rimuovi l'esplosione dopo l'animazione
    setTimeout(() => {
      bombDisplay.removeChild(explosion);
    }, 500);
    
    // Aggiorna UI giocatore
    if (player.element) {
      player.element.innerHTML = `
        ${player.name}<br>
        <span class="lives">Vite: ${'♥'.repeat(player.lives)}</span>
      `;
    }
    
    if (player.lives <= 0) {
      showMessage(`${player.name} è eliminato!`, "error");
      
      // Controlla se c'è un solo giocatore rimasto
      const alivePlayers = players.filter(p => p.lives > 0);
      if (alivePlayers.length === 1) {
        endGame(`${alivePlayers[0].name} vince!`);
        return;
      }
    } else {
      showMessage("BOOM! Perdi una vita.", "error");
    }
    
    // Passa al prossimo giocatore
    nextPlayer();
    resetTimer();
  }
  
  // Timer
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    timerDisplay.textContent = timeLeft;
    
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      
      // Cambia colore quando il tempo sta per scadere
      if (timeLeft <= 3) {
        timerDisplay.style.color = "#FF5555";
      }
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        if (!bombExploded) {
          penalizePlayer();
        }
      }
    }, 1000);
  }
  
  // Aggiorna la lista delle parole usate
  function updateWordList() {
    wordList.innerHTML = "";
    usedWords.forEach(word => {
      const wordElement = document.createElement("div");
      wordElement.textContent = word;
      wordList.appendChild(wordElement);
    });
  }
  
  // Mostra un messaggio
  function showMessage(msg, type) {
    messageDisplay.textContent = msg;
    messageDisplay.style.color = 
      type === "error" ? "#ff5555" : 
      type === "success" ? "#28a745" : "#FFD700";
  }
  
  // Fine gioco
  function endGame(msg) {
    isGameActive = false;
    clearInterval(timer);
    showMessage(msg, "success");
    
    // Disabilita input
    wordInput.disabled = true;
    submitBtn.disabled = true;
    
    // Mostra pulsante nuova partita
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "Nuova Partita";
    newGameBtn.onclick = () => location.reload();
    messageDisplay.appendChild(document.createElement("br"));
    messageDisplay.appendChild(newGameBtn);
  }
  
  // Caricamento ritardato pubblicità
  function loadAds() {
    setTimeout(() => {
      if(typeof adsbygoogle !== 'undefined') {
        adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
      }
      
      setTimeout(() => {
        const adSide = document.createElement('div');
        adSide.id = 'ad-side';
        adSide.className = 'ad-unit';
        adSide.innerHTML = `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6771549640814111"></script>
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
  
  // Avvia il gioco
  document.addEventListener('DOMContentLoaded', () => {
    loadAds();
  });