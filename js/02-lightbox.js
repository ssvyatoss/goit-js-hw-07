import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({original, preview, description} = {}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}"
    alt="${description}"  
    />
  </a>
`;
};

const galleryCardsArr = galleryItems.map(el => {
    return makeGalleryCard(el);
});

galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''))

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(SimpleLightbox);
