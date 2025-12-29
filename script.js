const intro = document.getElementById("intro");
const container = document.querySelector(".container");
const music = document.getElementById("bg-music");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  container.classList.remove("hidden");
  music.play().catch(()=>{});
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.6});

reveals.forEach(el => observer.observe(el));
