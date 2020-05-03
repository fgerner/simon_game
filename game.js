let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = []
let started = false;
let level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true
    }
})

$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);
    let randomNumber = Math.round(Math.random() * 3);
    let randChosenColor = buttonColors[randomNumber];
    gamePattern.push(randChosenColor);
    $("#" + randChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randChosenColor);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

