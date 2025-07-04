// Dati delle domande e risposte
const questions = [{
    question: "Animali domestici più comuni:",
    answers: [{
      text: "CANE",
      points: 100
    }, {
      text: "GATTO",
      points: 80
    }, {
      text: "PESCE",
      points: 60
    }, {
      text: "UCCELLO",
      points: 40
    }, {
      text: "CRICETO",
      points: 20
    }, ],
  }, {
    question: "Cibi che si mangiano a colazione:",
    answers: [{
      text: "CAFFÈ",
      points: 90
    }, {
      text: "LATTE",
      points: 85
    }, {
      text: "CORNETTO",
      points: 70
    }, {
      text: "PANE TOSTATO",
      points: 60
    }, {
      text: "SUCCO D'ARANCIA",
      points: 50
    }, ],
  }, {
    question: "Nomina un film di animazione Disney molto conosciuto",
    answers: [{
      text: "BIANCANEVE",
      points: 90
    }, {
      text: "RE LEONE",
      points: 85
    }, {
      text: "ALADDIN",
      points: 70
    }, {
      text: "CENERENTOLA",
      points: 60
    }, {
      text: "FROZEN",
      points: 50
    }, ],
  },{
    question: "Paesi europei più visitati:",
    answers: [{
      text: "FRANCIA",
      points: 100
    }, {
      text: "SPAGNA",
      points: 90
    }, {
      text: "ITALIA",
      points: 80
    }, {
      text: "GERMANIA",
      points: 70
    }, {
      text: "REGNO UNITO",
      points: 60
    }, ],
  }, {
    question: "Sport Olimpici più famosi",
    answers: [{
      text: "ATLETICA",
      points: 95
    }, {
      text: "NUOTO",
      points: 85
    }, {
      text: "GINNASTICA",
      points: 75
    }, {
      text: "CALCIO",
      points: 65
    }, {
      text: "BASKET",
      points: 55
    }, ],
  }, {
    question: "Cose che fai prima di dormire:",
    answers: [{
      text: "LAVARE I DENTI",
      points: 100
    }, {
      text: "LEGGERE",
      points: 80
    }, {
      text: "GUARDARE LA TV",
      points: 70
    }, {
      text: "CONTROLLARE IL TELEFONO",
      points: 60
    }, {
      text: "PREPARARE I VESTITI PER DOMANI",
      points: 50
    }, ],
  }, {
    question: "Nomina le ragioni per cui una persona potrebbe svegliarsi alle 2 di notte",
    answers: [{
      text: "ANDARE IN BAGNO",
      points: 100
    }, {
      text: "INCUBO",
      points: 80
    }, {
      text: "SENTIRE UN RUMORE",
      points: 70
    }, {
      text: "SENTIRE CALDO O FREDDO",
      points: 60
    }, {
      text: "CHIAMATA",
      points: 50
    }, ],
  }, {
    question: "Nomina una persona/cosa che non dovrebbe mai essere lasciata da sola",
    answers: [{
      text: "BAMBINO",
      points: 100
    }, {
      text: "FIAMMA ACCESA",
      points: 80
    }, {
      text: "CANE",
      points: 70
    }, {
      text: "SOLDI",
      points: 60
    }, {
      text: "CHIAVI DI CASA",
      points: 50
    }, ],
  }, {
    question: "Nomina il nome di un mago famoso",
    answers: [{
      text: "HARRY POTTER",
      points: 100
    }, {
      text: "MAGO MERLINO",
      points: 80
    }, {
      text: "GANDALF",
      points: 70
    }, {
      text: "DOTTOR STRANGE",
      points: 60
    }, {
      text: "MAGO DI OZ",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che ti farebbe sospettare che la tua casa sia infestata",
    answers: [{
      text: "RUMORI",
      points: 100
    }, {
      text: "OGGETTI CHE SI MUOVONO",
      points: 80
    }, {
      text: "LUCI INTERMITTENTI",
      points: 70
    }, {
      text: "PORTE CHE SBATTONO",
      points: 60
    }, {
      text: "OMBRE",
      points: 50
    }, ],
  },{
    question: "Nomina un posto dove le persone preferiscono sedersi dietro",
    answers: [{
      text: "CINEMA",
      points: 100
    }, {
      text: "AUTOBUS",
      points: 80
    }, {
      text: "CHIESA",
      points: 70
    }, {
      text: "MACCHINA",
      points: 60
    }, {
      text: "SCUOLA",
      points: 50
    }, ],
  },{
    question: "Nomina i cibi italiani più famosi nel mondo",
    answers: [{
      text: "PIZZA",
      points: 100
    }, {
      text: "LASAGNA",
      points: 80
    }, {
      text: "CARBONARA",
      points: 70
    }, {
      text: "PESTO",
      points: 60
    }, {
      text: "TORTELLINI",
      points: 50
    }, ],
  },{
    question: "Nomina i supereroi più famosi nel mondo",
    answers: [{
      text: "SPIDERMAN",
      points: 100
    }, {
      text: "WONDER WOMAN",
      points: 80
    }, {
      text: "BATMAN",
      points: 70
    }, {
      text: "IRON MAN",
      points: 60
    }, {
      text: "SUPERMAN",
      points: 50
    }, ],
  },{
    question: "Nomina i pokemon più popolari al mondo",
    answers: [{
      text: "GRENINJA",
      points: 100
    }, {
      text: "LUCARIO",
      points: 80
    }, {
      text: "MIMIKYU",
      points: 70
    }, {
      text: "CHARIZARD",
      points: 60
    }, {
      text: "PIKACHU",
      points: 50
    }, ],
  },{
    question: "Nomina i videogiochi più venduti nella storia",
    answers: [{
      text: "TETRIS",
      points: 100
    }, {
      text: "MINECRAFT",
      points: 80
    }, {
      text: "GTA 5",
      points: 70
    }, {
      text: "WII SPORTS",
      points: 60
    }, {
      text: "PUBG",
      points: 50
    }, ],
  },{
    question: "Personaggi iconici dei videogiochi",
    answers: [{
      text: "MARIO",
      points: 100
    }, {
      text: "SONIC",
      points: 80
    }, {
      text: "LINK",
      points: 70
    }, {
      text: "LARA CROFT",
      points: 60
    }, {
      text: "CRASH BANDICOOT",
      points: 50
    }, ],
  },{
    question: "Nomina i film con il maggior incasso della storia",
    answers: [{
      text: "AVATAR",
      points: 100
    }, {
      text: "AVENGERS ENDGAME",
      points: 80
    }, {
      text: "AVATAR LA VIA DELL'ACQUA",
      points: 70
    }, {
      text: "TITANIC",
      points: 60
    }, {
      text: "NE ZHA 2",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa associato con i vampiri",
    answers: [{
      text: "TWILIGHT",
      points: 100
    }, {
      text: "SANGUE",
      points: 80
    }, {
      text: "AGLIO",
      points: 70
    }, {
      text: "PIPISTRELLO",
      points: 60
    }, {
      text: "DRACULA",
      points: 50
    }, ],
  },{
    question: "Motivi per cui arrivi tardi a lavoro",
    answers: [{
      text: "TRAFFICO",
      points: 100
    }, {
      text: "SVEGLIATO TARDI",
      points: 80
    }, {
      text: "MEZZI PUBBLICI IN RITARDO",
      points: 70
    }, {
      text: "BAMBINI DA PORTARE A SCUOLA",
      points: 60
    }, {
      text: "GUASTO ALL'AUTO",
      points: 50
    }, ],
  },{
    question: "Nomina gli oggetti che porti in spiaggia",
    answers: [{
      text: "TELO",
      points: 100
    }, {
      text: "COSTUME",
      points: 80
    }, {
      text: "CREMA SOLARE",
      points: 70
    }, {
      text: "CIABATTE",
      points: 60
    }, {
      text: "OCCHIALI DA SOLE",
      points: 50
    }, ],
  },{
    question: "Nomina le 5 password più usate",
    answers: [{
      text: "123456",
      points: 100
    }, {
      text: "123456789",
      points: 80
    }, {
      text: "PASSWORD",
      points: 70
    }, {
      text: "CIAO",
      points: 60
    }, {
      text: "QWERTY",
      points: 50
    }, ],
  },{
    question: "Nomina le cose che una persona dimentica spesso",
    answers: [{
      text: "CHIAVI",
      points: 100
    }, {
      text: "CELLULARE",
      points: 80
    }, {
      text: "PORTAFOGLIO",
      points: 70
    }, {
      text: "COMPLEANNO",
      points: 60
    }, {
      text: "PARCHEGGIO",
      points: 50
    }, ],
  },{
    question: "Nomina i luoghi dove devi fare silenzio",
    answers: [{
      text: "BIBLIOTECA",
      points: 100
    }, {
      text: "CHIESA",
      points: 80
    }, {
      text: "CINEMA",
      points: 70
    }, {
      text: "OSPEDALE",
      points: 60
    }, {
      text: "SCUOLA",
      points: 50
    }, ],
  },{
    question: "Nomina i lavori che un bambino sogna di fare",
    answers: [{
      text: "CALCIATORE",
      points: 100
    }, {
      text: "VETERINARIO",
      points: 80
    }, {
      text: "ASTRONAUTA",
      points: 70
    }, {
      text: "DOTTORE",
      points: 60
    }, {
      text: "INSEGNANTE",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa di appiccicoso",
    answers: [{
      text: "COLLA",
      points: 100
    }, {
      text: "MIELE",
      points: 80
    }, {
      text: "GOMMA DA MASTICARE",
      points: 70
    }, {
      text: "CARAMELLA",
      points: 60
    }, {
      text: "NASTRO ADESIVO",
      points: 50
    }, ],
  },{
    question: "Nomina le cose che le persone collezionano",
    answers: [{
      text: "FRANCOBOLLI",
      points: 100
    }, {
      text: "MONETE",
      points: 80
    }, {
      text: "FIGURINE",
      points: 70
    }, {
      text: "LIBRI",
      points: 60
    }, {
      text: "SCARPE",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che vola",
    answers: [{
      text: "UCCELLO",
      points: 100
    }, {
      text: "AEREO",
      points: 80
    }, {
      text: "APE",
      points: 70
    }, {
      text: "FARFALLA",
      points: 60
    }, {
      text: "AQUILONE",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che fa molto rumore",
    answers: [{
      text: "CAMPANELLO",
      points: 100
    }, {
      text: "SVEGLIA",
      points: 80
    }, {
      text: "MOTORE",
      points: 70
    }, {
      text: "CELLULARE",
      points: 60
    }, {
      text: "BAMBINI",
      points: 50
    }, ],
  },{
    question: "Nomina le paure più diffuse",
    answers: [{
      text: "FANTASMI",
      points: 100
    }, {
      text: "BUIO",
      points: 80
    }, {
      text: "RAGNI",
      points: 70
    }, {
      text: "SERPENTI",
      points: 60
    }, {
      text: "FILM HORROR",
      points: 50
    }, ],
  },{
    question: "Nomina le bevande analcoliche più bevute",
    answers: [{
      text: "ACQUA",
      points: 100
    }, {
      text: "COCA COLA",
      points: 80
    }, {
      text: "ARANCIATA",
      points: 70
    }, {
      text: "SUCCO DI FRUTTA",
      points: 60
    }, {
      text: "TÈ",
      points: 50
    }, ],
  },{
    question: "Nomina le festività festeggiate tipicamente in famiglia",
    answers: [{
      text: "NATALE",
      points: 100
    }, {
      text: "PASQUA",
      points: 80
    }, {
      text: "COMPLEANNO",
      points: 70
    }, {
      text: "CAPODANNO",
      points: 60
    }, {
      text: "FERRAGOSTO",
      points: 50
    }, ],
},{
    question: "Nomina i superpoteri che la gente vorrebbe avere",
    answers: [{
      text: "INVISIBILITÀ",
      points: 100
    }, {
      text: "VOLARE",
      points: 80
    }, {
      text: "LEGGERE LA MENTE",
      points: 70
    }, {
      text: "TELETRASPORTO",
      points: 60
    }, {
      text: "SUPER FORZA",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che puzza",
    answers: [{
      text: "ASCELLE",
      points: 100
    }, {
      text: "SCARPE",
      points: 80
    }, {
      text: "FORMAGGIO",
      points: 70
    }, {
      text: "SPAZZATURA",
      points: 60
    }, {
      text: "CALZINI",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa di freddo",
    answers: [{
      text: "GHIACCIO",
      points: 100
    }, {
      text: "NEVE",
      points: 80
    }, {
      text: "GELATO",
      points: 70
    }, {
      text: "FREEZER",
      points: 60
    }, {
      text: "ACQUA",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che si rompe facilmente",
    answers: [{
      text: "VETRO",
      points: 100
    }, {
      text: "UOVO",
      points: 80
    }, {
      text: "VASO",
      points: 70
    }, {
      text: "TELEFONO",
      points: 60
    }, {
      text: "PIATTO",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che rovina il primo appuntamento",
    answers: [{
      text: "EX",
      points: 100
    }, {
      text: "ALITO",
      points: 80
    }, {
      text: "RITARDO",
      points: 70
    }, {
      text: "TELEFONO",
      points: 60
    }, {
      text: "MALEDUCAZIONE",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che puoi lanciare",
    answers: [{
      text: "PALLA",
      points: 100
    }, {
      text: "SASSO",
      points: 80
    }, {
      text: "CARTA",
      points: 70
    }, {
      text: "CUSCINO",
      points: 60
    }, {
      text: "INSULTO",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che trovi in frigorifero",
    answers: [{
      text: "LATTE",
      points: 100
    }, {
      text: "UOVO",
      points: 80
    }, {
      text: "BURRO",
      points: 70
    }, {
      text: "ACQUA",
      points: 60
    }, {
      text: "FORMAGGIO",
      points: 50
    }, ],
  },{
    question: "Nomina un animale che trovi in giungla",
    answers: [{
      text: "LEONE",
      points: 100
    }, {
      text: "SCIMMIA",
      points: 80
    }, {
      text: "TIGRE",
      points: 70
    }, {
      text: "ELEFANTE",
      points: 60
    }, {
      text: "SERPENTE",
      points: 50
    }, ],
  },{
    question: "Nomina una parte del corpo che si può slogare",
    answers: [{
      text: "CAVIGLIA",
      points: 100
    }, {
      text: "POLSO",
      points: 80
    }, {
      text: "SPALLA",
      points: 70
    }, {
      text: "DITO",
      points: 60
    }, {
      text: "GINOCCHIO",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa che trovi in bagno",
    answers: [{
      text: "SPAZZOLINO",
      points: 100
    }, {
      text: "SAPONE",
      points: 80
    }, {
      text: "ASCIUGAMANO",
      points: 70
    }, {
      text: "CARTA IGIENICA",
      points: 60
    }, {
      text: "SHAMPOO",
      points: 50
    }, ],
  },{
    question: "Nomina qualcosa trovi al parco giochi",
    answers: [{
      text: "ALTALENA",
      points: 100
    }, {
      text: "SCIVOLO",
      points: 80
    }, {
      text: "BAMBINI",
      points: 70
    }, {
      text: "PANCHINA",
      points: 60
    }, {
      text: "GIOSTRA",
      points: 50
    }, ],
  },// Puoi aggiungere altre domande qui
];

let players = [];
let currentPlayerIndex = 0;
let currentQuestion = null;
let revealedAnswers = [];
let strikes = 0;
const MAX_STRIKES = 3;
let playersFailedCount = 0; // Nuova variabile per tenere traccia dei giocatori che hanno esaurito i tentativi

// Elementi del DOM
const playerSetupDiv = document.getElementById("playerSetup");
const gameAreaDiv = document.getElementById("gameArea");
const questionDisplay = document.getElementById("question-display");
const answersBoard = document.getElementById("answers-board");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const messageDisplay = document.getElementById("message");
const playerScoreDisplay = document.getElementById("player-score-display");

// Inizializzazione del gioco
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const numPlayers = parseInt(event.currentTarget.dataset.players);
      setupGame(numPlayers);
    });
  });

  guessButton.addEventListener("click", handleGuess);
  guessInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  });
});

function setupGame(numPlayers) {
  players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      name: `Giocatore ${i + 1}`,
      score: 0,
      strikesTaken: 0 // Inizializza i tentativi presi per ogni giocatore
    });
  }

  playerSetupDiv.style.display = "none";
  gameAreaDiv.style.display = "block";
  updatePlayerScoresUI();
  startRound();
}

function startRound() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  revealedAnswers = Array(currentQuestion.answers.length).fill(false);
  strikes = 0; // Resetta gli strike per il nuovo round
  playersFailedCount = 0; // Resetta i giocatori che hanno fallito per il nuovo round
  players.forEach(player => player.strikesTaken = 0); // Resetta i tentativi per tutti i giocatori
  messageDisplay.textContent = `È il turno di ${players[currentPlayerIndex].name}.`;

  displayQuestion();
  displayAnswersBoard();
}

function displayQuestion() {
  questionDisplay.textContent = currentQuestion.question;
}

function displayAnswersBoard() {
  answersBoard.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const answerRow = document.createElement("div");
    answerRow.classList.add("answer-row");
    answerRow.dataset.index = index;

    const answerNumber = document.createElement("div");
    answerNumber.classList.add("answer-number");
    answerNumber.textContent = index + 1;

    const answerText = document.createElement("div");
    answerText.classList.add("answer-text");
    answerText.textContent = revealedAnswers[index] ? answer.text : "___";

    const answerPoints = document.createElement("div");
    answerPoints.classList.add("answer-points");
    answerPoints.textContent = revealedAnswers[index] ? answer.points : "";

    if (revealedAnswers[index]) {
      answerRow.classList.add("revealed");
    }

    answerRow.appendChild(answerNumber);
    answerRow.appendChild(answerText);
    answerRow.appendChild(answerPoints);
    answersBoard.appendChild(answerRow);
  });
}

function handleGuess() {
  const guess = guessInput.value.trim().toUpperCase();
  guessInput.value = ""; // Pulisci l'input

  if (guess === "") {
    messageDisplay.textContent = "Inserisci una risposta!";
    return;
  }

  const foundIndex = currentQuestion.answers.findIndex(
    (answer) => answer.text === guess && !revealedAnswers[currentQuestion.answers.indexOf(answer)]
  );

  if (foundIndex !== -1) {
    // Risposta corretta e non ancora rivelata
    const answer = currentQuestion.answers[foundIndex];
    revealedAnswers[foundIndex] = true;
    players[currentPlayerIndex].score += answer.points;
    messageDisplay.textContent = `Corretto! Hai guadagnato ${answer.points} punti.`;
    updatePlayerScoresUI();
    displayAnswersBoard(); // Aggiorna la bacheca per mostrare la risposta rivelata

    // Controlla se tutte le risposte sono state trovate
    if (revealedAnswers.every(status => status === true)) {
      endRound();
    }
  } else {
    // Risposta errata o già rivelata
    strikes++;
    players[currentPlayerIndex].strikesTaken++; // Incrementa i tentativi presi dal giocatore attuale
    messageDisplay.textContent = `Sbagliato! Strike ${strikes}/${MAX_STRIKES}.`;
    if (strikes >= MAX_STRIKES) {
      messageDisplay.textContent += ` Il turno di ${players[currentPlayerIndex].name} è finito.`;
      playersFailedCount++; // Incrementa il contatore dei giocatori che hanno fallito i loro tentativi
      if (playersFailedCount === players.length) {
        // Tutti i giocatori hanno esaurito i tentativi
        endRound(true); // Termina il round e rivela le risposte
      } else {
        passTurn(); // Passa il turno al prossimo giocatore disponibile
      }
    }
  }
}

function passTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  strikes = 0; // Resetta gli strike per il prossimo giocatore
  // Salta i giocatori che hanno già esaurito i loro tentativi in questo round
  while (players[currentPlayerIndex].strikesTaken >= MAX_STRIKES && playersFailedCount < players.length) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  }

  if (playersFailedCount === players.length) {
    endRound(true); // Se tutti i giocatori hanno fallito, termina il round e rivela
  } else {
    messageDisplay.textContent += ` Ora tocca a ${players[currentPlayerIndex].name}.`;
  }
}

function updatePlayerScoresUI() {
  playerScoreDisplay.innerHTML = "";
  players.forEach((player) => {
    const playerScoreDiv = document.createElement("div");
    playerScoreDiv.classList.add("player-score");
    playerScoreDiv.textContent = `${player.name}: ${player.score} punti`;
    playerScoreDisplay.appendChild(playerScoreDiv);
  });
}

function endRound(revealAll = false) {
  const allAnswersFound = revealedAnswers.every((status) => status === true);

  if (revealAll) {
    revealedAnswers.fill(true); // Rivelare tutte le risposte
    displayAnswersBoard(); // Aggiorna la bacheca per mostrare tutte le risposte
    messageDisplay.textContent = "Tutti i giocatori hanno esaurito i tentativi. Le risposte sono state rivelate! Nuovo round!";
  } else if (allAnswersFound) {
    messageDisplay.textContent = "Tutte le risposte sono state trovate! Nuovo round!";
  } else {
    messageDisplay.textContent = "Fine del round. Non tutte le risposte sono state trovate.";
  }

  // Puoi aggiungere qui la logica per determinare un vincitore finale
  // o semplicemente iniziare un nuovo round
  setTimeout(() => {
    // Semplice per ora: scegli una nuova domanda e resetta
    questions.splice(questions.indexOf(currentQuestion), 1); // Rimuove la domanda usata
    if (questions.length === 0) {
      messageDisplay.textContent = "Tutte le domande sono state esaurite! Il gioco è finito.";
      const winner = players.reduce((prev, current) => (prev.score > current.score) ? prev : current);
      messageDisplay.innerHTML = `<p class="final-message">🎉 ${winner.name} vince con ${winner.score} punti! 🎉</p>`;
      guessInput.style.display = 'none';
      guessButton.style.display = 'none';
      return;
    }
    startRound();
  }, 3000); // Ritardo per leggere il messaggio
}
