const dvdLogo = document.querySelector("svg");

const dvdColours = ["red", "blue", "green", "yellow", "purple"]; // colours used in the original dvd bouncer :D

// Random start offsets for the x & y positions
const offsetX = Math.random() * window.innerWidth;
const offsetY = Math.random() * window.innerHeight;

const dvdLogoBouncer = () => {
  const horizontalRange = window.innerWidth - dvdLogo.clientWidth;
  const verticalRange = window.innerHeight - dvdLogo.clientHeight;

  const speed = performance.now() * 0.2; // Time multiplier for movement speed (increase if you have tiktok brain rot :P)

  // Calculate the x and y positions using Math.abs for bouncing effect
  const x = Math.abs(((speed + offsetX) % (horizontalRange * 2)) - horizontalRange);
  const y = Math.abs(((speed + offsetY) % (verticalRange * 2)) - verticalRange);

  // Apply calculated positions to the logo
  dvdLogo.style.left = `${x}px`;
  dvdLogo.style.top = `${y}px`;

  // Change colour on every bounce
  const totalBounces = Math.floor((speed + offsetX) / horizontalRange) +  Math.floor((speed + offsetY) / verticalRange)
  dvdLogo.style.fill = dvdColours[totalBounces % dvdColours.length];

  requestAnimationFrame(dvdLogoBouncer);
};

dvdLogoBouncer();
