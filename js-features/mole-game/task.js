const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function hit(element) {
  if (!element.isTrusted) return; 

  if (element.target.matches('.hole_has-mole')) {
    dead++;
    deadCounter.textContent = dead;

    if (dead === 10) {
      alert('Поздравляем! Вы победили!');
      resetGame();
    }
  } else {
    lost++;
    lostCounter.textContent = lost;

    if (lost === 5) {
      alert('К сожалению, вы проиграли!');
      resetGame();
    }
  }
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
}

holes.forEach((hole) => {
  hole.addEventListener('click', hit);
});