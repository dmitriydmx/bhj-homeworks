function countdown() {
  let timeLeft = 59;
  let timer = setInterval(function() {
    document.getElementById('timer').innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Вы победили в конкурсе!")
    }
  }, 1000)
}
countdown();