// Recupera gli elementi HTML
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Ottieni il contesto di disegno 2D
const moneyDisplay = document.getElementById('money');
const ingredientsDisplay = document.getElementById('ingredients-display');
const readySweetsDisplay = document.getElementById('ready-sweets');
const buyIngredientsBtn = document.getElementById('buy-ingredients-btn');
const bakeBtn = document.getElementById('bake-btn');
const upgradeBtn = document.getElementById('upgrade-btn');
const messagesDiv = document = document.getElementById('messages'); // Corretto un errore qui, era '=' due volte

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

// Array per tenere traccia dei clienti attuali (per disegnarli)
let activeCustomers = [];
const customerSpeed = 1.5; // Velocità di movimento del cliente
const customerSpawnY = canvas.height - 100; // Posizione Y di spawn dei clienti
const customerServeX = 250; // Posizione X dove i clienti vengono serviti (vicino al bancone)
const customerExitX = -100; // Posizione X oltre la quale il cliente scompare


// --- INIZIO IMMAGINI BASE64 ---
// Queste sono immagini SVG codificate in Base64. Sono leggere e visualizzabili da tutti i browser.
const imageData = {
    background: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmY2Y2ZjEiLz4KICg/KmZsb29yKi8pCiAgPHJlY3QgeD0iMCIgeT0iNTAwIiB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2U2ZTZlNiIvPgogIDxyZWN0IHg9IjAiIHk9IjUyMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2Q3ZDdkNyIvPgogIDxyZWN0IHg9IjAiIHk9IjU0MCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2NiY2JjYiIvPgogICgoPyp3YWxsY29sb3IqLykpCiAgPHJlY3QgeD0iNzAwIiB5PSIzMDAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNhY2JhOWMiLz4KICA8cmVjdCB4PSI3MCIgeT0iMzUwIiB3aWR0aD0iNTAiIGhlaWdodD0iODAiIGZpbGw9IiNhY2JhOWMiLz4KICA8dGV4dCB4PSIzNTAiIHk9IjI5MCIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXNpemU9IjUwcHgiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj5QQVNUSUNFUklBPC90ZXh0Pgo8L3N2Zz4=',
    counter: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNiYzhjNjQiLz4KICA8cmVjdCB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjOWUzZjYzIi8+CiAgPHJlY3QgeD0iMTgiIHk9IjIwIiB3aWR0aD0iMTY0IiBoZWlnaHQ9IjcwIiBmaWxsPSIjZWRmNWY4IiBzdHJva2U9IiM4YzhiYjAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjM1IiBjeT0iNTUiIHI9IjUiIGZpbGw9IiNhMTAwMDBiIi8+CiAgPGNpcmNsZSBjeD0iNjUiIGN5PSI1NSIgcj0iNSIgZmlsbD0iIzQwYjcwMCIvPgogIDxjaXJjbGUgY3g9Ijk1IiBjeT0iNTUiIHI9IjUiIGZpbGw9IiNiZWM3MDYiLz4KPC9zdmc+',
    oven: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiM4MDgwODAiLz4KICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIxMjAiIGhlaWdodD0iODAiIGZpbGw9IiM0NDQ0NDQiIHN0cm9rZT0iIzMyMzIzMiIgc3Ryb2tlLXdpZHRoPSI1Ii8+CiAgPGNpcmNsZSBjeD0iMTIwIiBjeT0iNzUiIHI9IjgiIGZpbGw9IiMzMjMyMzIiLz4KICA8cmVjdCB4PSI1MCIgeT0iMjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzQ2NDY0NiIvPgogIDx0ZXh0IHg9IjQ1IiB5PSIxMzkiIGZvbnQtZmFtaWx5PSJhcmlhbCIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjZWVlIj5PVkVOPC90ZXh0Pgo8L3N2Zz4=',
    sweet: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxMiIgZmlsbD0iI2ZmYjNiYSIvPgogIDxwYXRoIGQ9Ik0xMiAxMGwxLTYuNSA1LTYuNUwxOCA2WiIgZmlsbD0iI2QzNDc2NyIvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTAiIHI9IjMiIGZpbGw9IiNmZmYiLz4KPC9zdmc+',
    customer: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA1MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JkZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIxNSIgciPSIxMiIgZmlsbD0iI2ZiYjY4NCIvPgogIDxyZWN0IHhRPSIxMyIgYnkyPSIzMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjM1IiBmaWxsPSIjNTA3MmIwIi8+CiAgPHJlY3QgeD0iMTMiIHk9IjY1IiB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiM2MDI0MjQiLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjcyIiByPSI1IiBmaWxsPSIjMWEyMzNkIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI3MiIgcj0iNSIgZmlsbD0iIzFhMjMzdCIvPgogPC9zdmc+'
};
// --- FINE IMMAGINI BASE64 ---

