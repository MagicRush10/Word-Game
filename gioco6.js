const tabooCards = [
  {
    target: "TELEFONO",
    taboo: ["CELLULARE", "CHIAMATA", "SQUILLO", "SMARTPHONE"]
  },
  {
    target: "PALLA",
    taboo: ["CALCIO", "BASKET", "GIOCO", "GONFIARE"]
  },
  {
    target: "CIOCCOLATO",
    taboo: ["DOLCE", "CACAO", "TAVOLETTA", "FONDENTE"]
  },
  {
    target: "AEREO",
    taboo: ["VOLARE", "ALI", "PILOTA", "AEROPORTO"]
  },
  {
    target: "OSPEDALE",
    taboo: ["DOTTORE", "MALATO", "REPARTO", "INFERMIERE"]
  },
  {
    target: "GELATO",
    taboo: ["CONO", "GUSTO", "FREDDO", "ESTATE"]
  },
  {
    target: "BICICLETTA",
    taboo: ["PEDALI", "RUOTE", "CICLISMO", "SELLA"]
  },
  {
    target: "LIBRO",
    taboo: ["LEGGERE", "PAGINE", "BIBLIOTECA", "SCRITTORE"]
  },
  {
    target: "PIZZA",
    taboo: ["MARGHERITA", "FORNO", "IMPasto", "PIZZERIA"]
  },
  {
    target: "VASINO",
    taboo: ["BAMBINO", "PIPÌ", "TRAVASO", "EDUCAZIONE"]
  },
  {
    target: "OROLOGIO",
    taboo: ["ORE", "LANCETTE", "POLSO", "TEMPO"]
  },
  {
    target: "DENTISTA",
    taboo: ["DENTE", "TRAPANO", "CARIE", "PAURA"]
  },
  {
    target: "OCCHIALI",
    taboo: ["VISTA", "LENTI", "MONTATURA", "SOLE"]
  },
  {
    target: "CUORE",
    taboo: ["BATTITO", "AMORE", "SANGUE", "CARDIO"]
  },
  {
    target: "PESCE",
    taboo: ["ACQUA", "PINNE", "SQUAME", "PESCARE"]
  },
  {
    target: "VENTILATORE",
    taboo: ["ARIA", "ELICA", "ESTATE", "VELOCITÀ"]
  },
  {
    target: "CUCCHIAIO",
    taboo: ["CUCCHIAIAIO", "MINESTRA", "METALLO", "MANGIARE"]
  },
  {
    target: "PNEUMATICO",
    taboo: ["GOMMA", "AUTO", "RUOTA", "GONFIARE"]
  },
  {
    target: "PARACADUTE",
    taboo: ["CADERE", "SALTO", "APRIRE", "VOLO"]
  },
  {
    target: "LAVATRICE",
    taboo: ["VESTITI", "BUCATO", "GIRARE", "SAPONE"]
  },
  {
    target: "CALEIDOSCOPIO",
    taboo: ["IMMAGINI", "GIRARE", "COLORI", "TUBO"]
  },
  {
    target: "GIRASOLE",
    taboo: ["FIORE", "SOLE", "GIRARE", "SEMI"]
  },
  {
    target: "PINGUINO",
    taboo: ["Ghiaccio", "Antartide", "Uccello", "Neroebianco"]
  },
  {
    target: "FUMETTO",
    taboo: ["BALLOON", "DISEGNO", "STORIA", "PERSONAGGIO"]
  },
  {
    target: "BILIARDO",
    taboo: ["PALLA", "STECCA", "BUCA", "VERDE"]
  },
  {
    target: "PALETTA",
    taboo: ["SPAZZARE", "POLVERE", "MANICO", "SPAZZA"]
  },
  {
    target: "GONDOLA",
    taboo: ["VENEZIA", "CANALE", "REMARE", "BARCA"]
  },
  {
    target: "CANGURO",
    taboo: ["AUSTRALIA", "SACCO", "SALTO", "MARSUPIO"]
  },
  {
    target: "BURRO",
    taboo: ["PANE", "LATTE", "SPALMARE", "GRASSO"]
  },
  {
    target: "PIRAMIDE",
    taboo: ["EGITTO", "TRIANGOLO", "FARAONE", "ANTICA"]
  },
  {
    target: "TIRAMISÙ",
    taboo: ["DOLCE", "CAFFÈ", "SAVoiARDI", "MASCARPONE"]
  },
  {
    target: "CERNIERA",
    taboo: ["PANTALONI", "APRIRE", "METALLO", "CHIUDERE"]
  },
  {
    target: "PAPERCLIP",
    taboo: ["METALLO", "FOGLI", "UFFICIO", "ATTACCARE"]
  },
  {
    target: "IGLOO",
    taboo: ["GHIACCIO", "ESCHIMESE", "CASA", "FREDDO"]
  },
  {
    target: "BOLLICINE",
    taboo: ["ACQUA", "GAS", "FRIZZANTE", "SAPONE"]
  },
  {
    target: "RUTTO",
    taboo: ["GAS", "BOCCA", "RUMORE", "MALEDUCAZIONE"]
  },
  {
    target: "CACCIAVITE",
    taboo: ["VITE", "STRUMENTO", "GIRARE", "RIPARARE"]
  },
  {
    target: "GESSO",
    taboo: ["LAVAGNA", "SCRIVERE", "BIANCO", "SCUOLA"]
  },
  {
    target: "CULLA",
    taboo: ["BAMBINO", "DORMIRE", "DONDOLARE", "NEONATO"]
  },
  {
    target: "FUMO",
    taboo: ["FUOCO", "SIGARETTA", "NUVOLA", "CENERE"]
  },
  {
    target: "BOXE",
    taboo: ["GLOVE", "PUGNO", "RING", "COMBATTIMENTO"]
  },
  {
    target: "PULEDRO",
    taboo: ["CAVALLO", "CUCCIOLO", "ANIMALE", "CRINiera"]
  },
  {
    target: "PATTUMIERA",
    taboo: ["SPAZZATURA", "IMMONDIZIA", "BIDONE", "BUTTARE"]
  },
  {
    target: "BAGNINO",
    taboo: ["SPIAGGIA", "SALVARE", "PISCINA", "SORVEGLIARE"]
  },
  {
    target: "FARFALLA",
    taboo: ["ALI", "VOLARE", "Bruco", "INSETTO"]
  },
  {
    target: "FUNGO",
    taboo: ["BOSCO", "CAPPello", "PIOVERE", "VELENOSO"]
  },
  {
    target: "BABBO NATALE",
    taboo: ["RENNA", "REGALI", "DONI", "NATALE"]
  },
  {
    target: "PAPILLON",
    taboo: ["FARFALLA", "CRAVATTA", "NODO", "ELEGANTE"]
  },
  {
    target: "GIRANDOLA",
    taboo: ["VENTO", "GIRARE", "COLORI", "BAMBINI"]
  },
  {
    target: "OMBRELLONE",
    taboo: ["SPIAGGIA", "SOLE", "OMBRA", "PIANTARE"]
  }
];

