/* Раскрытие содержания статьи */
let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
  let moreBtn = blogArticle.querySelector('.more');
  moreBtn.addEventListener('click', function() {
    blogArticle.classList.toggle('short');
    moreBtn.textContent = moreBtn.textContent === 'Скрыть' ? 'Читать далее' : 'Скрыть';
  });
}