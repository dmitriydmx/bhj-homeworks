const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function switchTab(event) {
  event.preventDefault();
  tabs.forEach(tab => {
    tab.classList.remove('tab_active');
  });
  event.target.classList.add('tab_active');

  const tabIndex = Array.from(tabs).indexOf(event.target);
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('tab__content_active');
  });
  tabContents[tabIndex].classList.add('tab__content_active');
}
tabs.forEach(tab => {
  tab.addEventListener('click', switchTab);
});
