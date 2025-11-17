// ===== PARTICLES BACKGROUND (Minimal Professional Motion) =====
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numParticles = 70;

// Resize canvas dynamically
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.6 + 0.3;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    // const themeIsLight = document.body.classList.contains("light"); // Removed
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // *** MODIFIED: Simplified to only use light theme color ***
    ctx.fillStyle = `rgba(0, 119, 182, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function connectParticles() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x;
      const dy = particlesArray[a].y - particlesArray[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        // const themeIsLight = document.body.classList.contains("light"); // Removed
        ctx.beginPath();
        // *** MODIFIED: Simplified to only use light theme color ***
        ctx.strokeStyle = `rgba(0, 119, 182, 0.1)`;
        ctx.lineWidth = 0.3;
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}

// Initialize all
resizeCanvas();
initParticles();
animateParticles();