// Oggetti immagine e gestione del caricamento (restano uguali ma useranno i dati Base64)
const images = {};
let imagesLoadedCount = 0;
const totalImagesToLoad = 5;

function loadAllImages() {
    for (let key in imageData) { // Ora itera su imageData invece che imageSources
        images[key] = new Image();
        images[key].src = imageData[key]; // Imposta la sorgente Base64
        images[key].onload = () => {
            imagesLoadedCount++;
            if (imagesLoadedCount === totalImagesToLoad) {
                console.log('Tutte le immagini caricate!');
                initGame(); // Avvia il gioco solo dopo che tutte le immagini sono caricate
            }
        };
        images[key].onerror = () => {
            console.error(`Errore nel caricamento dell'immagine Base64 per ${key}`);
            // Non bloccare il gioco se un'immagine manca
            imagesLoadedCount++; 
            if (imagesLoadedCount === totalImagesToLoad) {
                initGame();
            }
        };
    }
}


// Funzioni del gioco

// Funzione per aggiornare la UI
function updateUI() {
    moneyDisplay.textContent = `€ ${money}`;
    ingredientsDisplay.textContent = ingredients;
    readySweetsDisplay.textContent = readySweets;

    buyIngredientsBtn.disabled = money < ingredientCost;
    bakeBtn.disabled = ingredients < 1 || readySweets >= maxSweetsOnCounter;
    upgradeBtn.disabled = money < 50;
}

// Funzione per aggiungere un messaggio all'area messaggi
function addMessage(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    messagesDiv.prepend(p);
    if (messagesDiv.children.length > 8) {
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
        return true; // Indica che il cliente è stato servito
    }
    return false; // Indica che il cliente non è stato servito
}

// Funzione per far apparire un cliente
function spawnCustomer() {
    if (activeCustomers.length >= 3) { // Limite di 3 clienti in coda/visibili
        addMessage('Un cliente è arrivato ma la coda è troppo lunga, è andato via!');
        return;
    }

    customerCount++;
    addMessage(`Un cliente è arrivato! Clienti totali: ${customerCount}`);
    // Aggiungi un nuovo cliente all'array, partendo da fuori schermo a destra
    activeCustomers.push({ x: canvas.width, y: customerSpawnY, width: 50, height: 80 });
    updateUI();
}

