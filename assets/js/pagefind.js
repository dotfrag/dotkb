import { Input, Instance, ResultList, Summary } from "@pagefind/modular-ui";

const modal = document.getElementById("searchModal");
const modalOpenBtns = document.querySelectorAll("[data-modal-open]");
// const closeButton = document.getElementById("searchModalCloseBtn");

function showModal() {
  modal.showModal();
  document.body.style.overflow = "hidden";
  document.querySelector("#search-input").focus();
}

function hideModal() {
  modal.close();
}

function toggleModal() {
  modal.open ? hideModal() : showModal();
}

for (const btn of modalOpenBtns) {
  btn.addEventListener("click", () => {
    showModal();
  });
}

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

export default function initPagefindInstance() {
  const instance = new Instance({
    bundlePath: "/pagefind/",
  });
  instance.add(
    new Input({
      inputElement: "#search-input",
    }),
  );
  instance.add(
    new Summary({
      containerElement: "#search-summary",
    }),
  );
  instance.add(
    new ResultList({
      containerElement: "#search-results",
      resultTemplate: (result) => {
        // wrapper
        const wrapper = document.createElement("li");

        // page link
        const link = document.createElement("a");
        link.href = result.url;
        link.innerText = result.meta.title;

        wrapper.innerHTML = `<a href="${result.url}">
        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
</svg><span>${result.meta.title}</span></a>`;

        // sub results
        const subResults = result.sub_results;
        if (subResults.length > 1) {
          for (const subResult of subResults.slice(1)) {
            const title = subResult.title;
            const re = new RegExp(String.raw`${title}.?\s?`);
            const excerpt = subResult.excerpt.replace(re, "").substring(0, 100);

            wrapper.innerHTML += `<a href="${subResult.url}">
            <span>${title}</span>
            <span>${excerpt}</span>
            </a>`;
          }
        }

        return wrapper;
      },
    }),
  );

  // showModal();
  // instance.triggerSearch("a");
}
