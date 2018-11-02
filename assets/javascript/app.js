var question1 = {
    question: "Which famous group was once known as The Quarrymen?",
    incorrectAnswer1: "Roxy Music",
    incorrectAnswer2: "Los Del Rio",
    incorrectAnswer3: "Guns N' Roses",
    correctAnswer: "The Beatles",
    imageURL: "../images/theBeatles.png"
}

var question2 = {
    question: "Who was the Queen of Soul?",
    incorrectAnswer1: "Adam Duritz",
    incorrectAnswer2: "Bon Scott",
    inc
}

$("#start").on("click", function () {
    $("#start").css("display", "none");
    $(".question").text(question1.question);
    $(".gameField").append("<ul>");
    $(".gameField").find("ul").addClass("answers");
    for (i = 1; i < 4; i++) {
        $(".gameField").find("ul").append("<li>" + (question1["incorrectAnswer" + i]));
    }
    $(".gameField").find("ul").append("<li id='correct'>" + question1.correctAnswer);

});

$("#correct").click(function(){
    $(".gameField").empty();
    console.log("fdsfsd");
});

