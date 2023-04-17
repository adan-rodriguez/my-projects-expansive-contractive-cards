const panels = document.querySelectorAll(".panel");

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
