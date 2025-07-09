const tabooCards = [
  {
    target: "TELEFONO",
    taboo: ["CELLULARE", "CHIAMATA", "SQUILLO", "SMARTPHONE"]
  },
   {
    target: "ANTICIPO",
    taboo: ["RITARDO", "PRIMA", "PRESTO", "ARRIVARE"]
  },
   {
    target: "ANTIDOTO",
    taboo: ["VELENO", "RIMEDIO", "MEDICINA", "CURA"]
  },
   {
    target: "ALTER EGO",
    taboo: ["VICE", "PERSONA", "SOSTITUTO", "OPPOSTO"]
  },
   {
    target: "ROMA",
    taboo: ["CITTA'", "COLOSSEO", "LAZIO", "ITALIA"]
  },
   {
    target: "ABBRACCIO",
    taboo: ["STRINGERE", "AFFETTO", "COCCOLARE", "COMPRENDERE"]
  },
   {
    target: "BANANA",
    taboo: ["FRUTTO", "GIALLO", "BUCCIA", "SCIVOLARE"]
  },
   {
    target: "GIRAFFA",
    taboo: ["COLLO", "AFRICA", "GRANDE", "ERBIVORO"]
  },
   {
    target: "CANE",
    taboo: ["SCODINZOLARE", "GUINZAGLIO", "ABBAIARE", "CUCCIA"]
  },
   {
    target: "SORELLA",
    taboo: ["FRATELLO", "FAMIGLIA", "MAMMA", "PAPA'"]
  },
   {
    target: "ANELLO",
    taboo: ["DITO", "ORO", "PREZIOSO", "ANULARE"]
  },
  {
    target: "PALLA",
    taboo: ["CALCIO", "BASKET", "GIOCO", "GONFIARE"]
  },
  {
    target: "CARTE",
    taboo: ["NAPOLETANE", "FRANCESI", "GIOCHI", "TAROCCHI"]
  },
  {
    target: "PUZZA ",
    taboo: ["ODORE", "CATTIVO", "ANNUSARE", "ASCELLA"]
  },
  {
    target: "INGLESE",
    taboo: ["REGINA", "LONDRA", "LINGUA", "REGNO UNITO"]
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
  },
  {
    "target": "TELEVISIONE",
    "taboo": ["SCHERMO", "CANALE", "PROGRAMMA", "TELECOMANDO"]
  },
  {
    "target": "PENNA",
    "taboo": ["INCHIOSTRO", "SCRIVERE", "CARTA", "APPUNTI"]
  },
  {
    "target": "TASTIERA",
    "taboo": ["LETTERE", "COMPUTER", "SCRIVERE", "DIGITARE"]
  },
  {
    "target": "MARMELLATA",
    "taboo": ["FRUTTA", "DOLCE", "PANE", "SPALMARE"]
  },
  {
    "target": "ASPIRAPOLVERE",
    "taboo": ["PULIRE", "POLVERE", "CASA", "MOTORE"]
  },
  {
    "target": "SEMÁFORO",
    "taboo": ["ROSSO", "VERDE", "STRADA", "INCROCIO"]
  },
  {
    "target": "SPAZZOLINO",
    "taboo": ["DENTI", "IGIENE", "DENTIFRICIO", "BOCCA"]
  },
  {
    "target": "TRENINO",
    "taboo": ["GIOCATTOLO", "BINARI", "CARROZZE", "LOCOTOMOTIVA"]
  },
  {
    "target": "FRECCIA",
    "taboo": ["ARCO", "DIREZIONE", "SEGNALE", "BERSAGLIO"]
  },
  {
    "target": "SCARPONI",
    "taboo": ["MONTAGNA", "NEVE", "CALZATURE", "TREKKING"]
  },
  {
    "target": "LANTERNA",
    "taboo": ["LUCE", "NOTTE", "CARTA", "ILLUMINARE"]
  },
  {
    "target": "PALLONCINO",
    "taboo": ["ARIA", "FESTA", "SCOPPIA", "GONFIARE"]
  },
  {
    "target": "VETRO",
    "taboo": ["FRAGILE", "FINESTRA", "TRASPARENTE", "ROMPERE"]
  },
  {
    "target": "TERMOMETRO",
    "taboo": ["FEBBRE", "MISURARE", "GRADI", "MERCURIO"]
  },
  {
    "target": "SCIVOLO",
    "taboo": ["GIOCO", "PARCO", "CADERE", "SALIRE"]
  },
  {
    "target": "LAMPADINA",
    "taboo": ["LUCE", "VITE", "ELETTRICITÀ", "INTERRUTTORE"]
  },
  {
    "target": "RAZZO",
    "taboo": ["SPAZIO", "NASA", "ASTRONAUTA", "DECOLLO"]
  },
  {
    "target": "FERRO DA STIRO",
    "taboo": ["PIEGHE", "CALORE", "CAMICIA", "VAPORE"]
  },
  {
    "target": "CARAMELLA",
    "taboo": ["DOLCE", "ZUCCHERO", "GOLOSO", "SUCCO"]
  },
  {
    "target": "BARA",
    "taboo": ["MORTO", "FUNERALE", "LEGNO", "TOMBA"]
  },
  {
    "target": "CERVELLO",
    "taboo": ["TESTA", "PENSARE", "NEURONI", "MEMORIA"]
  },
  {
    "target": "NAVIGATORE",
    "taboo": ["STRADA", "GPS", "AUTO", "INDICAZIONI"]
  },
  {
    "target": "LAVAGNA",
    "taboo": ["GESSO", "SCUOLA", "CANCELLARE", "SCRIVERE"]
  },
  {
    "target": "CIRCO",
    "taboo": ["CLOWN", "ACROBATI", "TENDONE", "NUMERO"]
  },
  {
    "target": "MOSAICO",
    "taboo": ["TASSELLI", "COLORI", "ARTE", "DECORAZIONE"]
  },
  {
    "target": "CASTELLO",
    "taboo": ["TORRI", "PRINCIPE", "MEDIOEVO", "MURA"]
  },
  {
    "target": "DADO",
    "taboo": ["NUMERO", "GIOCO", "CUBO", "LANCIO"]
  },
  {
    "target": "PINZETTA",
    "taboo": ["SOPRACCIGLIA", "PELO", "STRAPPARE", "METALLO"]
  },
  {
    "target": "FAGIANO",
    "taboo": ["UCCELLO", "CACCIA", "COLORATO", "SELVA"]
  },
  {
    "target": "TORCIA",
    "taboo": ["LUCE", "PILE", "NOTTE", "BUIO"]
  },
  {
    "target": "TRECCIA",
    "taboo": ["CAPELLI", "ACCONCIATURA", "LUNGHI", "INTRECCIARE"]
  },
  {
    "target": "ZAINO",
    "taboo": ["SCUOLA", "SPALLE", "LIBRI", "PORTARE"]
  },
  {
    "target": "CASSAFORTE",
    "taboo": ["SOLDI", "COMBINAZIONE", "CHIAVE", "BANCA"]
  },
  {
    "target": "MOSAICO",
    "taboo": ["PIASTRELLE", "COLORI", "ARTE", "VETRO"]
  },
  {
    "target": "FORCHETTA",
    "taboo": ["MANGIARE", "DENTI", "POSATA", "PASTA"]
  },
  {
    "target": "GHIACCIOLO",
    "taboo": ["ESTATE", "FREDDO", "STICK", "SCIOLI"]
  },
  {
    "target": "MUMMIA",
    "taboo": ["EGITTO", "BENDAGGI", "TOMBA", "ANTICO"]
  },
  {
    "target": "TEATRO",
    "taboo": ["SPETTACOLO", "ATTORE", "PALCO", "PUBBLICO"]
  },
  {
    "target": "BARAONDA",
    "taboo": ["CASINO", "CONFUSIONE", "RUMORE", "CAOS"]
  },
  {
    "target": "MELOGRANO",
    "taboo": ["SEMI", "ROSSO", "FRUTTO", "INVERNO"]
  },
  {
    "target": "PAPERA",
    "taboo": ["ANIMALE", "STAGNO", "PIUMA", "QUACK"]
  },
  {
    "target": "TRAMPOLINO",
    "taboo": ["SALTO", "PISCINA", "ACQUA", "TUFFO"]
  },
  {
    "target": "SABBIA",
    "taboo": ["SPIAGGIA", "GRANI", "CASTELLO", "MARE"]
  },
  {
    "target": "COPERTA",
    "taboo": ["LETTO", "FREDDO", "LANA", "SONNO"]
  },
  {
    "target": "STIVALE",
    "taboo": ["SCARPA", "PIOGGIA", "ALTO", "FANGO"]
  },
  {
    "target": "FUCILE",
    "taboo": ["ARMA", "SPARARE", "PROIETTILE", "CACCIA"]
  },
  {
    "target": "MARIONETTA",
    "taboo": ["BURATTINO", "FILI", "MUOVERE", "SPETTACOLO"]
  },
  {
    "target": "OROLOGIAIO",
    "taboo": ["AGGIUSTARE", "LANCETTE", "TEMPO", "LAVORO"]
  },
  {
    "target": "PARAPENDIO",
    "taboo": ["VOLO", "MONTAGNA", "SPORT", "ARIA"]
  },
  {
    "target": "TOMBOLA",
    "taboo": ["NUMERI", "NATALE", "CARTELLA", "ESTRAZIONE"]
  },
  {
    "target": "MERCURIO",
    "taboo": ["PIANETA", "TERMOMETRO", "ARGENTO", "VELENO"]
  },
    {
    "target": "BISCOTTO",
    "taboo": ["COLAZIONE", "LATTE", "MERENDA", "CROCCANTE"]
  },
    {
    "target": "ZUCCHERO",
    "taboo": ["DOLCIFICANTE", "BIANCO", "GRANELLI", "SAPORE"]
  },
      {
    "target": "VULCANO",
    "taboo": ["ERUZIONE", "MAGMA", "VESUVIO", "ETNA"]
  },
      {
    "target": "SIRENA",
    "taboo": ["MARE", "CODA", "VOCE", "AUTO"]
  },
    {
    "target": "BOTTONE",
    "taboo": ["CAMICIA", "CHIUDERE", "GIACCA", "ATTACCARE"]
  },
    {
    "target": "OMBRELLO",
    "taboo": ["PIOGGIA", "APERTURA", "ACQUA", "MANICO"]
  },
   {
    "target": "TAPPETO",
    "taboo": ["PAVIMENTO", "DECORAZIONE", "MORBIDO", "ORIENTALE"]
  },
  {
    "target": "SCACCHI",
    "taboo": ["RE", "REGINA", "TORRE", "PEDONE"]
  },
  {
    "target": "POMODORO",
    "taboo": ["ROSSO", "ORTO", "SALSA", "INSALATA"]
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
