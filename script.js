const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("bg-music");

/* START */
intro.addEventListener("touchstart", start, { passive: true });
intro.addEventListener("click", start);

function start() {
  intro.style.display = "none";
  content.classList.remove("hidden");
  music.play().catch(() => {});
}

/* REVEAL */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.6 });

reveals.forEach(el => observer.observe(el));

/* TOUCH TRAIL */
function createTrail(x, y) {
  const dot = document.createElement("div");
  dot.className = "touch-trail";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 1000);
}

let last = 0;
document.addEventListener("touchmove", e => {
  const now = Date.now();
  if (now - last > 40) {
    const t = e.touches[0];
    createTrail(t.clientX, t.clientY);
    last = now;
  }
}, { passive: true });

document.addEventListener("mousemove", e => {
  createTrail(e.clientX, e.clientY);
});
