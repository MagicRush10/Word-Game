// public/client.js
const socket = io();

// Elementi UI - Schermate
const welcomeScreen = document.getElementById('welcome-screen');
const lobbyScreen = document.getElementById('lobby-screen');
const gameScreen = document.getElementById('game-screen');
const endGameScreen = document.getElementById('end-game-screen');

// Elementi UI - Welcome Screen
const playerNameInput = document.getElementById('player-name-input');
const createLobbyBtn = document.getElementById('create-lobby-btn');
const joinLobbyIdInput = document.getElementById('join-lobby-id-input');
const joinLobbyBtn = document.getElementById('join-lobby-btn');
const welcomeError = document.getElementById('welcome-error');

// Elementi UI - Lobby Screen
const currentLobbyIdSpan = document.getElementById('current-lobby-id');
const playersList = document.getElementById('players-list');
const startGameBtn = document.getElementById('startGameBtn');
const startGameInfo = document.getElementById('startGameInfo');
const chatMessages = document.getElementById('chat-messages'); // Chat della lobby
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');
const leaveLobbyBtn = document.getElementById('leave-lobby-btn');

// --- NUOVI Elementi UI - Category Selection ---
const categorySelectionArea = document.querySelector('.category-selection-area');
const categoryList = document.getElementById('category-list');
const selectedCategoriesDisplay = document.getElementById('selected-categories-display');

// Elementi UI - Game Screen
const gameLeaderboard = document.getElementById('game-leaderboard');
const currentQuestionDisplay = document.getElementById('current-question');
const questionImage = document.getElementById('question-image');
const questionImageContainer = document.getElementById('question-image-container'); // Contenitore dell'immagine
const timerDisplay = document.getElementById('time-left');
const answerInput = document.getElementById('answer-input');
const sendAnswerBtn = document.getElementById('send-answer-btn');
const revealedAnswerDisplay = document.getElementById('revealed-answer-display');
const revealHintBtn = document.getElementById('reveal-hint-btn');
const revealedPlayerAnswerDisplay = document.getElementById('revealed-player-answer-display');
const playerGivenAnswerSpan = document.getElementById('player-given-answer');

// Elementi UI - Game Chat
const gameChatMessages = document.getElementById('game-chat-messages');
const gameChatInput = document.getElementById('game-chat-input');
const sendGameChatBtn = document.getElementById('send-game-chat-btn');

// Elementi UI - End Game Screen
const endGameMessage = document.getElementById('end-game-message');
const finalLeaderboard = document.getElementById('final-leaderboard');
const playAgainBtn = document.getElementById('play-again-btn');
const returnToLobbyBtn = document.getElementById('return-to-lobby-btn');

// Variabili di stato del client
let currentLobbyId = null;
let isHost = false;
// NUOVA LOGICA: Stato per la risposta del giocatore
let hasAnsweredCorrectly = false;

// Funzioni per la gestione delle schermate
function showScreen(screen) {
    welcomeScreen.style.display = 'none';
    lobbyScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    endGameScreen.style.display = 'none';
    screen.style.display = 'flex'; // Usiamo flex per centrare il contenuto
}

// Funzione per aggiungere messaggi alla chat
function appendMessage(chatBox, sender, message, isSystem = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (isSystem) {
        messageElement.classList.add('system-message');
    } else if (sender === 'Tu') {
        messageElement.classList.add('my-message');
    } else {
        messageElement.classList.add('other-message');
    }
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scorri fino all'ultimo messaggio
}

// Funzioni per aggiornare la lista giocatori nella lobby
function updatePlayersList(players) {
    playersList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} (${player.score} punti)`;
        if (player.id === socket.id) {
            li.textContent += ' (Tu)';
        }
        playersList.appendChild(li);
    });
    updateStartGameButton(players.length); // Aggiorna lo stato del bottone Avvia Gioco
}

// Funzione per aggiornare la classifica in gioco
function updateGameLeaderboard(players) {
    gameLeaderboard.innerHTML = '';
    players.sort((a, b) => b.score - a.score); // Ordina per punteggio decrescente
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score} punti`;
        if (player.id === socket.id) {
            li.classList.add('current-player'); // Aggiungi una classe per evidenziare il giocatore attuale
        }
        gameLeaderboard.appendChild(li);
    });
}

