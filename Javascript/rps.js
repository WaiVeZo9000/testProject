let computer = '';

//Get the value from the local storage
const score = JSON.parse(localStorage.getItem('score')) || //if the score is null
{win: 0,
lose: 0,
tie: 0};

function ResetScore(){
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  updateScore();
  console.log('The score resets')
}

let isPlaying = false;
let stopInterval;

function AutoPlay(){
  if (!isPlaying){
    stopInterval = setInterval(function (){
      let playerMove = ComputerMove();
      PlayGame(playerMove);
    }, 1000);
    isPlaying = true;
  }
  else{
    clearInterval(stopInterval);
    isPlaying = false;
  }

}

function PlayGame(PlayerMove){
  console.log(ComputerMove());

  if (PlayerMove == 'Rock')
  {
    if (computer == 'Rock')
    {
      result = 'Tie';
    }
    else if (computer == 'Paper')
    {
      result = 'Lose';
    }
    else if (computer == 'Scissor')
    {
      result = 'Win';
    }  
  }

  else if(PlayerMove == 'Paper')
  {
    if (computer == 'Rock')
    {
      result = 'Win';
    }
    else if (computer == 'Paper')
    {
      result = 'Tie';
    }
    else if (computer == 'Scissor')
    {
      result = 'Lose';
    }
  }

  else if (PlayerMove == 'Scissor')
  {
    if (computer == 'Rock')
    {
      result = 'Lose';
    }
    else if (computer == 'Paper')
    {
      result = 'Win';
    }
    else if (computer == 'Scissor')
    {
      result = 'Tie';
    }
  }

  if (result == 'Win'){
    score.win++;
  }
  else if (result == 'Lose'){
    score.lose++;
  }
  else if (result == 'Tie'){
    score.tie++;
  }
  updateScore();
  
  document.querySelector('.js-result').innerHTML = `You ${result}`;
  document.querySelector('.js-move').innerHTML = `You 
  <img src="images/${PlayerMove}.png" class="move-icon"> 
  <img src="images/${computer}.png" class="move-icon"> 
  Computer`;

  //Store the value in local storage
  localStorage.setItem('score', JSON.stringify(score)); 

}

function ComputerMove()
{
  let random_number = Math.random()* 2;
  random_number = Math.round(random_number);

  let result = '';
  if (random_number == 0){
    computer = 'Rock';

  }
  else if (random_number == 1){
    computer = 'Paper';

  }
  else if (random_number == 2){
    computer = 'Scissor';

  }

  return computer;
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins:${score.win}, Loses:${score.lose}, Tie:${score.tie}`;
}
