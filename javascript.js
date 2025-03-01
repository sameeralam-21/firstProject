// Initialize the click counter
let clickCount = 0;

// Get the button and counter display elements
const counterButton = document.getElementById('counterButton');
const clickCountDisplay = document.getElementById('clickCount');

// Add an event listener to the button
counterButton.addEventListener('click', function() {
  // Increase the counter by 1
  clickCount++;

  // Update the displayed click count
  clickCountDisplay.textContent = clickCount;
});
