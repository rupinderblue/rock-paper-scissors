function computerPlay() {
    play=["rock","paper","scissors"]
    return play[Math.floor(Math.random()*3)]
}


function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay();
    const options = ['rock','paper','scissors']
    if (playerSelection ==="rock" && computerSelection ==="scissors"){
        document.getElementById('results').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        var playerScore = parseInt(document.getElementById('playerScore').innerHTML);
        playerScore += 1;
        document.getElementById('playerScore').innerHTML = playerScore;
        
    }
    else if (playerSelection ==="paper" && computerSelection ==="rock"){
        document.getElementById('results').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        var playerScore = parseInt(document.getElementById('playerScore').innerHTML);
        playerScore += 1;
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (playerSelection ==="scissors" && computerSelection ==="paper"){
        document.getElementById('results').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        var playerScore = parseInt(document.getElementById('playerScore').innerHTML);
        playerScore += 1;
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (playerSelection ==="scissors" && computerSelection ==="rock"){
        document.getElementById('results').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        var computerScore = parseInt(document.getElementById('computerScore').innerHTML);
        computerScore += 1;
        document.getElementById('computerScore').innerHTML = computerScore;
        
    }
    else if (playerSelection ==="rock" && computerSelection ==="paper"){
        document.getElementById('results').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        var computerScore = parseInt(document.getElementById('computerScore').innerHTML);
        computerScore += 1;
        document.getElementById('computerScore').innerHTML = computerScore;

    }
    else if (playerSelection ==="paper" && computerSelection ==="scissors"){
        document.getElementById('results').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        var computerScore = parseInt(document.getElementById('computerScore').innerHTML);
        computerScore += 1;
        document.getElementById('computerScore').innerHTML = computerScore;

    }
    else {
        document.getElementById('results').innerHTML = `It's a Tie! You chose, ${playerSelection} and Comp chose, ${computerSelection}`;
        
    }
    if (playerScore==5){
        var computerScore = parseInt(document.getElementById('computerScore').innerHTML);
        alert(`You Win! ${playerScore} beats ${computerScore}`);
        document.getElementById('playerScore').innerHTML = 0;
        document.getElementById('computerScore').innerHTML = 0;
        document.getElementById('results').innerHTML = 'First to 5 Wins';

    }
    else if (computerScore == 5) {
        var playerScore = parseInt(document.getElementById('playerScore').innerHTML);
        alert(`You Lost! ${computerScore} beats ${playerScore}`);
        document.getElementById('playerScore').innerHTML = 0;
        document.getElementById('computerScore').innerHTML = 0;
        document.getElementById('results').innerHTML = 'First to 5 Wins';
    }
}




document.body.addEventListener('click', event => {
    if (event.target.nodeName == "BUTTON") {
        playRound(playerSelection=event.target.textContent);
    }
})
