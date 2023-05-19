import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryImage = galleryItems.map(item => {
return  `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`
}).join('')

galleryRef.insertAdjacentHTML('beforeend', galleryImage);

galleryRef.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.nodeName !== 'IMG') {
    return
  }

  const largeImage = event.target.dataset.source;
  
  const modal = basicLightbox.create(`
      <img src=${largeImage}>
  `)

  const closeModal = () => {
    modal.close();
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    } else {
      return
    }
    document.removeEventListener('keydown', handleKeyPress)
  };

  document.addEventListener('keydown', handleKeyPress);

  modal.show()
});
console.log(galleryItems);

