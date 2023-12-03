const options=['rock','paper','scissor'];
function getComputerChoice()
{
  const choice=options[Math.floor(Math.random()*3)];
  return choice;
}
function winner(playerSelection,computerSelection){
if(playerSelection===computerSelection)
{
    return "tie";
}
else if((playerSelection==='rock'&&computerSelection==='paper')
||(playerSelection==='paper'&&computerSelection==='scissor')||
(playerSelection==='scissor'&&computerSelection==='rock')){
    return "computer";
}
else{
    return "player";
}
}
function check(playerScore,computerScore,tieScore)
{
    const resultdiv= document.querySelector(".result");
    const total=playerScore+computerScore+tieScore;
    if(total===5)
    {
        if(playerScore>computerScore)
        {
            resultdiv.innerHTML=`OOHO! YOU WIN 🚩`;
        }
        else if(computerScore>playerScore)
        {
            resultdiv.innerHTML=`OOPS! YOU LOSE 😔`;
        }
        else{
            resultdiv.innerHTML=`game Tie,play again!🔄`;
        }
        setTimeout(function(){
            window.location.reload();
         }, 3000);
    }
}
function getPlayerChoice()
{
   
    const buttons=document.querySelectorAll(".player button");
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
    return(`${button.className}`);
        })})
}
function game(){
    let playerScore=0;
    let computerScore=0;
    let tieScore=0;
    const pscorediv=document.querySelector(".player span");
    const cscorediv=document.querySelector(".computer span");
    const buttons=document.querySelectorAll(".player button");
    const evaluation=document.querySelector(".evaluation");
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
   let computerSelection=getComputerChoice();         
   let playerSelection=`${button.className}`;
   let win=winner(playerSelection,computerSelection);
   if(win==="player")
{
    playerScore++;
    evaluation.innerHTML=`${playerSelection} beats ${computerSelection}`;
    pscorediv.innerHTML=playerScore;
}
else if(win==="computer")
{
    computerScore++;
    evaluation.innerHTML= `${computerSelection} beats ${playerSelection}`;
    cscorediv.innerHTML=computerScore;
}
else{
    tieScore++;
    evaluation.innerHTML=`Both chooses ${playerSelection}`;
}
check(playerScore,computerScore,tieScore);
        })})
}
game();