function computerPlay() {
    play=["rock","paper","scissors"]
    return play[Math.floor(Math.random()*3)]
}


function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    const options = ['rock','paper','scissors']
    if (playerSelection ==="rock" && computerSelection ==="scissors"){
        //return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`
        return 1
    }
    else if (playerSelection ==="paper" && computerSelection ==="rock"){
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        return 1
    }
    else if (playerSelection ==="scissors" && computerSelection ==="paper"){
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        return 1
    }
    else if (playerSelection ==="scissors" && computerSelection ==="rock"){
        //return `You Lose! ${computerSelection} beats ${playerSelection}`
        return -1
    }
    else if (playerSelection ==="rock" && computerSelection ==="paper"){
        //return `You Lose! ${computerSelection} beats ${playerSelection}`
        return -1
    }
    else if (playerSelection ==="paper" && computerSelection ==="scissors"){
        //return `You Lose! ${computerSelection} beats ${playerSelection}`
        return -1
    }
    else {
        //return `It's a Tie! You chose, ${playerSelection} and Comp chose, ${computerSelection}`
        return 0
    }
}

function askPlayerSelection(){
    return prompt("Chose your move:")
}

function game(){
let playerScore = 0;
let computerScore = 0;
for (let i=0; i<5;i++){
    const options = ['rock','paper','scissors']
    let playerSelection=askPlayerSelection();
    let counter = 0;
    while (!options.includes(playerSelection.toLocaleLowerCase()) && counter<5 ){
        counter++;
        playerSelection=askPlayerSelection();
    }
    if (counter ==5){
        playerSelection='rock'
    }
    const computerSelection = computerPlay();
    let score = playRound(playerSelection,computerSelection)
    if (score>0){
        playerScore+=1
        console.log(`You Win this Round! ${playerSelection.toLowerCase()} beats ${computerSelection}`)
    }
    else if (score<0){
        computerScore+=1
        console.log(`You Lost this Round! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
    }
    else{
        console.log(`A Tie this Round! Comp = ${computerSelection} and Player = ${playerSelection.toLowerCase()}`)
    }

}
if (playerScore>computerScore){
    return `You Win! ${playerScore} beats ${computerScore}`
}
else if (playerScore<computerScore){
    return `You Lost! ${computerScore} beats ${playerScore}`
}
else{
    return `It's a Tie! Comp = ${computerScore} and Player = ${playerScore}`
}
}

console.log(game())