// Funzione per aggiornare la classifica finale
function updateFinalLeaderboard(players) {
    finalLeaderboard.innerHTML = '';
    players.sort((a, b) => b.score - a.score); // Ordina per punteggio decrescente
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score} punti`;
        if (player.id === socket.id) {
            li.classList.add('current-player');
        }
        finalLeaderboard.appendChild(li);
    });
}

// --- Funzioni per la selezione delle categorie (Host) ---
function displayCategories(categories) {
    categoryList.innerHTML = '';
    categories.forEach(category => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `cat-${category}`;
        checkbox.value = category;
        checkbox.checked = true; // Tutte selezionate di default
        checkbox.addEventListener('change', () => {
            const selected = Array.from(categoryList.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(cb => cb.value);
            socket.emit('updateSelectedCategories', { lobbyId: currentLobbyId, categories: selected });
            updateSelectedCategoriesDisplay(selected);
        });

        const label = document.createElement('label');
        label.htmlFor = `cat-${category}`;
        label.textContent = category;

        li.appendChild(checkbox);
        li.appendChild(label);
        categoryList.appendChild(li);
    });
}

function updateSelectedCategoriesDisplay(categories) {
    if (categories.length === 0) {
        selectedCategoriesDisplay.textContent = 'Nessuna categoria selezionata';
    } else {
        selectedCategoriesDisplay.textContent = 'Categorie selezionate: ' + categories.join(', ');
    }
}

// --- Listeners Eventi UI ---

createLobbyBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        socket.emit('createLobby', { playerName });
    } else {
        welcomeError.textContent = 'Inserisci il tuo nome.';
    }
});

joinLobbyBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    const lobbyId = joinLobbyIdInput.value.trim();
    if (playerName && lobbyId) {
        socket.emit('joinLobby', { playerName, lobbyId });
    } else {
        welcomeError.textContent = 'Inserisci nome e ID della lobby.';
    }
});

sendChatBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message && currentLobbyId) {
        socket.emit('chatMessage', { lobbyId: currentLobbyId, message });
        appendMessage(chatMessages, 'Tu', message);
        chatInput.value = '';
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatBtn.click();
    }
});

leaveLobbyBtn.addEventListener('click', () => {
    if (currentLobbyId) {
        socket.emit('leaveLobby', { lobbyId: currentLobbyId });
        currentLobbyId = null;
        isHost = false;
        showScreen(welcomeScreen);
        welcomeError.textContent = ''; // Pulisci eventuali errori precedenti
        chatMessages.innerHTML = ''; // Pulisci la chat della lobby
        playersList.innerHTML = ''; // Pulisci la lista giocatori
        categorySelectionArea.style.display = 'none'; // Nascondi selezione categorie
    }
});

startGameBtn.addEventListener('click', () => {
    if (currentLobbyId && isHost) {
        socket.emit('startGame', { lobbyId: currentLobbyId });
    }
});

// NUOVA LOGICA: Logica di invio risposta
sendAnswerBtn.addEventListener('click', () => {
    const answer = answerInput.value.trim();
    if (answer && currentLobbyId) {
        if (hasAnsweredCorrectly) {
            console.log("Hai già risposto correttamente per questa domanda.");
            // Potresti mostrare un feedback visivo all'utente qui se lo desideri
            return; // Esce dalla funzione, non invia la risposta
        }
        socket.emit('submitAnswer', { lobbyId: currentLobbyId, answer });
        answerInput.value = ''; // Pulisci l'input dopo l'invio
        answerInput.disabled = true; // Disabilita per evitare spam prima del feedback del server
        sendAnswerBtn.disabled = true; // Disabilita il bottone
    }
});

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (hasAnsweredCorrectly) {
            console.log("Hai già risposto correttamente per questa domanda.");
            return; // Esce dalla funzione
        }
        sendAnswerBtn.click();
    }
});

revealHintBtn.addEventListener('click', () => {
    if (currentLobbyId) {
        socket.emit('revealHint', { lobbyId: currentLobbyId });
    }
});

sendGameChatBtn.addEventListener('click', () => {
    const message = gameChatInput.value.trim();
    if (message && currentLobbyId) {
        socket.emit('gameChatMessage', { lobbyId: currentLobbyId, message });
        appendMessage(gameChatMessages, 'Tu', message);
        gameChatInput.value = '';
    }
});

gameChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendGameChatBtn.click();
    }
});

playAgainBtn.addEventListener('click', () => {
    if (currentLobbyId) {
        socket.emit('playAgain', { lobbyId: currentLobbyId });
    }
});

returnToLobbyBtn.addEventListener('click', () => {
    if (currentLobbyId) {
        // Avvisa il server che il giocatore vuole tornare alla lobby (utile se si è host)
        socket.emit('returnToLobbyFromEndGame', { lobbyId: currentLobbyId });
        showScreen(lobbyScreen);
        endGameMessage.textContent = '';
        finalLeaderboard.innerHTML = '';
        // Assicurati che lo stato del gioco sia resettato per la lobby
        // La lista giocatori e la chat della lobby dovrebbero essere aggiornate dal server
    }
});


// --- Listeners Eventi Socket.IO ---

socket.on('lobbyCreated', ({ lobbyId, playerName }) => {
    currentLobbyId = lobbyId;
    isHost = true;
    showScreen(lobbyScreen);
    currentLobbyIdSpan.textContent = lobbyId;
    welcomeError.textContent = '';
    appendMessage(chatMessages, 'Sistema', `Lobby creata con ID: ${lobbyId}. Sei l'Host.`, true);
    // L'host vede le opzioni di categoria
    categorySelectionArea.style.display = 'block';
});

