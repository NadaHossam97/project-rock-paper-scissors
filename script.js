// generate the computer choice
// generate a random number from 0 to 2 (0,1,2)
let randomNum = () => Math.floor(Math.random()*3)
let choices = ["rock","paper","scissors"]
let computerChoice = () =>  choices[randomNum()]

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#Paper");
let btnScissors = document.querySelector("#scissors");

function playroundR(computerChoice){
    humanChoice = btnRock.textContent
    if(humanChoice = computerChoice){
        let msg = document.createElement("p")
        msg.textContent = "no one wins"
        main.appendChild("p")

    }else{
        let msg = document.createElement("p")
        msg.textContent = "SKIP"
                main.appendChild("p")

    }
}






btnRock.addEventListener("click",playroundR())
btnPaper.addEventListener("click",playround())
btnScissors.addEventListener("click",playround())
