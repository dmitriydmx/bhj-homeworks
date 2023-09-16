const fontLinks = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');

function changeFontSize(event) {
  event.preventDefault();

  fontLinks.forEach(link => {
    link.classList.remove('font-size_active');
  });
  event.target.classList.add('font-size_active');
  const size = event.target.dataset.size;
  bookElement.classList.remove('book_fs-big', 'book_fs-small');
  if (size === 'big') {
    bookElement.classList.add('book_fs-big');
  } else if (size === 'small') {
    bookElement.classList.add('book_fs-small');
  }
}
fontLinks.forEach(link => {
  link.addEventListener('click', changeFontSize);
});