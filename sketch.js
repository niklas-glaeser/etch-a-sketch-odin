// Get the grid container element
const container = document.querySelector('.grid-container');

// Define the initial dimensions of the grid
let gridSize = 16;

// Flag to track if the mouse button is clicked
let isMouseDown = false;

// Function to create the grid
function createGrid() {
  // Clear previous grid
  container.innerHTML = '';

  // Calculate the square size based on container width
  const containerWidth = 640;
  const squareSize = containerWidth / gridSize;

  // Loop to create individual grid squares
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Create a new div element
      const square = document.createElement('div');

      // Add a class to the square element
      square.classList.add('grid-square');

      // Set the square size
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      // Add event listeners for hover and click effects
      square.addEventListener('mouseenter', () => {
        if (isMouseDown) {
          square.classList.add('hovered');
        }
      });

      square.addEventListener('mousedown', () => {
        square.classList.add('hovered');
        isMouseDown = true;
      });

      square.addEventListener('mouseup', () => {
        isMouseDown = false;
      });

      // Append the square to the container
      container.appendChild(square);
    }
  }
}

// Call the createGrid function initially
createGrid();

// Button click event handler to reset the grid
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
  gridSize = parseInt(prompt('Enter grid size:'), 10);
  createGrid();
});
