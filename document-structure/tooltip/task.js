const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    
    const title = tooltip.getAttribute('title'); // получаем текст подсказки
    const tooltipElement = document.querySelector('.tooltip'); // получаем элемент подсказки
    
    tooltipElement.innerText = title; // устанавливаем текст подсказки
    tooltipElement.classList.add('tooltip_active'); // добавляем класс для отображения подсказки
    
    // рассчитываем позицию подсказки
    const rect = tooltip.getBoundingClientRect();
    const position = tooltip.getAttribute('data-position') || 'top';
    
    if (position === 'top') {
      tooltipElement.style.top = rect.top - tooltipElement.offsetHeight - 10 + 'px';
      tooltipElement.style.left = rect.left + tooltipElement.offsetWidth / 2 - 5 + 'px';
    } else if (position === 'left') {
      tooltipElement.style.top = rect.top + 'px';
      tooltipElement.style.left = rect.left - tooltipElement.offsetWidth - 10 + 'px';
    } else if (position === 'right') {
      tooltipElement.style.top = rect.top + 'px';
      tooltipElement.style.left = rect.right + 10 + 'px';
    } else if (position === 'bottom') {
      tooltipElement.style.top = rect.bottom + 10 + 'px';
      tooltipElement.style.left = rect.left + tooltipElement.offsetWidth / 2 - 5 + 'px';
    }
  });
});
