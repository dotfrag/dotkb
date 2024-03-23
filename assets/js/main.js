window.addEventListener("DOMContentLoaded", (event) => {
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    resetStyles: false,
    pageSize: 20,
  });
});

const modal = document.getElementById("searchModal");
const btn = document.getElementById("searchModalBtn");

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    document.querySelector(".pagefind-ui__search-input").focus();
  } else {
    modal.classList.add("hidden");
  }
}

btn.addEventListener("click", () => {
  toggleModal();
});

window.onclick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    toggleModal();
  } else if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});
