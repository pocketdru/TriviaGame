var i = 0;
var c = 0;
var u = 0;

var questionObj = [{
        question: "Which famous group was once known as The Quarrymen?",
        answers: ["Roxy Music", "Los Del Rio", "Guns N' Roses", "The Beatles"],
        correctAns: "3",
        imageURL: "assets/images/theBeatles.png"
    },
    {
        question: "Who was the Queen of Soul?",
        answers: ["Keith Flint", "Johnny Logan", "Aretha Franklin", "Bon Scott"],
        correctAns: "2",
        imageURL: "assets/images/aretha_franklin.png"
    },
    {
        question: "What was the name of AC / DC s lead singer who died in 1980?",
        answers: ["Bon Scott", "Lars Ulrich", "Aretha Franklin", "Adam Duritz"],
        correctAns: "0",
        imageURL: "assets/images/bon-scott.png"
    },
    {
        question: "Who is the drummer of Metallica?",
        answers: ["Johnny Logan", "Keith Flint", "Lars Ulrich", "Michael Jackson"],
        correctAns: "2",
        imageURL: "assets/images/metallica-lars-ulrich.png"

    },
    {
        question: "What is Madonna's full name?",
        answers: ["Madonna Keith Ciccone", "Madonna Louise Ciccone", "Madonna Louise Scott", "Madonna Ciccone"],
        correctAns: "1",
        imageURL: "assets/images/madonna.png"
    },
    {
        question: "Which group did have a hit with the Macarena?",
        answers: ["Queen", "AC/DC", "Roxy Music", "Los Del Rio"],
        correctAns: "3",
        imageURL: "assets/images/losdelrio.png"
    }
    

];

function questionCount() {
    i++;
    if( i >= questionObj.length) {
        $(".gameField").empty();
        stopwatch.stop();
        console.log("game stop");
        $(".gameField").append("<h2>Correct answers: " + c);
        $(".gameField").append("<h2>Uncorrect answers: " + u);
    }  
}

function correctCount () {
    c++;
}

function uncorrectCount () {
    u++;
}

function newGame() {
    if( i != questionObj.length) {
    $(".gameField").empty();
    stopwatch.start();
    $(".gameField").append("<h2 class='timer'>Time remaining: <span id='display'>30</span> seconds");
    $(".gameField").append("<h2 class='question'>");
    $(".question").text(questionObj[i].question);
    $(".gameField").append("<ul>");
    $(".gameField").find("ul").addClass("answers");
    for (j = 0; j < 4; j++) {
        if (j == questionObj[i].correctAns) {
            console.log("ds");
            $(".gameField").find("ul").append("<li id='correct'>" + questionObj[i].answers[j]);
        } else {
            $(".gameField").find("ul").append("<li class='uncorrect'>" + (questionObj[i].answers[j]));
        }
    }
}
}

$("#start").on("click", function () {
    $("#start").css("display", "none");
    newGame();
});


$(document).on("click", "#correct", function () {
    stopwatch.stop();
    stopwatch.reset();
    $(".gameField").empty();
    $(".gameField").append("<h2>Correct!");
    $(".gameField").append("<img src='" + questionObj[i].imageURL + "'/>");
    questionCount();
    correctCount();
    setTimeout(newGame, 2000);

});

$(document).on("click", ".uncorrect", function () {
    stopwatch.stop();
    stopwatch.reset();
    $(".gameField").empty();
    for (j = 0; j < questionObj[i].answers.length; j++) {
        if (j == questionObj[i].correctAns) {
            var blah = questionObj[i].answers[j]
        }
    };
    $(".gameField").append("<h2>Nope!");
    $(".gameField").append("<p>The correct answer was: " + blah);
    $(".gameField").append("<img src='" + questionObj[i].imageURL + "'/>");
    uncorrectCount();
    questionCount();
    setTimeout(newGame, 2000);

});

var intervalId;
var clockRunning = false;

var stopwatch = {

    time: 30,
    lap: 1,

    reset: function () {

        stopwatch.time = 30;
        stopwatch.lap = 1;

        $("#display").text("30");

    },

    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function () {
        clearInterval(intervalId);
        clockRunning = false;
        console.log("stop");
    },

    count: function () {
        stopwatch.time--;

        var converted = stopwatch.time;
        console.log(converted);
        $("#display").text(converted);

        if (stopwatch.time === 0) {
            $(".question").text("Out of time!");
            stopwatch.stop();
            stopwatch.reset();
            setTimeout(newGame, 2000);
        }
    }
};