socket.on('lobbyJoined', ({ lobbyId, playerName, isHost: hostStatus }) => {
    currentLobbyId = lobbyId;
    isHost = hostStatus;
    showScreen(lobbyScreen);
    currentLobbyIdSpan.textContent = lobbyId;
    welcomeError.textContent = '';
    appendMessage(chatMessages, 'Sistema', `Sei entrato nella lobby ${lobbyId}.`, true);
    if (!isHost) {
        categorySelectionArea.style.display = 'none'; // I non-host non vedono le opzioni di categoria
    } else {
        categorySelectionArea.style.display = 'block';
    }
});

socket.on('lobbyError', ({ message }) => {
    welcomeError.textContent = message;
});

socket.on('playerJoined', ({ playerName, lobbyId }) => {
    appendMessage(chatMessages, 'Sistema', `${playerName} si è unito alla lobby.`, true);
});

socket.on('playerLeft', ({ playerName, lobbyId }) => {
    appendMessage(chatMessages, 'Sistema', `${playerName} ha lasciato la lobby.`, true);
});

socket.on('updatePlayersList', ({ players }) => {
    updatePlayersList(players);
});

socket.on('chatMessage', ({ sender, message }) => {
    appendMessage(chatMessages, sender, message);
});

socket.on('gameChatMessage', ({ sender, message }) => {
    appendMessage(gameChatMessages, sender, message);
});

socket.on('hostChanged', ({ newHostName }) => {
    appendMessage(chatMessages, 'Sistema', `${newHostName} è il nuovo host.`, true);
    if (socket.id === newHostId) { // newHostId deve essere passato dal server
        isHost = true;
        categorySelectionArea.style.display = 'block';
        // Il nuovo host riceverà anche le categorie selezionate tramite updateSelectedCategories
    } else {
        isHost = false;
        categorySelectionArea.style.display = 'none';
    }
    updateStartGameButton(playersList.children.length); // Aggiorna lo stato del bottone Avvia Gioco
});

socket.on('kickedFromLobby', ({ lobbyId, message }) => {
    alert(message); // O mostra un popup più elegante
    currentLobbyId = null;
    isHost = false;
    showScreen(welcomeScreen);
    welcomeError.textContent = message; // Mostra il motivo del kick
    chatMessages.innerHTML = '';
    playersList.innerHTML = '';
    categorySelectionArea.style.display = 'none';
});

// Ascolta le categorie disponibili dal server (solo per l'host)
socket.on('availableCategories', ({ categories }) => {
    if (isHost) {
        displayCategories(categories);
    }
});

// Ascolta le categorie selezionate aggiornate dal server (per tutti)
socket.on('updateSelectedCategories', ({ categories }) => {
    updateSelectedCategoriesDisplay(categories);
    // Per i non-host, potresti voler disabilitare le checkbox in base a questo
    if (!isHost) {
        categoryList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.disabled = true; // Disabilita le checkbox per i non-host
            cb.checked = categories.includes(cb.value); // Assicurati che siano selezionate correttamente
        });
    }
});


