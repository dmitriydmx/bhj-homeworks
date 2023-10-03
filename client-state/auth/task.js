function sendForm(event) {
  event.preventDefault();
 
  let form = document.getElementById('signin__form');
  let formData = new FormData(form);
  
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';

  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = xhr.response;
      
      if (response.success) {
        let userId = response.user_id;
        
        localStorage.setItem('user_id', userId);
        
        let welcomeBlock = document.getElementById('welcome');
        welcomeBlock.classList.add('welcome_active');
        welcomeBlock.querySelector('#user_id').textContent = userId;
       
        form.reset();
      } else {        
        alert('Неверный логин/пароль');
      }
    } else {      
      alert('Ошибка при отправке запроса');
    }
  };

  xhr.onerror = function() {
    console.error('Ошибка при отправке запроса:', xhr.statusText);
  };

  xhr.send(new URLSearchParams(formData));
}
function signOut() {
  localStorage.removeItem('user_id');
  let welcomeBlock = document.getElementById('welcome');
  welcomeBlock.classList.remove('welcome_active');
}
let userId = localStorage.getItem('user_id');
if (userId) {
  let welcomeBlock = document.getElementById('welcome');
  welcomeBlock.classList.add('welcome_active');
  welcomeBlock.querySelector('#user_id').textContent = userId;
}
let form = document.getElementById('signin__form');
form.addEventListener('submit', sendForm);
