/* Переключение режима отображения карточек */
let cards = document.querySelector('.rent-cards');
let gridViewBtn = document.querySelector('.card-view-button-grid');
let listViewBtn = document.querySelector('.card-view-button-list');

gridViewBtn.addEventListener('click', function() {
  gridViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
  cards.classList.remove('list');
});

listViewBtn.addEventListener('click', function() {
  listViewBtn.classList.add('active');
  gridViewBtn.classList.remove('active');
  cards.classList.add('list');
});