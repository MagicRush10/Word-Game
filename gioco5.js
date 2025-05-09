// Database di parole con relative emoji
const emojiWords = [
    { word: "SOLE", emoji: "☀️", hint: "Ci dà luce e calore" },
    { word: "LUNA", emoji: "🌙", hint: "Brilla di notte" },
    { word: "MARE", emoji: "🌊", hint: "Grande distesa d'acqua" },
    { word: "FUOCO", emoji: "🔥", hint: "Produce calore e luce" },
    { word: "FIORE", emoji: "🌸", hint: "Cresce nei giardini" },
    { word: "ALBERO", emoji: "🌳", hint: "Ha foglie e radici" },
    { word: "GATTO", emoji: "🐱", hint: "Animale domestico" },
    { word: "CANE", emoji: "🐶", hint: "Miglior amico dell'uomo" },
    { word: "PESCE", emoji: "🐟", hint: "Vive nell'acqua" },
    { word: "UCCELLO", emoji: "🐦", hint: "Vola nel cielo" },
    { word: "MELA", emoji: "🍎", hint: "Frutto rosso o verde" },
    { word: "BANANA", emoji: "🍌", hint: "Frutto giallo" },
    { word: "PIZZA", emoji: "🍕", hint: "Cibo italiano famoso" },
    { word: "GELATO", emoji: "🍦", hint: "Dolce freddo" },
    { word: "AUTO", emoji: "🚗", hint: "Mezzo di trasporto" },
    { word: "TRENO", emoji: "🚂", hint: "Viaggia sui binari" },
    { word: "AEREO", emoji: "✈️", hint: "Vola nel cielo" },
    { word: "CASA", emoji: "🏠", hint: "Dove si abita" },
    { word: "SCUOLA", emoji: "🏫", hint: "Dove si studia" },
    { word: "OSPEDALE", emoji: "🏥", hint: "Dove si curano i malati" },
    { word: "LIBRO", emoji: "📖", hint: "Contiene storie o informazioni" },
    { word: "PENNA", emoji: "✏️", hint: "Serve per scrivere" },
    { word: "OROLOGIO", emoji: "⌚", hint: "Indica l'ora" },
    { word: "TELEFONO", emoji: "📱", hint: "Usato per comunicare" },
    { word: "COMPUTER", emoji: "💻", hint: "Usato per lavorare o giocare" },
    { word: "MUSICA", emoji: "🎵", hint: "Suoni organizzati" },
    { word: "PALLA", emoji: "⚽", hint: "Usata in molti sport" },
    { word: "REGALO", emoji: "🎁", hint: "Si scambia a Natale" },
    { word: "CUORE", emoji: "❤️", hint: "Simbolo dell'amore" },
    { word: "STELLA", emoji: "⭐", hint: "Brilla nel cielo" },
    { word: "CIELO", emoji: "☁️", hint: "Vediamo sopra di noi" },
    { word: "PIANTA", emoji: "🌱", hint: "Cresce dalla terra" },
    { word: "SOLDATO", emoji: "💂", hint: "Protegge il paese" },
    { word: "DOTTORE", emoji: "👨⚕️", hint: "Cura le persone" },
    { word: "MAESTRA", emoji: "👩🏫", hint: "Insegna a scuola" },
    { word: "BAMBINO", emoji: "👶", hint: "Piccolo essere umano" },
    { word: "FAMIGLIA", emoji: "👪", hint: "Genitori e figli" },
    { word: "AMICI", emoji: "👬", hint: "Persone care" },
    { word: "VIAGGIO", emoji: "✈️🌍", hint: "Spostarsi lontano" },
    { word: "VACANZA", emoji: "🏖️", hint: "Periodo di riposo" },
    { word: "SPIAGGIA", emoji: "🏝️", hint: "Sabbia e mare" },
    { word: "MONTAGNA", emoji: "⛰️", hint: "Elevazione naturale" },
    { word: "NEVE", emoji: "❄️", hint: "Precipitazione fredda" },
    { word: "PIOGGIA", emoji: "🌧️", hint: "Acqua che cade dal cielo" },
    { word: "ARCOBALENO", emoji: "🌈", hint: "Appare dopo la pioggia" },
    { word: "VENTO", emoji: "💨", hint: "Aria in movimento" },
    { word: "TERREMOTO", emoji: "🌋", hint: "Movimento della terra" },
    { word: "TEMPORALE", emoji: "⛈️", hint: "Pioggia e fulmini" }
  ];
  
  // Stato del gioco
  let gameState = {
    currentWord: null,
    guessedLetters: [],
    wrongLetters: [],
    attemptsLeft: 5,
    usedWords: []
  };
  
  // Elementi DOM
  const emojiDisplay = document.getElementById("emoji-display");
  const wordDisplay = document.getElementById("word-display");
  const keyboard = document.getElementById("keyboard");
  const messageDisplay = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts-left");
  const progressBar = document.getElementById("progress-bar");
  const hintBtn = document.getElementById("hint-btn");
  const newGameBtn = document.getElementById("new-game-btn");
  
  // Inizializza il gioco
  function initGame() {
    // Scegli una parola casuale non ancora usata
    const availableWords = emojiWords.filter(word => !gameState.usedWords.includes(word.word));
    
    if (availableWords.length === 0) {
      // Se tutte le parole sono state usate, resetta la lista
      gameState.usedWords = [];
      initGame();
      return;
    }
    
    gameState.currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    gameState.usedWords.push(gameState.currentWord.word);
    gameState.guessedLetters = [];
    gameState.wrongLetters = [];
    gameState.attemptsLeft = 5;
    
    // Aggiorna l'interfaccia
    updateUI();
    
    // Crea la tastiera
    createKeyboard();
  }
  
  // Aggiorna l'interfaccia
  function updateUI() {
    // Mostra le emoji
    emojiDisplay.textContent = gameState.currentWord.emoji;
    
    // Mostra la parola con le lettere indovinate
    let displayWord = "";
    for (const letter of gameState.currentWord.word) {
      if (gameState.guessedLetters.includes(letter.toUpperCase())) {
        displayWord += letter.toUpperCase() + " ";
      } else {
        displayWord += "_ ";
      }
    }
    wordDisplay.textContent = displayWord.trim();
    
    // Aggiorna i tentativi rimasti
    attemptsDisplay.textContent = gameState.attemptsLeft;
    
    // Aggiorna la barra di progresso
    const progress = ((gameState.guessedLetters.length / gameState.currentWord.word.length) * 100).toFixed(0);
    progressBar.style.width = `${progress}%`;
    
    // Controlla se il giocatore ha vinto o perso
    checkGameStatus();
  }
  
  // Crea la tastiera
  function createKeyboard() {
    keyboard.innerHTML = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (const letter of letters) {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = letter;
      key.dataset.letter = letter;
      
      // Disabilita i tasti già usati
      if (gameState.guessedLetters.includes(letter) || gameState.wrongLetters.includes(letter)) {
        key.classList.add("used");
      }
      
      key.addEventListener("click", () => handleLetterClick(letter));
      keyboard.appendChild(key);
    }
  }
  
  // Gestisce il click su una lettera
  function handleLetterClick(letter) {
    // Se la lettera è già stata usata, ignora
    if (gameState.guessedLetters.includes(letter) || gameState.wrongLetters.includes(letter)) {
      return;
    }
    
    // Se la lettera è nella parola
    if (gameState.currentWord.word.toUpperCase().includes(letter)) {
      gameState.guessedLetters.push(letter);
      showMessage(`Bravo! La lettera ${letter} c'è!`, "success");
    } else {
      gameState.wrongLetters.push(letter);
      gameState.attemptsLeft--;
      showMessage(`La lettera ${letter} non c'è!`, "error");
    }
    
    // Aggiorna l'interfaccia
    updateUI();
    createKeyboard();
  }
  
  // Controlla lo stato del gioco
  function checkGameStatus() {
    // Se il giocatore ha indovinato tutte le lettere
    const wordGuessed = gameState.currentWord.word.toUpperCase().split("").every(letter => 
      gameState.guessedLetters.includes(letter)
    );
    
    if (wordGuessed) {
      showMessage(`Complimenti! Hai indovinato: ${gameState.currentWord.word}`, "success");
      disableKeyboard();
      return;
    }
    
    // Se il giocatore ha esaurito i tentativi
    if (gameState.attemptsLeft <= 0) {
      showMessage(`Hai perso! La parola era: ${gameState.currentWord.word}`, "error");
      disableKeyboard();
      return;
    }
  }
  
  // Disabilita la tastiera
  function disableKeyboard() {
    document.querySelectorAll(".key").forEach(key => {
      key.classList.add("used");
    });
  }
  
  // Mostra un messaggio
  function showMessage(msg, type) {
    messageDisplay.textContent = msg;
    messageDisplay.style.color = 
      type === "error" ? "#ff5555" : 
      type === "success" ? "#28a745" : "#FFD700";
  }
  
  // Mostra un suggerimento
  function showHint() {
    showMessage(`Suggerimento: ${gameState.currentWord.hint}`, "info");
  }
  
  // Event listeners
  hintBtn.addEventListener("click", showHint);
  newGameBtn.addEventListener("click", initGame);
  
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
               data-ad-client="ca-pub-6771549640814111"
               data-ad-slot="0987654321"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        `;
        document.body.appendChild(adSide);
      }, 30000);
    }, 3000);
  }
  
  // Avvia il gioco
  document.addEventListener('DOMContentLoaded', () => {
    initGame();
    loadAds();
  });
