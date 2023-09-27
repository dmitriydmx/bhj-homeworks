function sendForm() {  
  let form = document.getElementById('signin__form');
  let formData = new FormData(form);  
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', form.action, true);
  xhr.send(formData);  
  
  xhr.onload = function() {
    let response = JSON.parse(xhr.responseText);    
   
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
  };
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
