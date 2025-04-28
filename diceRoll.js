// Function to roll a dice
function rollDice() {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log(rollDice());