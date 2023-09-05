const dropdownButtons = document.querySelectorAll('.dropdown');

dropdownButtons.forEach(button => {
  const list = button.querySelector('.dropdown__list');
  const value = button.querySelector('.dropdown__value');
  const collapseList = () => {
    list.classList.remove('dropdown__list_active');
  }

  button.addEventListener('click', () => {
    const isOpened = list.classList.contains('dropdown__list_active');
    list.classList.toggle('dropdown__list_active', !isOpened);
  });

  list.addEventListener('click', (event) => {
    event.preventDefault();

    document.addEventListener('DOMContentLoaded', function() {
      const dropdownValue = document.querySelector('.dropdown__value');
      const dropdownList = document.querySelector('.dropdown__list');
      
      dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
      });
    });
    const newValue = event.target.textContent.trim();
    value.textContent = newValue;    
  });

  document.addEventListener('click', (event) => {
    const isOutsideClick = !button.contains(event.target) && !list.contains(event.target);
    if (isOutsideClick) {
      collapseList();
    }
  });
});