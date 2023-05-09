// Get the grid container element
const container = document.getElementById('grid-container');

// Define the dimensions of the grid
const gridSize = 16;

// Apply flexbox properties to the container
container.classList.add('grid-container');

// Loop to create individual grid squares
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    // Create a new div element
    const square = document.createElement('div');
    
    // Add a class to the square element
    square.classList.add('grid-square');
    
    // Assign a random color to each square
    square.style.backgroundColor = getRandomColor();
    
    // Append the square to the container
    container.appendChild(square);
  }
}

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
