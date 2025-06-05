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
      text: "PESCE ROSSO",
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
    question: "Sport Olimpici:",
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
      text: "PALLACANESTRO",
      points: 55
    }, ],
  }, {
    question: "Cose che fai prima di dormire:",
    answers: [{
      text: "LAVARSI I DENTI",
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
  }, // Puoi aggiungere altre domande qui
];

let players = [];
let currentPlayerIndex = 0;
let currentQuestion = null;
let revealedAnswers = [];
let strikes = 0;
const MAX_STRIKES = 3;

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
  strikes = 0; // Reset strikes for the new round
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
  guessInput.value = ""; // Clear input

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
    messageDisplay.textContent = `Sbagliato! Strike ${strikes}/${MAX_STRIKES}.`;
    if (strikes >= MAX_STRIKES) {
      messageDisplay.textContent += ` Il turno di ${players[currentPlayerIndex].name} è finito.`;
      passTurn();
    }
  }
}

function passTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  strikes = 0; // Reset strikes for the next player
  messageDisplay.textContent += ` Ora tocca a ${players[currentPlayerIndex].name}.`;
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

function endRound() {
  const allAnswersFound = revealedAnswers.every((status) => status === true);

  if (allAnswersFound) {
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