socket.on('gameStarted', ({ players, categories }) => {
    showScreen(gameScreen);
    updateGameLeaderboard(players);
    // Nascondi la selezione delle categorie durante il gioco
    categorySelectionArea.style.display = 'none';
    gameChatMessages.innerHTML = ''; // Pulisci la chat di gioco all'inizio
    appendMessage(gameChatMessages, 'Sistema', `Il gioco è iniziato con le categorie: ${categories.join(', ')}`, true);
});

socket.on('newQuestion', (data) => {
    // NUOVA LOGICA: Reset dello stato per la nuova domanda
    hasAnsweredCorrectly = false;
    answerInput.classList.remove('correct-answer'); // Rimuovi lo stile verde
    answerInput.value = '';
    answerInput.placeholder = "Inserisci la tua risposta...";
    answerInput.disabled = false; // Riabilita l'input
    sendAnswerBtn.disabled = false; // Riabilita il bottone

    revealedAnswerDisplay.style.display = 'none'; // Nascondi la risposta rivelata
    revealedAnswerDisplay.textContent = '';
    revealedPlayerAnswerDisplay.style.display = 'none'; // Nascondi la tua risposta rivelata
    playerGivenAnswerSpan.textContent = '';
    revealHintBtn.style.display = 'block'; // Mostra il bottone suggerimento

    currentQuestionDisplay.textContent = data.question.question;
    timerDisplay.textContent = data.timeLeft;

    if (data.question.type === 'image' && data.question.imageUrl) {
        questionImage.src = data.question.imageUrl;
        questionImageContainer.style.display = 'block'; // Mostra il contenitore dell'immagine
    } else {
        questionImage.src = '';
        questionImageContainer.style.display = 'none'; // Nascondi il contenitore dell'immagine
    }

    updateGameLeaderboard(data.players); // Aggiorna la classifica all'inizio di ogni domanda
});

socket.on('timerUpdate', ({ timeLeft, players }) => {
    timerDisplay.textContent = timeLeft;
    updateGameLeaderboard(players);
});

// NUOVA LOGICA: Gestione del risultato della risposta dal server
socket.on('answerResult', ({ isCorrect, scoreChange, playerId, totalScore, currentQuestionId }) => {
    if (playerId === socket.id) { // Se è la tua risposta
        if (isCorrect) {
            hasAnsweredCorrectly = true; // Il giocatore ha indovinato per questa domanda
            answerInput.classList.add('correct-answer'); // Rendi verde l'input
            answerInput.placeholder = "Corretto! Attendi la prossima domanda.";
            answerInput.disabled = true; // Disabilita l'input
            sendAnswerBtn.disabled = true; // Disabilita il bottone
            appendMessage(gameChatMessages, 'Sistema', `Hai risposto correttamente! +${scoreChange} punti.`, true);

            // Opzionale: Se vuoi mostrare la tua risposta appena indovini
            revealedPlayerAnswerDisplay.style.display = 'block';
            playerGivenAnswerSpan.textContent = answerInput.value; // Mostra la risposta che hai dato
        } else {
            // Se la risposta è sbagliata
            answerInput.classList.remove('correct-answer'); // Rimuovi qualsiasi stile verde precedente
            answerInput.placeholder = "Sbagliato! Riprova."; // Invita a riprovare
            answerInput.value = ''; // Pulisci l'input per un nuovo tentativo
            answerInput.disabled = false; // Riabilita l'input
            sendAnswerBtn.disabled = false; // Riabilita il bottone
            appendMessage(gameChatMessages, 'Sistema', "Risposta errata. Riprova.", true);
        }
    }
    // L'aggiornamento della leaderboard viene gestito da 'updateGameLeaderboard' che viene emesso a tutti i client
    // dal server dopo ogni risposta o tick del timer.
});


socket.on('hintRevealed', ({ hint }) => {
    appendMessage(gameChatMessages, 'Sistema', `Suggerimento: "${hint}"`, true);
    revealHintBtn.style.display = 'none'; // Nascondi il bottone dopo aver mostrato il suggerimento
});

