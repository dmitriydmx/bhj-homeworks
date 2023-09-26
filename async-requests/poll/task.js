fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    pollTitle.textContent = data.data.title;
    data.data.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      
        fetch('https://students.netoservices.ru/nestjs-backend/poll', {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: `vote=${data.id}&answer=${index}`
        })
          .then(response => response.json())
          .then(result => {
            pollTitle.style.display = 'none';
            pollAnswers.style.display = 'none';
      
            const results = document.getElementById('results');
            results.innerHTML = '';
      
            result.stat.forEach(stat => {
              const answerResult = document.createElement('p');
              answerResult.textContent = `${stat.answer}: ${stat.votes} голосов`;
              results.appendChild(answerResult);
            });
          })
          .catch(error => console.log(error));
      });

      pollAnswers.appendChild(button);
    });
  })
  .catch(error => console.log(error));
