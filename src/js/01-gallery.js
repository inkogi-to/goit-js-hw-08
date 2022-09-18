// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

import {galleryItems} from './gallery-items';

const galleryList = document.querySelector(".gallery");

const itemsGallery = createGalleryList(galleryItems);
galleryList.innerHTML = itemsGallery;

function createGalleryList(items) {
    return items
        .map(
            (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
</a>`
        )
        .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
});

