let clickCount = 0;

let cookieElement = document.getElementById("cookie");
let clickCounterElement = document.getElementById("clicker__counter");

cookieElement.addEventListener("click", function() {
  clickCount++;
  clickCounterElement.textContent = clickCount;
  
  if (cookieElement.width === 200) {
    cookieElement.width = 150;
  } else {
    cookieElement.width = 200;
  }
});
