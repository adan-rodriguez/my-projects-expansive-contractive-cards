const panels = document.querySelectorAll(".panel");
const links = document.querySelectorAll(".panel a");

const audio = new Audio(
  "https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3"
);
audio.volume = 0.1;

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", () => {
    if (panel.classList.contains("active")) return;
    audio.play();
    audio.currentTime = 0;
  });
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const isActive = panel.classList.contains("active");
    removeActiveClass();
    !isActive && panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (!link.parentElement.classList.contains("active")) e.preventDefault();
  });
});
