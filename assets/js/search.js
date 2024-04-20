const modal = document.getElementById("searchModal");
const searchBtn = document.getElementById("searchModalSearchBtn");
// const closeButton = document.getElementById("searchModalCloseBtn");

function showModal() {
  modal.showModal();
  document.body.style.overflow = "hidden";
  document.querySelector(".pagefind-ui__search-input").focus();
}

function hideModal() {
  modal.close();
}

function toggleModal() {
  modal.open ? hideModal() : showModal();
}

searchBtn.addEventListener("click", () => {
  showModal();
});

// closeButton.addEventListener("click", () => {
//   hideModal();
// });

modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    hideModal();
  }
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "auto";
});

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    toggleModal();
  }
});

export default function initPagefind() {
  const search = new PagefindUI({
    element: "#search",
    resetStyles: true,
    showImages: false,
    showSubResults: true,
  });

  // showModal();
  // search.triggerSearch("t");
}
