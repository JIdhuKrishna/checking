const reveals = document.querySelectorAll(".reveal");
const music = document.getElementById("bg-music");

let musicStarted = false;

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        if (!musicStarted) {
          music.play().catch(() => {});
          musicStarted = true;
        }
      }
    });
  },
  { threshold: 0.5 }
);

reveals.forEach(el => observer.observe(el));
