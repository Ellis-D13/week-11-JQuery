// Initializing the game board and other variables
const board = document.getElementById('board');
const heading = document.getElementById('heading');
let currentPlayer = 'X';
let moves = 0;
let gameOver = false;

// Create a 3x3 grid
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    // Event listener for each cell click
    cell.addEventListener('click', cellClick);
}


// Handle cell clicks
function cellClick(event) {
    const cell = event.target;
    // Check if the cell is empty and the game is not over
    if (cell.textContent === '' && !gameOver) {
        cell.textContent = currentPlayer;
        moves++;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        heading.textContent = `${currentPlayer}'s Turn`;
    }
}

// Check for a winner
function checkWinner() {
    // All the possible winning combinations
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const cells = document.querySelectorAll('.cell');

    for (const [a, b, c] of winningCombination) {
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (moves === 9) {
        gameOver = true;
        alert("It's a draw!");
    }
}

// Reset button functionality
document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    heading.textContent = "X's Turn";
    moves = 0;
    gameOver = false;
});

