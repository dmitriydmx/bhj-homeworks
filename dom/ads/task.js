const rotatorElements = document.querySelectorAll('.rotator__case');

function rotate() {
  const activeElement = document.querySelector('.rotator__case.rotator__case_active');
  const speed = activeElement.dataset.speed;
  const color = activeElement.dataset.color;

  let nextElement = activeElement.nextElementSibling;
  if (!nextElement) {
    nextElement = rotatorElements[0];
  }
  activeElement.classList.remove('rotator__case_active');
  nextElement.classList.add('rotator__case_active');
  nextElement.style.color = color;
  setTimeout(rotate, speed);
}
setTimeout(rotate, 0);