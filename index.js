function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  // Test the function
  console.log(getComputerChoice()); // Output will be one of "rock", "paper", or "scissors"
  
function getHumanChoice() {
    // Use prompt to get user input
    const userInput = prompt("Enter your choice:");
    // Return the user's input
    return userInput;
  }
  
  // Test the function
  const choice = getHumanChoice();
  console.log("User's choice:", choice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Convert human choice to lowercase for case-insensitivity
    const lowerHumanChoice = humanChoice.toLowerCase();
  
    if (lowerHumanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie"; // Return "tie" to indicate a tie
    }
  
    if (lowerHumanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return "computer"; // Return "computer" to indicate computer win
      } else {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        return "human"; // Return "human" to indicate human win
      }
    } else if (lowerHumanChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        return "computer";
      } else {
        console.log("You win! Paper beats Rock");
        humanScore++;
        return "human";
      }
    } else if (lowerHumanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        return "computer";
      } else {
        console.log("You win! Scissors beats Paper");
        humanScore++;
        return "human";
      }
    } else {
      console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
      return "invalid"; // Return "invalid" for invalid input
    }
  }

function playGame() {
    // Initialize scores
    let playerScore = 0;
    let computerScore = 0;
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      // Get player's choice
      let playerSelection = prompt("Choose rock, paper, or scissors:");
      if (playerSelection === null) {
        alert("Game aborted. Please refresh the page to play again.");
        return;
      }
      playerSelection = playerSelection.toLowerCase();
  
      // Get computer's choice
      const computerSelection = getComputerChoice();
  
      // Play the round and determine the winner
      const roundResult = playRound(playerSelection, computerSelection);
  
      // Update scores
      if (roundResult === "human") {
        playerScore++;
      } else if (roundResult === "computer") {
        computerScore++;
      }
  
      // Display round results
      console.log(`Round ${i + 1}: ${roundResult === "tie" ? "It's a tie!" : roundResult === "human" ? "You win!" : "You lose!"} You chose ${playerSelection} and the computer chose ${computerSelection}`);
    }
  
    // Determine the overall winner
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is a tie!");
    }
  
    // Display final scores
    console.log(`Final Score: You ${playerScore} - Computer ${computerScore}`);
  }
  
  // Start the game
  playGame();