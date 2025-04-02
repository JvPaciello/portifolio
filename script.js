// Initialize cursor elements (now cursor is small ball, follower is circle)
const cursor = document.querySelector('.cursor'); // Small ball
const cursorFollower = document.querySelector('.cursor-follower'); // Circle
let mouseX = 0;
let mouseY = 0;
let ballX = 0; // Tracks small ball position
let ballY = 0;
let circleX = 0; // Tracks circle position
let circleY = 0;

// Mouse move event listener
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animation loop for smooth movement
function animateCursor() {
  // Small ball movement (faster and more precise)
  ballX += (mouseX - ballX) / 3;
  ballY += (mouseY - ballY) / 3;
  
  // Circle movement (slower and more laggy)
  circleX += (mouseX - circleX) / 9;
  circleY += (mouseY - circleY) / 9;  
  
  // Apply positions
  cursor.style.left = `${ballX}px`; // Small ball
  cursor.style.top = `${ballY}px`;
  cursorFollower.style.left = `${circleX}px`; // Circle
  cursorFollower.style.top = `${circleY}px`;
  
  requestAnimationFrame(animateCursor);
}

// Start animation
animateCursor();

// Click effect
document.addEventListener('click', () => {
  cursor.style.transform = `translate(-50%, -50%) scale(0.7)`;
  setTimeout(() => {
    cursor.style.transform = `translate(-50%, -50%) scale(1)`;
  }, 100);
});

// Add hover class to all interactive elements
document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
  el.classList.add('cursor-hover');
});