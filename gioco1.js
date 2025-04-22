function initGame() {
  // Inizializza il gioco (eventuali impostazioni aggiuntive)
  console.log("Gioco inizializzato");
}
const dizionario = [
  "ZUCCA", "PANNO", "LENTO", "CREDO", "FUMET", "TIGRE", "VETRO", "DONNA", "LIBRO", "PENNA",
  "SALTO", "CREMA", "SOLEA", "ZAINO", "AMORE", "CIELO", "FELPA", "SOGNO", "CARTA", "CAMPO",
  "TENDA", "FORNO", "LINEA", "PASTA", "BANCA", "VALLE", "RADIO", "MIELE", "CANTO", "METRO",
  "PELLE", "NERVO", "TORRE", "VENTO", "FUOCO", "PORTO", "BIRRA", "NUVOL", "OMBRA", "VERBO",
  "TONNO", "COSTA", "UOMON", "SEDIA", "GATTO", "CUORE", "MONDO", "PIANO", "GONNA", "VERDE",
  "ROSSO", "COLLE", "ABETE", "ACERO", "AGIRE", "ALBUM", "AMIDO", "ANICE", "AROMA", "AUDIO",
  "AUTOB", "AVENA", "BALZA", "BARBA", "BENNA", "BEOTA", "BOTTE", "BRUCO", "BUFAL", "CABRA",
  "CALMA", "CANNA", "CAPRA", "CARNE", "CENNI", "CERCA", "CHILO", "CICCA", "CLIMA", "COCCO",
  "COLPO", "CONDO", "CORDA", "CRUDO", "CULTO", "DANZA", "DENTE", "DOLCE", "DOTTO", "DRAGO",
  "DUOMO", "EBANO", "ETICA", "FALDA", "FANGO", "FARRO", "FATTO", "FELCE", "FESTA", "FIATO",
  "FILMO", "FIONA", "FOGNA", "FOLTO", "FONDO", "FORZA", "FRANA", "FRATE", "FRIGO", "FRONZ"
];

// Sceglie una parola a caso
const parolaSegreta = dizionario[Math.floor(Math.random() * dizionario.length)];
console.log("DEBUG - Parola segreta:", parolaSegreta); // Puoi rimuovere questa riga dopo

const tentativiMax = 6;
let tentativi = [];
let parolaCorrente = "";

const grid = document.getElementById("grid");
const message = document.getElementById("message");

// Crea la griglia
for (let i = 0; i < tentativiMax * 5; i++) {
  const cell = document.createElement("div");
  cell.classList.add("tile");
  grid.appendChild(cell);
}

// Gestione input da tastiera
document.addEventListener("keydown", (e) => {
  if (tentativi.length >= tentativiMax) return;
  const key = e.key.toUpperCase();

  if (key === "BACKSPACE") {
    parolaCorrente = parolaCorrente.slice(0, -1);
    updateGrid();
  } else if (key === "ENTER") {
    if (parolaCorrente.length === 5) {
      verificaParola(parolaCorrente);
    }
  } else if (/^[A-ZÀ-Ü]$/.test(key) && parolaCorrente.length < 5) {
    parolaCorrente += key;
    updateGrid();
  }
});

// Aggiorna la griglia
function updateGrid() {
  const index = tentativi.length * 5;
  for (let i = 0; i < 5; i++) {
    const tile = grid.children[index + i];
    tile.textContent = parolaCorrente[i] || "";
  }
}

// Verifica la parola inserita
function verificaParola(parola) {
  const index = tentativi.length * 5;
  for (let i = 0; i < 5; i++) {
    const lettera = parola[i];
    const tile = grid.children[index + i];

    if (parolaSegreta[i] === lettera) {
      tile.classList.add("correct");
    } else if (parolaSegreta.includes(lettera)) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }
  }

  tentativi.push(parola);
  parolaCorrente = "";

  if (parola === parolaSegreta) {
    message.textContent = "Hai indovinato! 🎉";
  } else if (tentativi.length >= tentativiMax) {
    message.textContent = `Hai perso! La parola era ${parolaSegreta}`;
  }
}
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

// Chiama la funzione all'avvio del gioco
document.addEventListener('DOMContentLoaded', () => {
  initGame();
  loadAds(); // Aggiungi questa linea
});
