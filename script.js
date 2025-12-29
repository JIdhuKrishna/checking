const intro = document.getElementById("intro");
const container = document.querySelector(".container");
const music = document.getElementById("bg-music");

/* START EXPERIENCE */
intro.addEventListener("click", () => {
  intro.style.display = "none";
  container.classList.remove("hidden");
  music.play().catch(() => {});
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

reveals.forEach(el => observer.observe(el));

/* TOUCH HEART TRAIL */
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "touch-heart";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}

/* MOBILE */
let lastTime = 0;
document.addEventListener("touchmove", e => {
  const now = Date.now();
  if (now - lastTime > 40) {
    const touch = e.touches[0];
    createHeart(touch.clientX, touch.clientY);
    lastTime = now;
  }
});

/* DESKTOP (optional) */
document.addEventListener("mousemove", e => {
  createHeart(e.clientX, e.clientY);
});
