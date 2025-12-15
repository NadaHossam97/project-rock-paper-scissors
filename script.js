// generate the computer choice



// generate a random number from 0 to 2 (0,1,2)
let randomNum = () => Math.floor(Math.random()*3)
let choices = ["rock","paper","scissors"]
let comPChoice = () =>  choices[randomNum()]


let paper = document.querySelector("#paper")
let rock =document.querySelector("#rock")
let scissors = document.querySelector('#scissors')

function btnPaper(){
    humanChoice = paper.textContent
    playRound()
    

}

function btnRock(){
    humanChoice = rock.textContent
    playRound()
}
function btnScissors(){
    humanChoice = scissors.textContent
    playRound()
}

let HumanScore = 0
let computerScore = 0

let msg = document.createElement('p')
msg.style.fontSize = "30px"
msg.style.fontWeight = "900"
msg.style.backgroundColor = "pink"
msg.style.padding = "20px"
main.appendChild(msg)



function playRound(){
msg.innerHTML= ""
let computerChoice = comPChoice()

if(humanChoice == computerChoice){
msg.innerHTML=`no one wins <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}else if(humanChoice == "paper" && computerChoice == "rock"){
    HumanScore += 1;
    msg.innerHTML=`you win <br>computer Score: ${computerScore}  <br>human score: ${HumanScore}`
}else if(humanChoice == "rock" && computerChoice == "paper"){
    computerScore += 1;
    msg.innerHTML=`you lose <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}else if(humanChoice == "scissors" && computerChoice == "rock"){
    computerScore += 1;
    msg.innerHTML=`you lose <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}else if(humanChoice == "scissors" && computerChoice == "paper"){
    HumanScore += 1;
    msg.innerHTML=`you win <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}else if(humanChoice == "rock" && computerChoice == "scissors"){
    HumanScore += 1;
    msg.innerHTML=`you win <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}else if(humanChoice == "paper" && computerChoice == "scissors"){
    computerScore += 1;
    msg.innerHTML=`you lose <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
}



if(HumanScore == 5 || computerScore == 5){
    
    msg.innerHTML = `game over <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`
    paper.disabled = true;
    rock.disabled  = true;
    scissors.disabled = true;
}
}
let restart = document.querySelector("#restart")
function restartBtn(){
    msg.innerHTML = " ";
    HumanScore = 0
    computerScore = 0 
    paper.disabled = false;
    rock.disabled  = false;
    scissors.disabled = false;

}
restart.addEventListener("click",restartBtn)


paper.addEventListener("click",btnPaper)
rock.addEventListener("click",btnRock)
scissors.addEventListener("click",btnScissors)
