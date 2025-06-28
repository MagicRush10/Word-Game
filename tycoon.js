// Recupera gli elementi HTML
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Ottieni il contesto di disegno 2D
const moneyDisplay = document.getElementById('money');
const readySweetsDisplay = document.getElementById('ready-sweets');
const buyIngredientsBtn = document.getElementById('buy-ingredients-btn');
const bakeBtn = document.getElementById('bake-btn');
const upgradeBtn = document.getElementById('upgrade-btn');
const messagesDiv = document.getElementById('messages');

// Variabili di stato del gioco
let money = 0;
let ingredients = 0;
let readySweets = 0;
const ingredientCost = 10; // Costo per un blocco di ingredienti
const bakeTime = 3000; // Tempo di cottura in ms (3 secondi)
const sweetValue = 15; // Valore di vendita di un dolce

// Funzioni del gioco

// Funzione per aggiornare la UI
function updateUI() {
    moneyDisplay.textContent = `€ ${money}`;
    readySweetsDisplay.textContent = readySweets;
    // Abilita/Disabilita pulsanti in base allo stato
    buyIngredientsBtn.disabled = false; // Per ora sempre abilitato
    bakeBtn.disabled = ingredients < 1; // Puoi infornare solo se hai ingredienti
    upgradeBtn.disabled = money < 50; // Esempio: puoi migliorare solo se hai almeno 50€
}

// Funzione per aggiungere un messaggio all'area messaggi
function addMessage(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    messagesDiv.prepend(p); // Aggiunge il messaggio in cima
    if (messagesDiv.children.length > 5) { // Limita i messaggi a 5
        messagesDiv.removeChild(messagesDiv.lastChild);
    }
}

// Funzione per disegnare il negozio (base)
function drawShop() {
    // Sfondo del negozio
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas
    ctx.fillStyle = '#fefefe'; // Colore del pavimento
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Un semplice bancone
    ctx.fillStyle = '#c08a5f'; // Colore del legno
    ctx.fillRect(50, canvas.height - 150, 200, 100);
    ctx.fillStyle = '#9e6d4c'; // Top del bancone
    ctx.fillRect(50, canvas.height - 160, 200, 10);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText('Bancone', 100, canvas.height - 120);

    // Un semplice forno
    ctx.fillStyle = '#888'; // Colore del forno
    ctx.fillRect(canvas.width - 200, canvas.height - 180, 150, 150);
    ctx.fillStyle = '#555'; // Porta del forno
    ctx.fillRect(canvas.width - 170, canvas.height - 140, 90, 70);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText('Forno', canvas.width - 160, canvas.height - 190);
}

// Gestori degli eventi per i pulsanti

buyIngredientsBtn.addEventListener('click', () => {
    if (money >= ingredientCost) {
        money -= ingredientCost;
        ingredients += 5; // Ogni acquisto dà 5 unità di ingredienti
        addMessage(`Hai comprato ingredienti per €${ingredientCost}! Ora hai ${ingredients} unità.`);
        updateUI();
    } else {
        addMessage(`Non hai abbastanza soldi per comprare gli ingredienti! Ti servono €${ingredientCost}.`);
    }
});

bakeBtn.addEventListener('click', () => {
    if (ingredients >= 1) {
        ingredients--;
        addMessage('Stai infornando i dolci...');
        bakeBtn.disabled = true; // Disabilita il pulsante mentre inforna
        setTimeout(() => {
            readySweets++;
            addMessage('Dolci pronti! Sono sul bancone.');
            bakeBtn.disabled = false; // Riabilita il pulsante
            updateUI();
        }, bakeTime);
        updateUI(); // Aggiorna subito per mostrare il pulsante disabilitato
    } else {
        addMessage('Non hai ingredienti per infornare! Compra prima gli ingredienti.');
    }
});

upgradeBtn.addEventListener('click', () => {
    // Logica di miglioramento (la faremo più avanti)
    addMessage('Il pulsante Migliora Negozio non è ancora implementato.');
    // Esempio temporaneo:
    if (money >= 50) {
        money -= 50;
        addMessage('Hai migliorato qualcosa! (Solo di prova)');
        updateUI();
    } else {
        addMessage('Non hai abbastanza soldi per un miglioramento! (Ti servono 50€)');
    }
});


// Funzione principale del loop di gioco (per ora solo aggiornamento UI e disegno)
function gameLoop() {
    drawShop();
    // Qui andranno la logica dei clienti, delle vendite automatiche, ecc.
}

// Inizializzazione del gioco
function initGame() {
    updateUI(); // Aggiorna la UI iniziale
    gameLoop(); // Esegui il primo disegno del negozio
    // Potresti voler avviare un intervallo per il gameloop qui in futuro,
    // ma per ora lo chiamiamo solo una volta per il disegno iniziale.
}

initGame();
