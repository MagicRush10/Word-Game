document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti agli elementi DOM (rimosso resetLeaderboardBtn)
    const startScreen = document.getElementById('start-screen');
    const playerNameInput = document.getElementById('player-name');
    const startGameBtn = document.getElementById('start-game-btn');
    // const resetLeaderboardBtn = document.getElementById('reset-leaderboard-btn'); // Rimosso questo riferimento
    const gameContainer = document.getElementById('game-container');

    const textDisplay = document.getElementById('text-display');
    const textInput = document.getElementById('text-input');
    const wpmSpan = document.getElementById('wpm');
    const accuracySpan = document = document.getElementById('accuracy');
    const timerSpan = document.getElementById('timer');
    const progressBar = document.getElementById('progress-bar');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');

    const resultModal = document.getElementById('result-modal');
    const finalPlayerName = document.getElementById('final-player-name');
    const finalWpm = document.getElementById('final-wpm');
    const finalAccuracy = document.getElementById('final-accuracy');
    const finalErrors = document.getElementById('final-errors');
    const localLeaderboard = document.getElementById('local-leaderboard');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Suoni (Assicurati che i percorsi siano corretti e che i file esistano!)
    const keySound = new Audio('sounds/key_press.wav');
    const errorSound = new Audio('sounds/error.wav');
    const finishSound = new Audio('sounds/game_over.wav');

    // Testi predefiniti (aggiungine quanti vuoi per variare il gioco!)
    const texts = [
    'La programmazione è l\'arte di dire a un computer cosa fare. È la creatività e la logica che si fondono per risolvere problemi e costruire meraviglie digitali.',
    'Il web development è un campo in continua evoluzione, dove imparare nuove tecnologie e framework è una costante. Dalle interfacce utente alla logica del server, ogni componente ha il suo ruolo.',
    'Nella vita non si finisce mai di imparare. Ogni giorno porta con sé nuove opportunità per espandere le proprie conoscenze e migliorare le proprie abilità.',
    'La velocità di digitazione può essere migliorata con la pratica costante e l\'attenzione alla precisione. Non scoraggiarti, ogni tentativo ti rende più bravo.',
    'Il codice ben scritto è come una poesia, pulito, efficiente e leggibile. Richiede disciplina e un occhio attento ai dettagli più piccoli.',
    'Ogni grande viaggio inizia con un singolo passo. Per il coding, inizia con una singola riga di codice.',
    'L\'errore non è un fallimento, è un\'opportunità per imparare e migliorare il tuo approccio.',
    'La perseveranza è la chiave per padroneggiare qualsiasi abilità, specialmente nel mondo della tecnologia.',
    'Impara le basi a fondo prima di tuffarti nelle complessità. Le fondamenta solide sono essenziali per il successo.',
    'La creatività è l\'intelligenza che si diverte. Applica la tua creatività alla risoluzione dei problemi.',
    'Un bug oggi è un\'esperienza di apprendimento per domani. Non temere di sbagliare.',
    'Il miglior modo per prevedere il futuro è crearlo. Sii l\'architetto del tuo percorso.',
    'La tecnologia avanza a passi da gigante, e rimanere aggiornati è una sfida costante ma gratificante.',
    'Le lingue di programmazione sono strumenti, e come ogni strumento, devi sapere come usarli al meglio.',
    'Il design dell\'interfaccia utente è cruciale per un\'esperienza utente fluida e intuitiva.',
    'La logica booleana è la spina dorsale di quasi ogni decisione presa da un computer.',
    'Non rimandare a domani quello che puoi programmare oggi. La proattività premia sempre.',
    'Sii curioso e non smettere mai di fare domande. La curiosità alimenta la conoscenza.',
    'Il debug è come essere un detective in un film giallo, cercando indizi per risolvere il mistero.',
    'La collaborazione in team è fondamentale per progetti di sviluppo di successo e su larga scala.',
    'Ogni volta che digiti, stai trasformando un\'idea astratta in qualcosa di concreto e funzionale.',
    'La blockchain sta rivoluzionando molti settori, offrendo trasparenza e sicurezza decentralizzata.',
    'L\'intelligenza artificiale sta aprendo nuove frontiere nel riconoscimento di pattern e nell\'automazione.',
    'Il machine learning permette ai sistemi di imparare dai dati senza essere esplicitamente programmati.',
    'La cybersecurity è più importante che mai, proteggendo i dati e la privacy degli utenti online.',
    'Il cloud computing offre flessibilità e scalabilità per le applicazioni moderne e le infrastrutture IT.',
    'La realtà virtuale e aumentata stanno cambiando il modo in cui interagiamo con il mondo digitale.',
    'Lo sviluppo mobile richiede un approccio diverso dal web, ma offre accesso a milioni di utenti.',
    'I database sono il cuore di molte applicazioni, gestendo e organizzando grandi quantità di informazioni.',
    'La programmazione funzionale sta guadagnando popolarità per la sua prevedibilità e facilità di test.',
    'Il test del software è una fase critica per garantire la qualità e l\'affidabilità dei prodotti.',
    'L\'agilità nello sviluppo aiuta i team a rispondere rapidamente ai cambiamenti e alle esigenze del cliente.',
    'Un algoritmo efficiente può fare la differenza tra un\'applicazione veloce e una lenta.',
    'Impara a usare la riga di comando, è uno strumento potente per gli sviluppatori esperti.',
    'La crittografia è essenziale per proteggere le comunicazioni e i dati sensibili.',
    'I microservizi stanno diventando uno standard per costruire architetture distribuite e robuste.',
    'Il version control, come Git, è indispensabile per la gestione del codice e la collaborazione.',
    'La documentazione è spesso sottovalutata, ma è fondamentale per la manutenibilità del codice.',
    'Sviluppare un buon prodotto è un processo iterativo, che richiede feedback e continue migliorie.',
    'Il refactoring del codice lo rende più pulito e facile da capire, migliorandone la qualità a lungo termine.',
    'La conoscenza delle strutture dati è cruciale per scrivere algoritmi efficienti e ottimizzati.',
    'Ogni carattere che digiti contribuisce a costruire il software che useranno milioni di persone.',
    'La digitazione cieca, o touch typing, è un\'abilità che aumenta drasticamente la tua produttività.',
    'Non aver paura di chiedere aiuto, la comunità degli sviluppatori è ricca di persone disponibili.',
    'Le API permettono a diverse applicazioni di comunicare tra loro in modo strutturato.',
    'Il futuro della tecnologia è luminoso e pieno di possibilità, sii parte di questa trasformazione.',
    'Pratica ogni giorno, anche solo per pochi minuti. La costanza è il segreto del successo.',
    'Il tuo prossimo progetto potrebbe essere l\'innovazione che cambierà il mondo, continua a creare.',
    'Rilassati e divertiti mentre digiti, la pratica rende perfetti e la gioia rende il processo migliore.',
    'L\'innovazione tecnologica procede a ritmi serrati, cambiando il nostro mondo in modi imprevedibili.',
'Il software libero e open source ha trasformato il modo in cui sviluppiamo e condividiamo il codice.',
'L\'ottimizzazione delle prestazioni è fondamentale per garantire che le applicazioni siano veloci e reattive.',
'La gestione dei progetti software richiede un\'attenta pianificazione e un\'esecuzione meticolosa.',
'Un buon programmatore è sempre anche un bravo problem solver, capace di affrontare ogni sfida.',
'La diversità e l\'inclusione nel settore tecnologico sono cruciali per creare soluzioni migliori per tutti.',
'Il debugging è un\'arte che si affina con l\'esperienza e un approccio sistematico.',
'L\'architettura del software definisce la struttura e le relazioni tra i componenti di un sistema.',
'Imparare una nuova lingua di programmazione apre nuove prospettive e opportunità.',
'La documentazione chiara e concisa è vitale per la manutenibilità a lungo termine di qualsiasi progetto.',
'Le metodologie agili, come Scrum, promuovono lo sviluppo iterativo e la collaborazione.',
'La sicurezza informatica non è un\'opzione, ma una necessità assoluta nel panorama digitale odierno.',
'L\'automazione dei test riduce gli errori e accelera il processo di sviluppo del software.',
'L\'esperienza utente, o UX, è il fulcro di un design di successo e di un prodotto apprezzato.',
'Il cloud computing offre flessibilità, scalabilità e costi ottimizzati per le aziende moderne.',
'I container, come Docker, semplificano il deployment e la gestione delle applicazioni.',
'L\'infrastruttura come codice, o IaC, automatizza la configurazione e il provisioning dei server.',
'Il principio DRY, Don\'t Repeat Yourself, è una buona pratica per un codice pulito e efficiente.',
'La gestione delle dipendenze è cruciale per mantenere i progetti aggiornati e sicuri.',
'L\'analisi dei requisiti è la prima fase di ogni progetto software di successo.',
'La refactorizzazione migliora la leggibilità e la struttura del codice senza alterarne il comportamento.',
'Le interfacce a riga di comando sono potenti strumenti per gli sviluppatori esperti e gli amministratori di sistema.',
'La programmazione orientata agli oggetti, o OOP, promuove il riutilizzo del codice e la modularità.',
'I paradigmi di programmazione definiscono diversi modi di strutturare e scrivere il codice.',
'La gestione degli errori è una parte essenziale della programmazione robusta e affidabile.',
'Il feedback continuo è fondamentale per iterare e migliorare il prodotto nel tempo.',
'La community open source è una risorsa inestimabile per l\'apprendimento e il supporto.',
'Il pensiero computazionale è una competenza chiave per risolvere problemi complessi in qualsiasi campo.',
'La conoscenza dei pattern di design è utile per affrontare problemi comuni in modo efficace.',
'La programmazione parallela e concorrente permette di sfruttare al meglio le risorse hardware.',
'Le reti neurali sono alla base di molte applicazioni moderne di intelligenza artificiale.',
'Il data science combina statistica, programmazione e conoscenza del dominio per estrarre insight dai dati.',
'Il big data richiede strumenti e tecniche specifiche per l\'elaborazione e l\'analisi di volumi enormi.',
'La virtualizzazione crea ambienti isolati per lo sviluppo e il deployment delle applicazioni.',
'La continua integrazione e consegna, o CI/CD, automatizzano il ciclo di vita del software.',
'La resilienza del sistema è la capacità di un\'applicazione di recuperare da guasti e errori.',
'La telemetria e il monitoring sono essenziali per capire come si comporta un\'applicazione in produzione.',
'La gestione della configurazione assicura che gli ambienti siano coerenti e riproducibili.',
'L\'ethical hacking e i test di penetrazione aiutano a identificare le vulnerabilità della sicurezza.',
'La scrittura di test unitari garantisce che le singole parti del codice funzionino come previsto.',
'Il pair programming migliora la qualità del codice e la condivisione della conoscenza nel team.',
'La scelta del giusto linguaggio di programmazione dipende dalle esigenze specifiche del progetto.',
'L\'apprendimento attivo e la pratica costante sono i pilastri della crescita professionale.',
'La visualizzazione dei dati trasforma numeri complessi in grafici e dashboard comprensibili.',
'Le API RESTful sono uno standard de facto per la comunicazione tra servizi web.',
'La programmazione asincrona migliora la reattività delle applicazioni gestendo operazioni non bloccanti.',
'Le code di messaggi, come Kafka o RabbitMQ, permettono la comunicazione desacoppiata tra microservizi.',
'Il principio di responsabilità unica promuove moduli software che fanno una sola cosa bene.',
'L\'analisi statica del codice aiuta a trovare errori e vulnerabilità prima dell\'esecuzione.',
'La migrazione al cloud può portare a notevoli vantaggi in termini di costi e flessibilità operativa.',
'La gestione delle dipendenze transitive è un aspetto importante nella manutenzione dei progetti software.',
'L\'importanza della latenza nella comunicazione di rete è fondamentale per le applicazioni in tempo reale.',
'Il debugging con un debugger è molto più efficiente del semplice inserimento di stampe nel codice.',
'La programmazione a eventi è comune nello sviluppo di interfacce utente e serverless.',
'L\'importanza di una buona base matematica per lo studio degli algoritmi e dell\'AI.',
'La conoscenza dei principi SOLID è fondamentale per scrivere codice pulito, modulare e testabile.',
'Le espressioni regolari sono potenti strumenti per la manipolazione e la ricerca di pattern nel testo.',
'Il caching è una tecnica cruciale per migliorare le prestazioni delle applicazioni web.',
'L\'ottimizzazione del database può avere un impatto enorme sulla velocità complessiva di un\'applicazione.',
'La gestione della memoria è un aspetto importante nelle lingue di basso livello come C o C++.',
'Il garbage collection automatizza la deallocazione della memoria in molte lingue moderne.',
'La gestione delle versioni del software è essenziale per tenere traccia delle modifiche e collaborare.',
'La criptografia a chiave pubblica e privata è alla base di molte comunicazioni sicure su internet.',
'L\'apprendimento per rinforzo è un tipo di machine learning che addestra gli agenti tramite ricompense.',
'I grafi sono strutture dati versatili per modellare relazioni complesse tra entità.',
'Le code e gli stack sono strutture dati fondamentali con applicazioni in molti algoritmi.',
'La programmazione dinamica risolve problemi complessi scomponendoli in sottoproblemi più semplici.',
'La ricorsione è una tecnica potente ma richiede attenzione per evitare cicli infiniti.',
'La complessità temporale e spaziale degli algoritmi è cruciale per la loro efficienza.',
'Il bilanciamento del carico distribuisce le richieste su più server per migliorare la disponibilità.',
'I firewall sono barriere di sicurezza che controllano il traffico di rete in entrata e in uscita.',
'L\'autenticazione verifica l\'identità di un utente, l\'autorizzazione determina cosa può fare.',
'Il two-factor authentication, o 2FA, aggiunge un ulteriore strato di sicurezza agli account.',
'Il phishing è una minaccia comune, cerca di indurre gli utenti a rivelare informazioni sensibili.',
'La scansione delle vulnerabilità aiuta a identificare le debolezze nei sistemi e nelle applicazioni.',
'La risposta agli incidenti di sicurezza è un piano per affrontare e mitigare gli attacchi informatici.',
'La conformità normativa, come il GDPR, è vitale per la protezione della privacy dei dati.',
'I test di integrazione verificano che i diversi moduli del sistema funzionino bene insieme.',
'Il test end-to-end simula il flusso di lavoro di un utente reale attraverso l\'applicazione.',
'Il test di regressione assicura che le nuove modifiche non introducano bug in funzionalità esistenti.',
'La scrittura di codice pulito e commentato rende il lavoro del team molto più efficiente.',
'L\'importanza dei sistemi distribuiti per la scalabilità e la tolleranza ai guasti.',
'Il teorema CAP discute i compromessi tra consistenza, disponibilità e tolleranza alle partizioni.',
'La tecnologia serverless permette agli sviluppatori di concentrarsi sul codice senza gestire l\'infrastruttura.',
'Le funzioni Lambda di AWS sono un esempio popolare di computing serverless.',
'Il Kubernetes è un sistema open source per l\'automazione del deployment, scaling e management di applicazioni containerizzate.',
'Terraform è uno strumento di infrastruttura come codice per il provisioning e la gestione delle risorse cloud.',
'Ansible è uno strumento di automazione per la configurazione dei sistemi e il deployment del software.',
'Jenkins è un server di automazione open source che supporta la continua integrazione e consegna.',
'GitHub Actions permette di automatizzare i flussi di lavoro di sviluppo direttamente da GitHub.',
'La cultura DevOps promuove la collaborazione tra sviluppo e operazioni per cicli di rilascio più rapidi.',
'L\'osservabilità è la capacità di capire lo stato interno di un sistema basandosi sui suoi output esterni.',
'I log sono registrazioni degli eventi che avvengono in un sistema, essenziali per il debugging.',
'Le metriche forniscono dati quantitativi sulle prestazioni e l\'utilizzo del sistema.',
'Le tracce distribuite seguono il percorso di una richiesta attraverso diversi servizi.',
'L\'SRE, o Site Reliability Engineering, applica i principi dell\'ingegneria del software alle operazioni.',
'L\'importanza dei service level agreements, o SLA, per definire le aspettative di servizio.',
'La gestione del rischio è fondamentale in qualsiasi progetto IT per mitigare potenziali problemi.',
'L\'analisi costi-benefici aiuta a prendere decisioni informate sui progetti tecnologici.',
'Il brainstorming è una tecnica creativa per generare nuove idee e soluzioni.',
'La sindrome dell\'impostore è comune tra gli sviluppatori, ma ricorda il tuo valore.',
'Fai delle pause regolari, sono essenziali per mantenere la concentrazione e prevenire il burnout.',
'La pratica rende perfetti, e la digitazione è un\'abilità che migliora costantemente con l\'esercizio.',
'La tua tastiera è il tuo strumento principale, trattala con cura e personalizzala per il massimo comfort.',
'Ogni errore di battitura è solo un passo verso la perfezione. Non smettere di migliorare.',
'Sii paziente con te stesso e celebra ogni piccolo progresso. Ogni sessione conta.',
'La digitazione non è solo velocità, ma anche precisione. Punta a zero errori per un punteggio migliore.',
'Sfida i tuoi amici e colleghi, la competizione amichevole è un grande incentivo.',
'Mantieni la postura corretta, è fondamentale per evitare affaticamento e infortuni durante la digitazione.',
'Ascolta i suoni della tua tastiera mentre digiti, possono aiutarti a trovare il ritmo giusto.',
'Concentrati sul testo e non guardare le dita, la memoria muscolare farà il resto.',
'Divertiti! Dopotutto, imparare a digitare più velocemente dovrebbe essere un\'esperienza piacevole.'
];

    // Variabili di stato del gioco
    let currentText = '';
    let currentInput = '';
    let timerInterval;
    let correctChars = 0;
    let incorrectChars = 0;
    let totalCharsTyped = 0;
    let startTime;
    let gameStarted = false;
    let currentIndex = 0;
    let playerName = 'Anonimo';

    // --- Funzioni di Controllo del Gioco (rimangono invariate) ---

    function initializeGame() {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');

        currentText = texts[Math.floor(Math.random() * texts.length)];
        textDisplay.innerHTML = '';

        currentText.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            if (char === ' ') {
                span.classList.add('space');
            }
            textDisplay.appendChild(span);
        });

        currentIndex = 0;
        currentInput = '';
        correctChars = 0;
        incorrectChars = 0;
        totalCharsTyped = 0;
        clearInterval(timerInterval);
        timerSpan.textContent = '0.00';
        gameStarted = false;
        textInput.value = '';
        textInput.disabled = false;
        wpmSpan.textContent = 0;
        accuracySpan.textContent = '100%';
        progressBar.style.width = '0%';

        finishBtn.disabled = true;

        document.querySelectorAll('.text-display span').forEach(span => {
            span.className = '';
            if (span.textContent === ' ') {
                 span.classList.add('space');
            }
        });

        updateCharHighlight();
        textInput.focus();
        restartBtn.style.display = 'none';
    }

    function startGameTimer() {
        if (!gameStarted) {
            gameStarted = true;
            startTime = new Date().getTime();
            timerInterval = setInterval(updateTimer, 10);
        }
    }

    function endGame() {
        clearInterval(timerInterval);
        gameStarted = false;
        textInput.disabled = true;
        finishBtn.disabled = true;
        finishSound.play().catch(e => console.error("Errore riproduzione suono:", e));

        const finalWPMValue = parseInt(wpmSpan.textContent);
        const finalAccuracyValue = parseFloat(accuracySpan.textContent);
        const finalErrorsValue = incorrectChars;
        const timeTaken = parseFloat(timerSpan.textContent);

        saveScore(playerName, finalWPMValue, finalAccuracyValue, finalErrorsValue, timeTaken);
        displayLeaderboard();

        finalPlayerName.textContent = playerName;
        finalWpm.textContent = finalWPMValue;
        finalAccuracy.textContent = `${finalAccuracyValue}%`;
        finalErrors.textContent = finalErrorsValue;
        resultModal.style.display = 'flex';

        restartBtn.style.display = 'block';
    }

    // --- Aggiornamenti dell'UI e Calcoli (rimangono invariati) ---

    function updateCharHighlight() {
        const textSpans = textDisplay.querySelectorAll('span');
        textSpans.forEach((span, index) => {
            span.classList.remove('current', 'correct', 'incorrect');
            if (index < currentIndex) {
                span.classList.add('typed');
            } else {
                span.classList.remove('typed');
            }
        });

        if (currentIndex < textSpans.length) {
            textSpans[currentIndex].classList.add('current');
        }
    }

    textInput.addEventListener('input', (e) => {
        startGameTimer();

        const typedText = textInput.value;
        currentIndex = typedText.length;

        correctChars = 0;
        incorrectChars = 0;
        totalCharsTyped = typedText.length;

        textDisplay.querySelectorAll('span').forEach((span, index) => {
            if (index < typedText.length) {
                if (typedText[index] === currentText[index]) {
                    span.classList.add('correct');
                    span.classList.remove('incorrect');
                    correctChars++;
                } else {
                    span.classList.add('incorrect');
                    span.classList.remove('correct');
                    incorrectChars++;
                }
                span.classList.add('typed');
                span.classList.remove('current');
            } else {
                span.classList.remove('correct', 'incorrect', 'typed');
            }
        });

        if (e.inputType !== 'deleteContentBackward') {
            if (typedText[currentIndex - 1] === currentText[currentIndex - 1]) {
                keySound.play().catch(err => console.error("Errore riproduzione suono tasto:", err));
            } else {
                errorSound.play().catch(err => console.error("Errore riproduzione suono errore:", err));
            }
        }

        updateCharHighlight();
        updateStats();

        finishBtn.disabled = typedText.length === 0;
    });

    function updateStats() {
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        if (!gameStarted || elapsedTime <= 0) return;

        const wordsTyped = correctChars / 5;
        const minutes = elapsedTime / 60;
        const wpm = Math.round(wordsTyped / minutes);
        wpmSpan.textContent = isNaN(wpm) ? 0 : wpm;

        const accuracy = totalCharsTyped === 0 ? 100 : ((correctChars / totalCharsTyped) * 100).toFixed(1);
        accuracySpan.textContent = `${accuracy}%`;

        const progressPercentage = (currentIndex / currentText.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function updateTimer() {
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        timerSpan.textContent = elapsedTime.toFixed(2);
    }

    // --- Gestione Local Storage e Classifica ---

    function saveScore(name, wpm, accuracy, errors, time) {
        let scores = JSON.parse(localStorage.getItem('typeRacerScores')) || [];
        scores.push({ name: name, wpm: wpm, accuracy: accuracy, errors: errors, time: time.toFixed(2), date: new Date().toLocaleString() });
        scores.sort((a, b) => {
            if (b.wpm !== a.wpm) return b.wpm - a.wpm;
            if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
            if (a.errors !== b.errors) return a.errors - b.errors;
            return a.time - b.time;
        });
        scores = scores.slice(0, 10);
        localStorage.setItem('typeRacerScores', JSON.stringify(scores));
    }

    function displayLeaderboard() {
        const scores = JSON.parse(localStorage.getItem('typeRacerScores')) || [];
        localLeaderboard.innerHTML = '';
        if (scores.length === 0) {
            localLeaderboard.innerHTML = '<li>Nessun punteggio ancora. Sii il primo!</li>';
            return;
        }
        scores.forEach((score, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>#${index + 1} - ${score.name}</span>
                <span>${score.wpm} WPM</span>
                <span>Acc: ${score.accuracy}%</span>
                <span>Err: ${score.errors}</span>
                <span>Time: ${score.time}s</span>
            `;
            localLeaderboard.appendChild(listItem);
        });
    }

    // --- NUOVA FUNZIONE DI RESET CLASSICA (NON ACCESSIBILE DIRETTAMENTE) ---
    function developerResetLeaderboard() {
        if (confirm('CONFERMA SVILUPPATORE: Sei sicuro di voler resettare TUTTA la classifica locale? Questa azione è irreversibile e destinata solo al gestore del sito.')) {
            localStorage.removeItem('typeRacerScores');
            displayLeaderboard();
            alert('Classifica locale resettata dallo sviluppatore!');
            // Puoi anche reindirizzare o fare altro dopo il reset se necessario
        }
    }

    // --- Event Listeners ---

    startGameBtn.addEventListener('click', () => {
        playerName = playerNameInput.value.trim();
        if (playerName === '') {
            playerName = 'Anonimo';
        }
        initializeGame();
    });

    finishBtn.addEventListener('click', () => {
        endGame();
    });

    restartBtn.addEventListener('click', () => {
        gameContainer.classList.add('hidden');
        startScreen.classList.remove('hidden');
        playerNameInput.value = '';
        textInput.disabled = true;
        finishBtn.disabled = true;
        playerNameInput.focus();
    });

    modalCloseBtn.addEventListener('click', () => {
        resultModal.style.display = 'none';
    });

    // --- NUOVA LOGICA PER IL RESET (OPZIONE 2) ---
    // Resetta la classifica SOLO se un parametro specifico è presente nell'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('reset_leaderboard') && urlParams.get('reset_leaderboard') === 'true') {
        developerResetLeaderboard();
        // Rimuovi il parametro dall'URL per evitare reset accidentali al ricaricamento
        window.history.replaceState({}, document.title, window.location.pathname);
    }


    // Inizializza la schermata iniziale al caricamento della pagina
    startScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    playerNameInput.focus();
});