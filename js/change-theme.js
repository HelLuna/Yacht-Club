/* Переключение темы и шрифта сайта */
/* Кнопки переключения темы */
let lightThemeBtn = document.querySelector('.theme-button-light');
let darkThemeBtn = document.querySelector('.theme-button-dark');

/* Кнопки переключения шрифта */
let sansSerifBtn = document.querySelector('.font-button-sans-serif');
let serifBtn = document.querySelector('.font-button-serif');

lightThemeBtn.addEventListener('click', function () {
  lightThemeBtn.classList.add('active');
  darkThemeBtn.classList.remove('active');
  document.body.classList.remove('dark');
});

darkThemeBtn.addEventListener('click', function () {
  darkThemeBtn.classList.add('active');
  lightThemeBtn.classList.remove('active');
  document.body.classList.add('dark');
});

sansSerifBtn.addEventListener('click', function () {
  sansSerifBtn.classList.add('active');
  serifBtn.classList.remove('active');
  document.body.classList.remove('serif');
});

serifBtn.addEventListener('click', function () {
  serifBtn.classList.add('active');
  sansSerifBtn.classList.remove('active');
  document.body.classList.add('serif');
});