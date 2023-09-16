// Получаем ссылки на элементы управления размером шрифта
const fontLinks = document.querySelectorAll('.font-size');

// Получаем ссылку на элемент книги
const bookElement = document.getElementById('book');

// Функция, которая меняет размер шрифта книги
function changeFontSize(event) {
  event.preventDefault();

  // Удаляем класс 'font-size_active' у всех ссылок
  fontLinks.forEach(link => {
    link.classList.remove('font-size_active');
  });

  // Добавляем класс 'font-size_active' к текущей ссылке
  event.target.classList.add('font-size_active');

  // Получаем размер шрифта из data-атрибута
  const size = event.target.dataset.size;

  // Удаляем все классы, относящиеся к размеру шрифта
  bookElement.classList.remove('book_fs-big', 'book_fs-small');

  // Добавляем класс в зависимости от размера шрифта
  if (size === 'big') {
    bookElement.classList.add('book_fs-big');
  } else if (size === 'small') {
    bookElement.classList.add('book_fs-small');
  }
}

// Добавляем обработчик события для каждой ссылки на размер шрифта
fontLinks.forEach(link => {
  link.addEventListener('click', changeFontSize);
});