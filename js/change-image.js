/* Переключение картинок в галерее */
let activePhoto = document.querySelector('.active-img');
let previews = document.querySelectorAll('.gallery-preview a');

for (let preivew of previews) {
  preivew.addEventListener('click', function(evt) {
    evt.preventDefault();

    let currentActive = document.querySelector('.gallery-preview .active-item');
    currentActive.classList.remove('active-item');
    preivew.classList.add('active-item');

    activePhoto.src = preivew.href;
  });
}