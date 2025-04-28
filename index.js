let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to update the results in the DOM
function updateResults(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Player Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        resultsDiv.innerHTML += `<p>${winner} wins the game!</p>`;
        disableButtons();
    }
}

// Function to disable buttons after the game ends
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    updateResults(result);
});

document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    updateResults(result);
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    updateResults(result);
});