import { getImagesByQuery } from "./js/pixabay-api.js";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showErrorMessage,
  showEmptyWarning,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    showEmptyWarning();
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        showErrorMessage();
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      showErrorMessage();
    })
    .finally(() => {
      hideLoader();
    });

  event.currentTarget.reset();
});