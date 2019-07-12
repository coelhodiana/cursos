var userInput = 'rock'
userInput = userInput.toLowerCase()

var computerChoice = ''

function getComputerChoice(){
var num = Math.floor(Math.random() * 3)

switch(num){
  case 0:
    return 'rock'
    break
  case 1:
    return 'paper'
    break
  case 2:
    return 'scissors'
    break
}
} 

function determineWinner (userChoice, computerChoice) {
  if (userChoice == 'bombo'){
    return 'YOU\'RE THE WINNER!'
  }
  
  if(userChoice == computerChoice){
    return 'The game was a tie.'
  }
  
  if (userChoice == 'rock'){
    if (computerChoice == 'scissor'){
        return 'You won!'
        } else {
      		return 'Computer won!'
    }
  } else if (userChoice == 'paper'){
    if(computerChoice == 'rock'){
       return 'You won!'
  	} else {
      return 'Computer won!'
    }
  } else if (userChoice == 'scissors'){
    	if (computerChoice == 'paper'){
    		return 'You won!'
 			} else {
        return 'Computer won!'
      }        
    }
}

function playGame(){
  var userChoice = userInput
  var computerChoice = getComputerChoice()
  
  console.log(userChoice)
  console.log(computerChoice)
  
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()