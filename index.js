// Your code here
// Access the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) { // Adjusted for dodger width of 40px
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for left arrow key
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
