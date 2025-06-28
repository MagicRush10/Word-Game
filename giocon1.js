document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const overlay1 = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const foundDiffsSpan = document.getElementById('found-diffs');
    const totalDiffsSpan = document.getElementById('total-diffs');
    const timerSpan = document.getElementById('timer');
    const messageArea = document.getElementById('message-area');
    const resetButton = document.getElementById('reset-button');

    // **CONFIGURAZIONE DELLE DIFFERENZE**
    // Devi inserire qui le coordinate delle tue differenze!
    // x, y sono le coordinate del centro della differenza relative all'immagine.
    // radius è la dimensione dell'area cliccabile intorno al centro.
    const differences = [
        { id: 1, x: 200, y: 150, radius: 25, found: false }, // Esempio: cambia questi valori!
        { id: 2, x: 550, y: 300, radius: 30, found: false }, // Esempio
        { id: 3, x: 100, y: 400, radius: 20, found: false }, // Esempio
        // Aggiungi qui tutte le tue differenze con le coordinate che hai mappato
    ];

    let foundCount = 0;
    let timerInterval;
    let seconds = 0;
    let gameActive = true;

    // --- Funzioni di Inizializzazione e Reset ---

    function initializeGame() {
        foundCount = 0;
        seconds = 0;
        gameActive = true;
        messageArea.textContent = '';
        resetButton.style.display = 'none';

        // Resetta lo stato delle differenze
        differences.forEach(diff => {
            diff.found = false;
        });

        // Pulisci tutti i cerchi dagli overlay
        overlay1.innerHTML = '';
        overlay2.innerHTML = '';

        foundDiffsSpan.textContent = foundCount;
        totalDiffsSpan.textContent = differences.length;
        timerSpan.textContent = '00:00';

        // Avvia il timer solo se non è già attivo
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        if (!gameActive) return;
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerSpan.textContent =
            `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function endGame() {
        gameActive = false;
        clearInterval(timerInterval);
        messageArea.textContent = `Complimenti! Hai trovato tutte le ${differences.length} differenze in ${timerSpan.textContent}!`;
        messageArea.style.color = '#28a745'; // Verde
        resetButton.style.display = 'block';
    }

    // --- Gestione dei Click ---

    function handleClick(event) {
        if (!gameActive) return;

        const img = event.target;
        const rect = img.getBoundingClientRect(); // Ottiene la posizione e la dimensione dell'immagine
        const scaleX = img.naturalWidth / rect.width; // Calcola il fattore di scala per x
        const scaleY = img.naturalHeight / rect.height; // Calcola il fattore di scala per y

        // Calcola le coordinate del click relative all'immagine originale
        const clickX = (event.clientX - rect.left) * scaleX;
        const clickY = (event.clientY - rect.top) * scaleY;

        let foundThisClick = false;

        differences.forEach(diff => {
            if (!diff.found) {
                // Calcola la distanza dal centro della differenza
                const distance = Math.sqrt(
                    Math.pow(clickX - diff.x, 2) + Math.pow(clickY - diff.y, 2)
                );

                if (distance <= diff.radius) {
                    diff.found = true;
                    foundCount++;
                    foundThisClick = true;
                    foundDiffsSpan.textContent = foundCount;
                    showMessage('Hai trovato una differenza!', true);
                    
                    // Disegna il cerchio sull'overlay di ENTRAMBE le immagini
                    drawDifferenceCircle(overlay1, diff);
                    drawDifferenceCircle(overlay2, diff);

                    // Controlla se tutte le differenze sono state trovate
                    if (foundCount === differences.length) {
                        endGame();
                    }
                }
            }
        });

        if (!foundThisClick) {
            showMessage('Non è una differenza, riprova!', false);
        }
    }

    // --- Disegno degli Elementi (Cerchi) ---

    function drawDifferenceCircle(overlay, diff) {
        // Calcola la posizione e la dimensione del cerchio in base alla scala attuale dell'immagine
        const img = overlay.previousElementSibling; // Prende l'elemento <img>
        const rect = img.getBoundingClientRect();
        const scaleX = rect.width / img.naturalWidth;
        const scaleY = rect.height / img.naturalHeight;

        const circleDiv = document.createElement('div');
        circleDiv.classList.add('difference-circle');
        circleDiv.style.width = `${diff.radius * 2 * scaleX}px`; // diametro = raggio * 2
        circleDiv.style.height = `${diff.radius * 2 * scaleY}px`;
        circleDiv.style.left = `${(diff.x - diff.radius) * scaleX}px`; // posiziona da angolo superiore sinistro
        circleDiv.style.top = `${(diff.y - diff.radius) * scaleY}px`;
        
        overlay.appendChild(circleDiv);
    }

    function showMessage(msg, isSuccess) {
        messageArea.textContent = msg;
        messageArea.style.color = isSuccess ? '#28a745' : '#d9534f'; // Verde o Rosso
        // Nasconde il messaggio dopo un po'
        setTimeout(() => {
            messageArea.textContent = '';
        }, 1500);
    }

    // --- Event Listeners ---

    image1.addEventListener('click', handleClick);
    image2.addEventListener('click', handleClick);
    resetButton.addEventListener('click', initializeGame);

    // Inizializza il gioco al caricamento della pagina
    initializeGame();

    // Ricalcola le posizioni dei cerchi se la finestra viene ridimensionata (per responsività)
    // Questo è cruciale per la responsività dei cerchi!
    window.addEventListener('resize', () => {
        // Rimuove i cerchi esistenti e li ridisegna scalati correttamente
        overlay1.innerHTML = '';
        overlay2.innerHTML = '';
        differences.forEach(diff => {
            if (diff.found) {
                drawDifferenceCircle(overlay1, diff);
                drawDifferenceCircle(overlay2, diff);
            }
        });
    });
});
