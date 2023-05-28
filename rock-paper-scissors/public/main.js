//Assign converted string values to a variable
let playerScore = +document.querySelector('.player-score span').innerHTML;
let computerScore = +document.querySelector('.computer-score span').innerHTML;

//add event listeners to player choices and reset button
document.querySelector('.paper').addEventListener('click', choice);
document.querySelector('.scissors').addEventListener('click', choice);
document.querySelector('.rock').addEventListener('click', choice);
document.querySelector('.reset').addEventListener('click', reset);


compChoice = ['rock', 'paper', 'scissors']

//function that updates the DOM based on outcome of the game

function choice(event) {
    let computerChoice = compChoice[Math.floor(Math.random() * compChoice.length)]
    let playerChoice = event.target.ariaLabel

    //shows the player and computer choice

    updateChoice(computerChoice, event)

    //the if statement checks if the player choice beats the computer choice else computer wins

    if ((playerChoice == 'scissors' && computerChoice == 'paper') || (playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock')) {

        //this shows to the DOM who won and  why they won, then updates the score card  

        document.querySelector('.result').innerHTML = 'PLAYER WINS!'
        document.querySelector('.explanation').innerHTML = `${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`
        playerScore += 1;
        document.querySelector('.player-score span').innerHTML = playerScore;
    } else if (playerChoice == computerChoice) {
        document.querySelector('.result').innerHTML = 'IT\'S A DRAW'
        document.querySelector('.explanation').innerHTML = `YOU BOTH PICKED THE SAME WEAPON, TRY AGAIN`
    } else {
        document.querySelector('.result').innerHTML = 'COMPUTER WINS'
        document.querySelector('.explanation').innerHTML = `${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`
        computerScore += 1;
        document.querySelector('.computer-score span').innerHTML = computerScore;
    }

    //This shows the message prompt once player loses or wins

    if (document.querySelector('.player-score span').innerHTML == '5') {
        document.querySelector('.prompt h2').innerHTML = 'YOU WIN';
        document.querySelector('.container').style.display = 'flex';
    }
    else if (document.querySelector('.computer-score span').innerHTML == '5') {
        document.querySelector('.prompt h2').innerHTML = 'YOU LOSE'
        document.querySelector('.container').style.display = 'flex';
    }
}

//this functions resets the game back to its default state

function reset() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.computer-score span').innerHTML = 0;
    document.querySelector('.player-score span').innerHTML = 0;
    document.querySelector('.result').innerHTML = 'Are you ready?'
    document.querySelector('.computer-choice').innerHTML = '❔';
    document.querySelector('.player-choice').innerHTML = '❔';
    document.querySelector('.explanation').innerHTML = 'Choose your weapon, first to reach 5 points win'
    computerScore = 0;
    playerScore = 0;
}

//updates the player-computer-choice content 

function updateChoice(computerChoice, event) {
    document.querySelector('.player-choice').innerHTML = event.target.innerHTML;
    switch (computerChoice) {
        case 'rock':
            document.querySelector('.computer-choice').innerHTML = '✊';
            break;
        case 'paper':
            document.querySelector('.computer-choice').innerHTML = '🤚';
            break;
        default:
            document.querySelector('.computer-choice').innerHTML = '✌️';
            break;
    }
}

