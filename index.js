let winner = document.querySelector(".winner");

// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";

//Js Game

let play=document.getElementById("play")
let rock=document.querySelector(".rock")
let paper=document.querySelector(".paper")
let scissors=document.querySelector(".scissors")
let startAgain=document.getElementById("startAgain")
let start=document.querySelector(".btn-submit")
let playerScore=document.querySelector(".player-score")
let machineScore=document.querySelector(".machine-score")
let cardPlayer1=null
let score1=0
let score2=0

function enterName(){
    if (document.getElementById("player-name-dialog").value==='') {
      alert("Please enter you name.")
      return
    }
    document.querySelector(".player-name").innerHTML=document.getElementById("player-name-dialog").value    
    modal.style.display = "none";
}

function Playing() {
  var random = parseInt(Math.random() * 3);
  document.querySelector(".machine img").src = `./img/${random}R.png`;
  return random;
}

function selectWinner(cardPlayer1, cardPlayer2) {
  if (cardPlayer1===1 && cardPlayer2===2) {
    score2++
    machineScore.innerHTML=score2
    return (winner.innerHTML = "You lose!!!")
  }
  if (cardPlayer1===2 && cardPlayer2===0) {
    score2++
    machineScore.innerHTML=score2
    return (winner.innerHTML = "You lose!!!")
  }
  if (cardPlayer1===0 && cardPlayer2===1) {
    score2++
    machineScore.innerHTML=score2
    return (winner.innerHTML = "You lose!!!")
  }
  if (cardPlayer1===2 && cardPlayer2===1) {
    score1++
    playerScore.innerHTML=score1
    return (winner.innerHTML = "You win!!!")
  }
  if (cardPlayer1===0 && cardPlayer2===2) {
    score1++
    playerScore.innerHTML=score1
    return (winner.innerHTML = "You win!!!")
  }
  if (cardPlayer1===1 && cardPlayer2===0) {
    score1++
    playerScore.innerHTML=score1
    return (winner.innerHTML = "You win!!!")
  }
  return (winner.innerHTML = "Draw!!!");
}

play.addEventListener("click", function(event) {
  if(cardPlayer1===null) {
      alert("Choose a card")
      return
    }
  var cardPlayer2 = Playing();
  selectWinner(cardPlayer1, cardPlayer2);
});
rock.addEventListener("click", function(event) {
    document.querySelector(".player img").src = `./img/0L.png`;
    cardPlayer1=0
});
paper.addEventListener("click", function(event) {
    document.querySelector(".player img").src = `./img/1L.png`;
    cardPlayer1=1
});
scissors.addEventListener("click", function(event) {
    document.querySelector(".player img").src = `./img/2L.png`;
    cardPlayer1=2
});
start.addEventListener("click", function(event) {
    enterName()
});
startAgain.addEventListener("click", function(event) {
    document.querySelector(".player img").src = `./img/none.png`;
    document.querySelector(".machine img").src = `./img/none.png`;
    cardPlayer1=null
    score1=0
    score2=0
    playerScore.innerHTML=0
    machineScore.innerHTML=0
    winner.innerHTML = "The winner is..."
    document.getElementById("player-name-dialog").value=''
    modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

