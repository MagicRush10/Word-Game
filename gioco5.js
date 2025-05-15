// Database di parole con relative emoji
const emojiWords = [
    { word: "HARRYPOTTER", emoji: "🧹​⚡👓📚", hint: "Mago protagonista di una saga" },
    { word: "TITANIC", emoji: "🚢🧊💔🎻", hint: "Film tragico" },
    { word: "KUNGFUPANDA", emoji: "🐼🥋🌀🐉", hint: "Il famoso Guerriero Dragone" },
    { word: "RELEONE", emoji: "🦁👑🌅", hint: "Film Disney." },
    { word: "SPIDERMAN", emoji:"🕷️🧑‍🎓🏙️", hint: "Uno studente che ha acquisito straordinari poteri dopo un “incontro” molto pungente" },
    { word: "ZEUS", emoji:"🧔⚡⛰️🌩️", hint: "Il re degli dei" },
    { word: "CUPIDO", emoji:"🏹💘", hint: "La sua freccia fa innamorare tutti" },
    { word: "CENERENTOLA", emoji: "👑👠🎃🕛", hint: "Favola per bambini" },
    { word: "CAPITANAMERICA", emoji: "🦸‍♂️⚡🛡️", hint: "Supereroe Marvel" },
    { word: "SIMPSON", emoji:"🍩👨‍👩‍👧‍👦🏠🟨", hint: "Famiglia americana gialla" },
    { word: "SQUIDGAME", emoji:"🦑🏆💀", hint:"Giochi per bambini, ma mortali" },
    { word: "THEWALKINGDEAD", emoji: "🧟‍♂️🏙️💀🧠", hint: "Serie su sopravvissuti in un mondo pieno di zombie." },
    { word: "FERRARI", emoji: "🏎️💨🔴🏁", hint: "Marca automobilistica italiana famosa per le vetture da corsa" },
    { word: "ILSIGNOREDEGLIANELLI", emoji: "🧙‍♂️💍🔥🗻", hint: "Una saga epica di un gruppo di eroi alla ricerca di un anello potente." },
    { word: "FROZEN", emoji: "🏰👭❄️☃️", hint: "Film Disney su due sorelle." },
    { word: "MONKEYDLUFFY", emoji: "🏴‍☠️🍖👒", hint: "Protagonista di un anime famoso, colui che diventerà il re dei pirati" },
    { word: "SUPERMARIO", emoji: "🍄🧢🐢🏰", hint: "Il classico dei classici, con salti e funghi." },
    { word: "ALADDIN", emoji: "🧞‍♂️🕌🪔🐒", hint: "3 desideri ed un tappeto volante" },
    { word: "DUMBO", emoji: "🐘🎪🦢👂", hint: "Orecchie giganti e cuore ancora più grande" },
    { word: "VIGILEDELFUOCO", emoji: "🚒🔥🚒", hint: "Salva le persone dagli incendi" },
    { word: "RATATOUILLE", emoji: "🍽️🐀👨‍🍳", hint: "Quando un topo è il miglior chef di Parigi" },
    { word: "INSIDEOUT", emoji: "🧡💭😢😊", hint: "Quando le emozioni prendono il sopravvento" },
    { word: "DETECTIVE", emoji: "🕵️‍♂️🧐📁", hint: "Risolve enigmi e casi irrisolti" },
    { word: "ALLARICERCADINEMO", emoji: "🐠🔍🌊💦", hint: "Padre in cerca... con memoria corta" },
    { word: "WILLYWONKAELAFABBRICADICIOCCOLATO", emoji: "👓🎩🍫🍭", hint: "Una fabbrica dove tutto è dolce… e molto strano." },
    { word: "CALCIO", emoji: "⚽🥅🧤", hint: "11 contro 11, ma solo 1 può usare le mani" },
    { word: "HALLOWEEN", emoji: "🎃👻🕯️🦇", hint: "La notte in cui i mostri sono benvenuti." },
    { word: "NATALE", emoji: "🎄🎁🎅❄️", hint: "Tempo di luci,panettoni e regali." },
    { word: "TOYSTORY", emoji: "🦖👽🧸🚀", hint: "I giocattoli prendono vita..." },
    { word: "CRASHBANDICOOT", emoji: "🦊💣🛩️🐒", hint: "Salti e rotazioni in una giungla piena di pericoli." },
    { word: "MUSICA", emoji: "🎵", hint: "Suoni organizzati" },
    { word: "PALLA", emoji: "⚽", hint: "Usata in molti sport" },
    { word: "REGALO", emoji: "🎁", hint: "Si scambia a Natale" },
    { word: "MEDICO", emoji: "🏥💉🩺", hint: "Cura le persone malate" },
    { word: "STELLA", emoji: "⭐", hint: "Brilla nel cielo" },
    { word: "CIELO", emoji: "☁️", hint: "Vediamo sopra di noi" },
    { word: "PIANTA", emoji: "🌱", hint: "Cresce dalla terra" },
    { word: "SOLDATO", emoji: "💂", hint: "Protegge il paese" },
    { word: "MAESTRA", emoji: "👩🏫", hint: "Insegna a scuola" },
    { word: "BAMBINO", emoji: "👶", hint: "Piccolo essere umano" },
    { word: "FAMIGLIA", emoji: "👪", hint: "Genitori e figli" },
    { word: "ASTRONAUTA", emoji: "🧑‍🚀🌌🌍", hint: "Viaggia nello spazio" },
    { word: "VIAGGIO", emoji: "✈️🌍", hint: "Spostarsi lontano" },
    { word: "VACANZA", emoji: "🏖️", hint: "Periodo di riposo" },
    { word: "SPIAGGIA", emoji: "🏝️", hint: "Sabbia e mare" },
    { word: "MONTAGNA", emoji: "⛰️", hint: "Elevazione naturale" },
    { word: "GHOSTBUSTERS", emoji: "👻👨‍🔬🚌🔫", hint: "Se c’è qualcosa di strano nel tuo quartiere…" },
    { word: "PIOGGIA", emoji: "🌧️", hint: "Acqua che cade dal cielo" },
    { word: "ARCOBALENO", emoji: "🌈", hint: "Appare dopo la pioggia" },
    { word: "CORRIERE", emoji: "📦🚚", hint: "Consegna i pacchi" },
    { word: "GIUDICE", emoji: "⚖️👨‍⚖️", hint: "Pronuncia sentenze" },
    { word: "DEATHNOTE", emoji: "🍎📓🧠", hint: "L'anime del quaderno della morte" },
    { word: "DRACULA", emoji: "🧛‍♂️🌑🦇🩸", hint:"Mostro notturno"},
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
