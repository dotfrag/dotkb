export default function initNav() {
  const navBtn = document.querySelector('[aria-controls="nav-menu"]');
  const navMenu = document.getElementById("nav-menu");

  navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("max-md:translate-x-full");
    navBtn.ariaExpanded = navBtn.ariaExpanded === "false" ? "true" : "false";
  });

  document.addEventListener("touchstart", (e) => {
    if (!e.target.closest("nav")) {
      navMenu.classList.add("max-md:translate-x-full");
      navBtn.ariaExpanded = "false";
    }
  });
}
