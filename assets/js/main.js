import codeCopy from "./codeCopy";
import initPagefindInstance from "./pagefind";
import initNav from "./nav";

window.addEventListener("DOMContentLoaded", () => {
  initNav();
  initPagefindInstance();
  codeCopy();
});
