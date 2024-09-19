/* Переключение картинок в галерее */
let activePhoto = document.querySelector('.active-img');
let previews = document.querySelectorAll('.gallery-preview a');

for (let preview of previews) {
  preview.addEventListener('click', function(evt) {
    evt.preventDefault();

    let currentActive = document.querySelector('.gallery-preview .active-item');
    currentActive.classList.remove('active-item');
    preview.classList.add('active-item');

    activePhoto.src = preview.href;
  });
}
