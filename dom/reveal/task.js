const revealElements = document.querySelectorAll('.reveal');

function isInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
function revealOnScroll() {
  revealElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('reveal_active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);