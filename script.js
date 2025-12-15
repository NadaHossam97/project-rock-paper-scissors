// generate a random number from 0 to 2 (0,1,2)
let randomNum = () => Math.floor(Math.random() * 3);
let choices = ['rock', 'paper', 'scissors'];
let comPChoice = () => choices[randomNum()];

let HumanScore = 0;
let computerScore = 0;

let msg = document.createElement('p');
msg.style.fontSize = '30px';
msg.style.fontWeight = '900';
msg.style.backgroundColor = 'pink';
msg.style.padding = '20px';
main.appendChild(msg);

function calculateRound(human, computer) {
    if (human == computer) {
        return 'draw';
    } else if (human == 'paper' && computer == 'rock') {
        return 'human';
    } else if (human == 'rock' && computer == 'paper') {
        return 'computer';
    } else if (human == 'scissors' && computer == 'rock') {
        return 'computer';
    } else if (human == 'scissors' && computer == 'paper') {
        return 'human';
    } else if (human == 'rock' && computer == 'scissors') {
        return 'human';
    } else if (human == 'paper' && computer == 'scissors') {
        return 'computer';
    }
    return 'draw';
}

function playRound(humanChoice) {
    const computerChoice = comPChoice();

    const result = calculateRound(humanChoice, computerChoice);

    if (result === 'human') {
        HumanScore += 1;
    } else if (result === 'computer') {
        computerScore += 1;
    }

    updateUI(result);
}

function updateUI(result) {
    if (HumanScore == 5 || computerScore == 5) {
        msg.innerHTML = `game over <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`;
        document
            .querySelectorAll('#playBtns>*')
            .forEach((btn) => (btn.disabled = true));

        return;
    }

    let message = '';
    if (result === 'draw') {
        message = 'no one wins';
    } else {
        message = `you ${result === 'human' ? 'win' : 'lose'}`;
    }

    message += ` <br>computer Score: ${computerScore} <br>human score: ${HumanScore}`;

    msg.innerHTML = message;
}

let restart = document.querySelector('#restart');
function restartBtn() {
    msg.innerHTML = ' ';
    HumanScore = 0;
    computerScore = 0;
    document
        .querySelectorAll('#playBtns>*')
        .forEach((btn) => (btn.disabled = false));
}
restart.addEventListener('click', restartBtn);
