const editor = document.getElementById('editor');
const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
clearButton.addEventListener('click', function() {
  editor.value = '';
  localStorage.removeItem('editorValue');
});

editor.addEventListener('input', function() {
  const editorValue = editor.value;
  localStorage.setItem('editorValue', editorValue);
});

window.addEventListener('DOMContentLoaded', function() {
  const savedValue = localStorage.getItem('editorValue');
    editor.value = savedValue;
});

const card = document.querySelector('.card');
card.appendChild(clearButton);
