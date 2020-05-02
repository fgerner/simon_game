let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randChosenColor = buttonColors[randomNumber];
    gamePattern.push(randChosenColor);
    $("#"+randChosenColor).fadeOut(100).fadeIn(100).fadeOut(100)

    let audio = new Audio("sounds/" + randChosenColor + ".mp3");
    audio.play();
};

