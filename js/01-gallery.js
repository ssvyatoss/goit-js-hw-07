import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({preview, original, description} = {}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"  
      />
    </a>
  </div>  
`;
};

const galleryCardsArr = galleryItems.map(el => {
    return makeGalleryCard(el);
});

galleryListEl.addEventListener('click', ev => {
    ev.preventDefault();
    if (ev.target.nodeName !== "IMG") {
        return;
    }
    console.log(ev.target);
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src='${ev.target.dataset.source}'/>
    </div>
`)
window.addEventListener('keydown', event => {
    if (event .code === 'Escape') {
        instance.close();
    }
    console.log(event);
});


instance.show();
});



galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''))

console.log(galleryItems);
