// Recupera gli elementi HTML
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Ottieni il contesto di disegno 2D
const moneyDisplay = document.getElementById('money');
const ingredientsDisplay = document.getElementById('ingredients-display'); // Nuovo elemento
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

// Variabili per i clienti
let customerCount = 0; // Numero di clienti arrivati (totale)
let customersServed = 0; // Clienti effettivamente serviti
const customerArrivalInterval = 7000; // Intervallo di arrivo clienti in ms (7 secondi)
let lastCustomerTime = 0; // Tiene traccia dell'ultimo arrivo del cliente
const maxSweetsOnCounter = 5; // Quanti dolci possono stare sul bancone al massimo

// Funzioni del gioco

// Funzione per aggiornare la UI
function updateUI() {
    moneyDisplay.textContent = `€ ${money}`;
    ingredientsDisplay.textContent = ingredients; // Aggiorna anche gli ingredienti
    readySweetsDisplay.textContent = readySweets;

    // Abilita/Disabilita pulsanti in base allo stato
    buyIngredientsBtn.disabled = money < ingredientCost;
    bakeBtn.disabled = ingredients < 1 || readySweets >= maxSweetsOnCounter;
    upgradeBtn.disabled = money < 50; // Esempio: puoi migliorare solo se hai almeno 50€
}

// Funzione per aggiungere un messaggio all'area messaggi
function addMessage(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    messagesDiv.prepend(p); // Aggiunge il messaggio in cima
    // Limita i messaggi per evitare che l'area diventi troppo grande
    if (messagesDiv.children.length > 8) { // Aumentato il limite a 8
        messagesDiv.removeChild(messagesDiv.lastChild);
    }
}

// Funzione per servire un cliente
function serveCustomer() {
    if (readySweets > 0) {
        readySweets--;
        money += sweetValue;
        customersServed++;
        addMessage(`Hai venduto un dolce per €${sweetValue}!`);
        updateUI();
    }
}

// Funzione per far apparire un cliente
function spawnCustomer() {
    customerCount++;
    addMessage(`Un cliente è arrivato! Clienti totali: ${customerCount}`);
    
    if (readySweets > 0) {
        serveCustomer();
    } else {
        addMessage('Il cliente non ha trovato dolci sul bancone e se n\'è andato deluso.');
    }
    updateUI();
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

    // Mostra i dolci pronti sul bancone (semplice rappresentazione)
    for (let i = 0; i < readySweets; i++) {
        ctx.fillStyle = '#ffb3ba'; // Colore rosa per i dolci
        ctx.beginPath();
        ctx.arc(80 + (i * 35), canvas.height - 180, 15, 0, Math.PI * 2); // Piccoli cerchi
        ctx.fill();
        ctx.strokeStyle = '#a0522d';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
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
    if (readySweets >= maxSweetsOnCounter) {
        addMessage(`Il bancone è pieno (${readySweets}/${maxSweetsOnCounter})! Servi i clienti prima di infornare altri dolci.`);
        return;
    }

    if (ingredients >= 1) {
        ingredients--;
        addMessage('Stai infornando i dolci...');
        bakeBtn.disabled = true; // Disabilita il pulsante mentre inforna
        updateUI(); // Aggiorna subito per mostrare il pulsante disabilitato e ingredienti ridotti
        setTimeout(() => {
            readySweets++;
            addMessage('Dolci pronti! Sono sul bancone.');
            bakeBtn.disabled = false; // Riabilita il pulsante
            updateUI();
        }, bakeTime);
    } else {
        addMessage('Non hai ingredienti per infornare! Compra prima gli ingredienti.');
    }
});

upgradeBtn.addEventListener('click', () => {
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


// Funzione principale del loop di gioco (basata su requestAnimationFrame)
function gameLoop(currentTime) {
    // Aggiorna la logica di gioco
    if (!lastCustomerTime) { // Inizializza lastCustomerTime alla prima chiamata
        lastCustomerTime = currentTime;
    }

    if (currentTime - lastCustomerTime > customerArrivalInterval) {
        spawnCustomer();
        lastCustomerTime = currentTime;
    }

    // Disegna lo stato attuale del gioco
    drawShop();

    // Richiedi il prossimo frame
    requestAnimationFrame(gameLoop);
}

// Inizializzazione del gioco
function initGame() {
    money = 50; // Diamo un po' di soldi iniziali per testare
    ingredients = 0;
    readySweets = 0;
    updateUI(); // Aggiorna la UI iniziale

    // Avvia il loop di gioco
    requestAnimationFrame(gameLoop);
}

// Avvia il gioco quando la pagina è caricata
initGame();
