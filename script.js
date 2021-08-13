let playerScore = 0;
let compScore = 0;

const refreshPage = () => {
    location.reload();
  }  

document.querySelector('#reset').addEventListener('click', refreshPage);

document.querySelectorAll('.choice').forEach(
    choice => choice.addEventListener('click', playRound)
);

function computerPlay() {
    const option = [ 'rock','paper','scissor'];
    return option[Math.floor(Math.random() * option.length)]
}

function playRound() {
    if (playerScore == 5 || compScore == 5) {
        alert('The Game is Over! Click Reset to Play Again');
        return;
    }

    playerSelection = this.getAttribute('data-choice');
    compSelection = computerPlay();
    let result = document.querySelector('#result');
    let showScore = document.querySelector('#score');
    
    if (playerSelection == 'rock' && compSelection == 'paper'
            || playerSelection == 'paper' && compSelection == 'scissor'
            || playerSelection == 'scissor' && compSelection == 'rock') {    
               compScore++;
               result.textContent = 'You lost this round!';
               showScore.textContent =  `The score is now: Man ${playerScore} to Machine ${compScore}`; }
    else if (playerSelection == 'rock' && compSelection == 'scissor' 
            || playerSelection == 'paper' && compSelection == 'rock'
            || playerSelection == 'scissor' && compSelection == 'paper') {
                playerScore++;
                result.textContent = 'You won this round!';
                showScore.textContent =  `The score is now: Man ${playerScore} to Machine ${compScore}`; }
    else { 
        result.textContent = 'It\'s a draw';
        showScore.textContent =  `The score is now: Man ${playerScore} to Machine ${compScore}` }
    
    let finalResult = document.querySelector('#finalResult');
    if (playerScore == 5) finalResult.textContent = 'The winner is you!';
    else if (compScore == 5) finalResult.textContent = 'You are the loser';
}