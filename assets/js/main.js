const start = document.querySelector(".start");
const game = document.querySelector(".game");
const onePlayer = document.querySelector(".onePlayer");
const twoPlayer = document.querySelector(".twoPlayer");
const selectPlayer = document.querySelector(".selectPlayerNumber");
const gameWithOnePlayer = document.querySelector(".gameWithOnePlayer");
const gameWithTwoPlayer = document.querySelector(".gameWithTwoPlayer");
const description = document.querySelector(".description");
const heading = document.querySelector(".heading");
const rockBtn = document.querySelector(".rockButton");
const paperBtn = document.querySelector(".paperButton");
const scsBtn = document.querySelector(".scsButton");
const rockBtn2 = document.querySelector(".rockButton2");
const paperBtn2 = document.querySelector(".paperButton2");
const scsBtn2 = document.querySelector(".scsButton2");
const firstImage = document.querySelector(".firstImage");
const secondImage = document.querySelector(".secondImage");
const firstImage2 = document.querySelector(".firstImage2");
const secondImage2 = document.querySelector(".secondImage2");
const wins = document.querySelector("#wins");
const loses = document.querySelector("#loses");
const wins2 = document.querySelector("#wins2");
const loses2 = document.querySelector("#loses2");
const yourScoreOnePlayer = document.querySelector("#yourScoreOnePLayer");
const aiScoreOnePlayer = document.querySelector("#aiScoreOnePlayer");
const yourScoreOnePlayer2 = document.querySelector("#yourScoreOnePLayer2");
const aiScoreOnePlayer2 = document.querySelector("#aiScoreOnePlayer2");
const turn = document.querySelector("#turn");

const rps = "rps";
start.addEventListener("click", function () {
    start.style.display = "none";
    game.style.display = "block";
})

onePlayer.addEventListener("click", function () {
    selectPlayer.style.display = "none";
    description.style.display = "none";
    heading.style.display = "none";
    gameWithOnePlayer.style.display = "block";
})

twoPlayer.addEventListener("click", function () {
    selectPlayer.style.display = "none";
    description.style.display = "none";
    heading.style.display = "none";
    gameWithTwoPlayer.style.display = "block";
})

rockBtn.addEventListener('click', function () {
    playOne('r');
});

paperBtn.addEventListener('click', function () {
    playOne('p');
})

scsBtn.addEventListener('click', function () {
    playOne('s');
});

var userr = 0;
var compp = 0;
var winss = 0;
var losess = 0;

function playOne(e) {
    const userChoice = e;
    const compChoice = randChoice();

    selectWinner(userChoice,compChoice)

    selectImage(userChoice,randChoice());

    if(userr === 3){
        winss++;
        userr = 0;
        compp = 0;
        firstImage.src = "./assets/images/rock-removebg-preview.png"
        secondImage.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(compp === 3){
        losess++;
        userr = 0;
        compp = 0;
        firstImage.src = "./assets/images/rock-removebg-preview.png"
        secondImage.src = "./assets/images/rock-removebg-preview.png"
    }

    yourScoreOnePlayer.innerHTML = userr;
    aiScoreOnePlayer.innerHTML = compp;
    wins.innerHTML = winss;
    loses.innerHTML = losess;
}

function randChoice() {
    const index = Math.floor(Math.random() * rps.length);
    return rps[index];
}

function selectImage(userChoice,compChoice){
    if(userChoice === "p"){
        firstImage.src = "./assets/images/paper-removebg-preview.png"
    }
    else if(userChoice === "r"){
        firstImage.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(userChoice === "s"){
        firstImage.src = "./assets/images/scs-removebg-preview.png"
    }

    if(compChoice === "r"){
        secondImage.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(compChoice === "p"){
        secondImage.src = "./assets/images/paper-removebg-preview.png"
    }
    else if(compChoice === "s"){
        secondImage.src = "./assets/images/scs-removebg-preview.png"
    }
}

function selectWinner(userChoice,compChoice){
    if (userChoice === "r" && compChoice === "s") {
        userr++;
    } else if (userChoice === "s" && compChoice === "r") {
        userr++;
    } else if (userChoice === "p" && compChoice === "r") {
        userr++;
    } else if (userChoice === "r" && compChoice === "p") {
        compp++;
    } else if (userChoice === "s" && compChoice === "p") {
        compp++;
    } else if (userChoice === "p" && compChoice === "s") {
        compp++;
    }
}


/* GAME WITH TWO PLAYERS */

var gamer = false;
var user1Choice = "";
var user2Choice = "";

rockBtn2.addEventListener('click', function () {
    playTwo('r');
});

paperBtn2.addEventListener('click', function () {
    playTwo('p');
})

scsBtn2.addEventListener('click', function () {
    playTwo('s');
});

function playTwo(e){
    if(!gamer){
        user1Choice = e;
        gamer = true;
        user2Choice = "";
        turn.innerHTML = "PLAYER 2"
    }
    else{
        user2Choice = e;
        gamer = false;
        turn.innerHTML = "PLAYER 1"
    }

    if(user1Choice!== "" && user2Choice !== ""){
    selectWinner2(user1Choice,user2Choice);
    selectImage2(user1Choice,user2Choice);
    }

    if(userr === 3){
        winss++;
        userr = 0;
        compp = 0;
        firstImage2.src = "./assets/images/rock-removebg-preview.png"
        secondImage2.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(compp === 3){
        losess++;
        userr = 0;
        compp = 0;
        firstImage2.src = "./assets/images/rock-removebg-preview.png"
        secondImage2.src = "./assets/images/rock-removebg-preview.png"
    }

    wins2.innerHTML = winss;
    loses2.innerHTML = losess;
    yourScoreOnePlayer2.innerHTML = userr;
    aiScoreOnePlayer2.innerHTML = compp;
}
function selectImage2(user1Choice,user2Choice){
    if(user1Choice === "p"){
        firstImage2.src = "./assets/images/paper-removebg-preview.png"
    }
    else if(user1Choice === "r"){
        firstImage2.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(user1Choice === "s"){
        firstImage2.src = "./assets/images/scs-removebg-preview.png"
    }

    if(user2Choice === "r"){
        secondImage2.src = "./assets/images/rock-removebg-preview.png"
    }
    else if(user2Choice === "p"){
        secondImage2.src = "./assets/images/paper-removebg-preview.png"
    }
    else if(user2Choice === "s"){
        secondImage2.src = "./assets/images/scs-removebg-preview.png"
    }
}

function selectWinner2(user1Choice,user2Choice){
    if (user1Choice === "r" && user2Choice === "s") {
        userr++;
    } else if (user1Choice === "s" && user2Choice === "r") {
        userr++;
    } else if (user1Choice === "p" && user2Choice === "r") {
        userr++;
    } else if (user1Choice === "r" && user2Choice === "p") {
        compp++;
    } else if (user1Choice === "s" && user2Choice === "p") {
        compp++;
    } else if (user1Choice === "p" && user2Choice === "s") {
        compp++;
    }
}