import { galleryItems } from "./gallery-items.js";
// Change code below this line
let newInstance = null;
const list = document.querySelector(".gallery");
const rar = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
list.innerHTML = rar;
list.addEventListener("click", onImgClick);
function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscListener);
      },
    }
  );
  newInstance = instance;
  newInstance.show();
  const onEscListener = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    newInstance.close();
  };
  window.addEventListener("keydown", onEscListener);
}
