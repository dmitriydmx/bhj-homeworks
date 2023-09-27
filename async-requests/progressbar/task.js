const form = document.getElementById('form');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];
  const formData = new FormData();

  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.addEventListener('progress', function(event) {
    const progress = event.loaded / event.total;
    progressBar.value = progress;
  });
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert('Файл успешно загружен'); 
      } else {
        alert('Ошибка при загрузке файла');
      }
    }
  };
  xhr.send(formData);
});
