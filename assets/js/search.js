const modal = document.getElementById("searchModal");
const searchBtn = document.getElementById("searchModalSearchBtn");
const closeButton = document.getElementById("searchModalCloseBtn");

function showModal() {
  // TODO: add a11y
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  // document.body.style.top = `-${window.scrollY}px`;
  document.querySelector(".pagefind-ui__search-input").focus();
}

function hideModal() {
  // TODO: add a11y
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  // document.body.style.top = "";
}

function toggleModal() {
  if (modal.classList.contains("hidden")) {
    showModal();
  } else {
    hideModal();
  }
}

searchBtn.addEventListener("click", () => {
  toggleModal();
});

closeButton.addEventListener("click", () => {
  hideModal();
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
    hideModal();
  }
});

export default function initPagefind() {
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    resetStyles: false,
  });

  // showModal();
}
