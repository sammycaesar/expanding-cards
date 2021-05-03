// Variables
const panels = document.querySelectorAll(".panel");

// When use clicks on a panel, then remove active classes then add the active class to the panel that is clicked
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// The function to remove active classes
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
