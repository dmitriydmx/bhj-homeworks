const tooltips = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault();

    const title = tooltip.getAttribute('title');
    const tooltipElement = document.querySelector('.tooltip');

    if (tooltipElement.innerText === title) {
      tooltipElement.classList.toggle('tooltip_active');
      return;
    }
    
    tooltipElement.innerText = title;
    
    if (currentTooltip !== null) {
      currentTooltip.classList.remove('tooltip_active');
    }
    
    tooltipElement.classList.add('tooltip_active');
    currentTooltip = tooltip;
    
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