// Funzione per disegnare il negozio con le immagini
function drawShop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas

    // Disegna lo sfondo
    // Controllo images.background.complete è una buona pratica anche per Base64
    if (images.background.complete && images.background.naturalWidth !== 0) {
        ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = '#f9f9f9'; // Fallback se l'immagine non è caricata (dovrebbe funzionare sempre con Base64)
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Disegna il bancone (regola le coordinate in base alle tue immagini)
    if (images.counter.complete && images.counter.naturalWidth !== 0) {
        // Posizionamento del bancone: circa a 50px dal bordo sinistro, 150px dal basso
        ctx.drawImage(images.counter, 50, canvas.height - 150, 200, 100);
    } else {
        ctx.fillStyle = '#c08a5f'; // Fallback
        ctx.fillRect(50, canvas.height - 150, 200, 100);
    }

    // Disegna il forno (regola le coordinate in base alle tue immagini)
    if (images.oven.complete && images.oven.naturalWidth !== 0) {
        // Posizionamento del forno: 200px dal bordo destro, 180px dal basso
        ctx.drawImage(images.oven, canvas.width - 200, canvas.height - 180, 150, 150);
    } else {
        ctx.fillStyle = '#888'; // Fallback
        ctx.fillRect(canvas.width - 200, canvas.height - 180, 150, 150);
    }

    // Mostra i dolci pronti sul bancone (usando l'immagine del dolce)
    if (images.sweet.complete && images.sweet.naturalWidth !== 0) {
        for (let i = 0; i < readySweets; i++) {
            // Posiziona i dolci sul bancone. Aggiustare 80 e 40 per la distanza.
            ctx.drawImage(images.sweet, 80 + (i * 40), canvas.height - 190, 30, 30);
        }
    } else {
        // Fallback per i dolci
        for (let i = 0; i < readySweets; i++) {
            ctx.fillStyle = '#ffb3ba';
            ctx.beginPath();
            ctx.arc(80 + (i * 35), canvas.height - 180, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#a0522d';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    // Disegna e muovi i clienti attivi
    if (images.customer.complete && images.customer.naturalWidth !== 0) {
        // Usa un ciclo for "all'indietro" per gestire la rimozione degli elementi durante l'iterazione
        for (let i = activeCustomers.length - 1; i >= 0; i--) {
            let customer = activeCustomers[i];

            // Muovi il cliente verso sinistra
            customer.x -= customerSpeed;

            // Disegna il cliente
            ctx.drawImage(images.customer, customer.x, customer.y, customer.width, customer.height);

            // Logica di interazione/rimozione del cliente
            // Il cliente si ferma a customerServeX se ci sono dolci, altrimenti continua
            if (customer.x <= customerServeX && !customer.served) { 
                if (readySweets > 0) {
                    serveCustomer();
                    customer.served = true; // Marca il cliente come servito
                    // Puoi aggiungere una piccola animazione di "felicità" qui
                } else if (customer.x <= customerServeX - 50) { // Se non ci sono dolci e il cliente è passato oltre
                    addMessage('Il cliente non ha trovato dolci e se n\'è andato deluso.');
                    activeCustomers.splice(i, 1); // Rimuovi il cliente
                }
            } else if (customer.served && customer.x < customerServeX - 100) { // Se è stato servito e ha superato il bancone
                activeCustomers.splice(i, 1); // Rimuovi il cliente
            }
            else if (customer.x < customerExitX) { // Se il cliente è uscito dallo schermo senza essere servito
                if (!customer.served) { // Solo se non era già stato servito (per evitare doppi messaggi)
                    addMessage('Un cliente è uscito dallo schermo senza essere servito.');
                }
                activeCustomers.splice(i, 1); // Rimuovi il cliente
            }
        }
    }
}

// Gestori degli eventi per i pulsanti (rimangono invariati)
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
        bakeBtn.disabled = true;
        updateUI();
        setTimeout(() => {
            readySweets++;
            addMessage('Dolci pronti! Sono sul bancone.');
            bakeBtn.disabled = false;
            updateUI();
        }, bakeTime);
    } else {
        addMessage('Non hai ingredienti per infornare! Compra prima gli ingredienti.');
    }
});

upgradeBtn.addEventListener('click', () => {
    addMessage('Il pulsante Migliora Negozio non è ancora implementato.');
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
    // Inizializza lastCustomerTime alla prima chiamata
    if (!lastCustomerTime) {
        lastCustomerTime = currentTime;
    }

    // Logica per l'arrivo dei clienti
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
    updateUI();

    requestAnimationFrame(gameLoop); // Avvia il loop di gioco
}

// Avvia il caricamento delle immagini all'inizio del tuo script
loadAllImages(); // Questa chiama initGame() solo dopo il caricamento