// Variabili di gioco
let currentTeam = 0;
let teams = [];
let skipsLeft = 3;
let timer;
let timeLeft = 60;
let currentCard;

// Elementi DOM
const playerSetup = document.getElementById("playerSetup");
const gameArea = document.getElementById("game-area");
const teamPointsDisplay = document.getElementById("team-points");
const timerDisplay = document.getElementById("timer");
const startRoundBtn = document.getElementById("start-round");
const targetWordDisplay = document.getElementById("target-word");
const tabooWordsDisplay = document.getElementById("taboo-words");
const skipBtn = document.getElementById("skip-btn");
const tabooBtn = document.getElementById("taboo-btn");
const correctBtn = document.getElementById("correct-btn");


function initGame(numTeams) {
  playerSetup.style.display = 'none';
  gameArea.style.display = 'block';

  // Reset stato gioco
  teams = [];
  currentTeam = 0;
  
  // Crea squadre
  for (let i = 0; i < numTeams; i++) {
    teams.push({
      name: `Squadra ${i+1}`,
      points: 0
    });
  }

  updateTeamPoints();
  loadNewCard();
  
  // Mostra pulsante inizio
  startRoundBtn.style.display = 'block';
  timerDisplay.textContent = "01:00";
}

// Aggiorna i punteggi delle squadre
function updateTeamPoints() {
  teamPointsDisplay.innerHTML = "";
  teams.forEach((team, index) => {
    const teamDiv = document.createElement("div");
    teamDiv.className = "team";
    teamDiv.innerHTML = `${team.name}: <strong>${team.points}</strong>`;
    if (index === currentTeam) {
      teamDiv.style.border = "2px solid #FFD700";
    }
    teamPointsDisplay.appendChild(teamDiv);
  });
}

// Carica una nuova carta
function loadNewCard() {
  currentCard = tabooCards[Math.floor(Math.random() * tabooCards.length)];
  targetWordDisplay.textContent = currentCard.target;
  
  tabooWordsDisplay.innerHTML = "";
  currentCard.taboo.forEach(word => {
    const wordDiv = document.createElement("div");
    wordDiv.className = "taboo-word";
    wordDiv.textContent = word;
    tabooWordsDisplay.appendChild(wordDiv);
  });
}

// Avvia il timer del round
function startRound() {
  startRoundBtn.style.display = "none";
  skipsLeft = 3;
  skipBtn.textContent = `PASSO (${skipsLeft})`;
  
  timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      endRound();
    }
  }, 1000);
}

// Termina il round
function endRound() {
  clearInterval(timer);
  timeLeft = 60;
  timerDisplay.textContent = "01:00";
  
  currentTeam = (currentTeam + 1) % teams.length;
  updateTeamPoints();
  startRoundBtn.style.display = "block";
  loadNewCard();
}

// Event listeners
startRoundBtn.addEventListener("click", startRound);

skipBtn.addEventListener("click", () => {
  if (skipsLeft > 0) {
    skipsLeft--;
    skipBtn.textContent = `PASSO (${skipsLeft})`;
    loadNewCard();
  }
});

tabooBtn.addEventListener("click", () => {
  teams[currentTeam].points = Math.max(0, teams[currentTeam].points - 1);
  updateTeamPoints();
  loadNewCard();
});

correctBtn.addEventListener("click", () => {
  teams[currentTeam].points++;
  updateTeamPoints();
  loadNewCard();
});

// Caricamento ritardato pubblicità
function loadAds() {
  setTimeout(() => {
    if(typeof adsbygoogle !== 'undefined') {
      adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    }
  }, 3000);
}

document.addEventListener('DOMContentLoaded', loadAds);
