let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = []

$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
});

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randChosenColor = buttonColors[randomNumber];
    gamePattern.push(randChosenColor);
    $("#" + randChosenColor).fadeOut(100).fadeIn(100).fadeOut(100)
    playSound(randChosenColor);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    $("#" + currentColor).classList.add("pressed");

    setTimeout(function () {
        $("#" + currentColor).classList.remove("pressed")
    }, 100);
}