socket.on('roundEnded', ({ correctAnswer, players, playerGivenAnswer, yourAnswerCorrect }) => {
    // La roundEnded è emessa quando il tempo scade o tutti hanno risposto
    // MODIFICA ESISTENTE: Resetta lo stato anche qui per sicurezza
    hasAnsweredCorrectly = false;
    answerInput.classList.remove('correct-answer'); // Rimuovi lo stile verde
    answerInput.value = '';
    answerInput.disabled = true; // Disabilita per la fine del round
    sendAnswerBtn.disabled = true; // Disabilita per la fine del round

    revealedAnswerDisplay.style.display = 'block';
    revealedAnswerDisplay.textContent = `La risposta corretta era: "${correctAnswer}"`;

    if (playerGivenAnswer) {
        revealedPlayerAnswerDisplay.style.display = 'block';
        playerGivenAnswerSpan.textContent = playerGivenAnswer;
        if (yourAnswerCorrect) {
            playerGivenAnswerSpan.style.color = 'green';
        } else {
            playerGivenAnswerSpan.style.color = 'red';
        }
    } else {
        revealedPlayerAnswerDisplay.style.display = 'none';
        playerGivenAnswerSpan.textContent = '';
    }

    updateGameLeaderboard(players);
    // Il server invierà 'newQuestion' dopo un breve ritardo per il prossimo round
});

socket.on('gameOver', ({ winnerName, players }) => {
    showScreen(endGameScreen);
    endGameMessage.textContent = winnerName ? `${winnerName} ha vinto!` : "La partita è terminata.";
    updateFinalLeaderboard(players);
    currentLobbyId = null; // Il gioco è finito, quindi non sei più in una lobby attiva
    isHost = false; // Reset dello stato host
    // Reset di altre variabili di stato se necessario
    hasAnsweredCorrectly = false; // Reset per la prossima partita
});

socket.on('gameReset', ({ lobbyId, players }) => {
    // Viene emesso quando l'host decide di "Giocare di nuovo"
    currentLobbyId = lobbyId;
    isHost = (socket.id === players[0].id); // Il primo giocatore nella lista è l'host per il reset
    showScreen(lobbyScreen);
    currentLobbyIdSpan.textContent = lobbyId;
    updatePlayersList(players);
    appendMessage(chatMessages, 'Sistema', 'Partita resettata. Puoi iniziare una nuova partita!', true);
    chatMessages.innerHTML = ''; // Pulisci la chat della lobby per il nuovo gioco
    gameChatMessages.innerHTML = ''; // Pulisci la chat di gioco
    if (isHost) {
        categorySelectionArea.style.display = 'block';
        // Richiedi le categorie disponibili per l'host per la nuova partita
        socket.emit('requestAvailableCategories', { lobbyId: currentLobbyId });
    } else {
        categorySelectionArea.style.display = 'none';
    }
});

// Funzione per aggiornare il bottone Avvia Gioco (abilitato solo per host con almeno 2 giocatori)
function updateStartGameButton(numPlayers) {
    if (isHost) {
        if (numPlayers < 2) {
             startGameInfo.textContent = 'Servono almeno 2 giocatori per iniziare.';
             startGameBtn.disabled = true;
        }
        else {
            startGameInfo.textContent = 'Quando sei pronto, avvia il gioco.';
            startGameBtn.disabled = false;
        }
    }
}

// Inizializza la visualizzazione alla schermata di benvenuto
showScreen(welcomeScreen);
categorySelectionArea.style.display = 'none'; // Assicurati che sia nascosta all'avvio

// Gestione disconnessione
socket.on('disconnect', () => {
    console.log('Disconnesso dal server.');
    appendMessage(chatMessages, 'Sistema', 'Ti sei disconnesso dal server. Ricarica la pagina per riconnetterti.', true);
});

socket.on('reconnect', () => {
    console.log('Riconnesso al server.');
    appendMessage(chatMessages, 'Sistema', 'Riconnesso al server.', true);
    if (currentLobbyId) {
        // Questo tenta di ricollegarsi alla lobby con lo stesso ID
        // In un ambiente di produzione, dovresti gestire la persistenza dell'utente in modo più robusto
        socket.emit('rejoinLobby', { lobbyId: currentLobbyId, playerName: playerNameInput.value.trim() });
    }
});

// Aggiungi un listener per gestire il caso in cui il giocatore sia kicked (es. host disconnesso)
socket.on('kickedFromLobby', ({ lobbyId, message }) => {
    alert(message); // O mostra un popup più elegante
    currentLobbyId = null;
    isHost = false;
    showScreen(welcomeScreen);
    welcomeError.textContent = message; // Mostra il motivo del kick
    chatMessages.innerHTML = '';
    playersList.innerHTML = '';
    categorySelectionArea.style.display = 'none';
});
