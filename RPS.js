selArr = ["Rock", "Paper", "Scissors"];
Object.freeze(selArr);

var playerWins =0;
var computerWins =0;
var draws =0;

function randomNumber(){
  return Math.floor(Math.random()*3);
}
function modNumber(number) {
  return (number + 3) % 3;
}

function evalSelections(s1, s2) {
  // function determines whether s1 wins,loses or draws to s2
  // takes input of 0,1,2
  s2 += 3;
  if (s1 === modNumber(s2 - 1)) {
    return "loses";
  } else if (s1 === modNumber(s2 + 1)) {
    return "wins";
  } else if (s1 === modNumber(s2)) {
    return "draws";
  } else {
    return "ERROR invalid input";
  }
}

function test(offset) {
  for (var i = 0; i < 3; i++) {
    var result;
    result = evalSelections(i, i + offset);
    printOutcome(i,modNumber(i+offset),result);
  }
}
function printOutcome(s1,s2,outcome) {
  var str = `Player's ${selArr[s1]} ${outcome} to Computer's ${selArr[s2]}`; 
  console.log("=========================================================");
  console.log(str);
}

function printResult() {
  var str = `Player Wins: ${playerWins} Draws: ${draws} Computer's wins ${computerWins}`;
  console.log("=========================================================");
  console.log("======================FINAL RESULT=======================");
  console.log("=========================================================");
  console.log(str);
}

function playRound(s1,s2){
  var outcome = evalSelections(s1,s2);
    
  if(outcome==="loses"){
    computerWins++;
  }else if (outcome==="wins") {
    playerWins++;
  } else if (outcome==="draws") {
    draws++;
  } else {
    console.log("ERROR")
  }
  printOutcome(s1,s2,outcome);
  
}

function playGame(){
  var playerSelection = "";
  var computerSelection= "";
  playerWins =0;
  computerWins =0;
  draws =0;

  while(!Number.isInteger(rounds)){
    console.log("Please enter the number of rounds you would like to play");
    var rounds=parseInt(prompt());
  };

  console.log(`Commencing ${rounds} number of rounds`);

  for(var i=0;i<rounds;i++){
    console.log("Enter your selection:");
    console.log("1: Rock");
    console.log("2: Paper");
    console.log("3: Scissors");
    console.log("exit: Exit game");

    playerSelection=prompt();
    if(playerSelection==="exit"){
      break;
    }
    else if (playerSelection>=1 && playerSelection<=3 ) {
      playerSelection=parseInt(playerSelection);
      computerSelection=randomNumber();
      playRound(playerSelection-1,computerSelection);
    } else {
      console.log("That is not a valid option");
      i--;
    }
  }
  printResult();
}

/*
// Automated testing
console.log("Draws");
console.log(test(0));
console.log("Wins");
console.log(test(1));
console.log("Losses");
console.log(test(-1));
*/

//playGame();
//printOutcome(1,2,"wins");
