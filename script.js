const panels = document.querySelectorAll(".panel");

const audio = new Audio(
  "https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3"
);
audio.volume = 0.5;

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
