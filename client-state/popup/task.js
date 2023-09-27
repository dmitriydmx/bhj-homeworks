window.addEventListener('DOMContentLoaded', function() {
  let modal = document.getElementById('subscribe-modal');
  let closeButton = modal.querySelector('.modal__close'); 
  let isClosed = document.cookie.includes('modalClosed=true');
  
  if (!isClosed) {
      modal.classList.add('modal_active');
  }  
  closeButton.addEventListener('click', function(event) {
      event.preventDefault();       
      document.cookie = 'modalClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';      
      modal.classList.remove('modal_active');
  });
});
