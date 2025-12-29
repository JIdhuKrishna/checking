/* MUSIC */
const music = document.getElementById("bg-music");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

/* FADE ON SCROLL */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dy: Math.random() * 1 + 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y += p.dy;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* SCROLL TRAIL */
const trail = document.getElementById("trail");
const tctx = trail.getContext("2d");
trail.width = innerWidth;
trail.height = innerHeight;

window.addEventListener("scroll", () => {
  tctx.fillStyle = "rgba(255,255,255,0.15)";
  tctx.beginPath();
  tctx.arc(Math.random() * trail.width, Math.random() * trail.height, 2, 0, Math.PI * 2);
  tctx.fill();
});
