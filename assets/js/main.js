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
const firstImage = document.querySelector(".firstImage");
const secondImage = document.querySelector(".secondImage");
const wins = document.querySelector("#wins");
const loses = document.querySelector("#loses");
const yourScoreOnePlayer = document.querySelector("#yourScoreOnePLayer");
const aiScoreOnePlayer = document.querySelector("#aiScoreOnePlayer")

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

    if (userChoice === "r" && compChoice === "s") {
        firstImage.src = "./assets/images/rock-removebg-preview.png"
        secondImage.src = "./assets/images/scs-removebg-preview.png"
        userr++;
    } else if (userChoice === "s" && compChoice === "r") {
        firstImage.src = "./assets/images/scs-removebg-preview.png"
        secondImage.src = "./assets/images/rock-removebg-preview.png"
        userr++;
    } else if (userChoice === "p" && compChoice === "r") {
        firstImage.src = "./assets/images/paper-removebg-preview.png"
        secondImage.src = "./assets/images/rock-removebg-preview.png"
        userr++;
    } else if (userChoice === "r" && compChoice === "p") {
        firstImage.src = "./assets/images/rock-removebg-preview.png"
        secondImage.src = "./assets/images/paper-removebg-preview.png"
        compp++;
    } else if (userChoice === "s" && compChoice === "p") {
        firstImage.src = "./assets/images/scs-removebg-preview.png"
        secondImage.src = "./assets/images/paper-removebg-preview.png"
        compp++;
    } else if (userChoice === "p" && compChoice === "s") {
        firstImage.src = "./assets/images/paper-removebg-preview.png"
        secondImage.src = "./assets/images/scs-removebg-preview.png"
        compp++;
    }

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