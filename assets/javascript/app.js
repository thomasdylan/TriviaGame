//Trivia questions with answers held in objects
var q1 = {
    question: "Who is the toughest man in Letterkenny?",
    options: ["Wayne", "McMurray", "Stewart", "Reilly"],
    answer: "Wayne",
    correctGif: '<img src= https://media.giphy.com/media/X81ZDf5BX9zkolIdWY/giphy.gif>',
    incorrectGif: '<img src= https://media.giphy.com/media/l0CLV3syoj2L1emc0/giphy.gif>'
};
var q2 = {
    question: "What is the name of Pastor Glen's Christian post-alt rock emo super band",
    options: ["The Salty Treats", "My Tattered Journal", "Sad Gospel", "Convert the Skids"],
    answer: "My Tattered Journal",
    correctGif: '<img src= https://media.giphy.com/media/VFeWMIKOJzEvv6EZEw/giphy.gif>',
    incorrectGif: '<img src= https://media.giphy.com/media/3o6ZtjpIk4erzIQMYU/giphy.gif>'
};
var q3 = {
    question: "What was the hockey coach sick of leaving droppings on the golf course?",
    options: ["Gophers", "Rabbits", "Humans", "Canadian Gooses"],
    answer: "Canadian Gooses",
    correctGif: '<img src= https://media.giphy.com/media/3oxHQhIsrPBmlFEXuw/giphy.gif>',
    incorrectGif: '<img src= https://media.giphy.com/media/5n7sUps5DE2CE1d9Ye/giphy.gif>'
};
var q4 = {
    question: 'Who do the gang throw a "Super Soft Birthday Party" for?',
    options: ["Katy", "Dan", "Daryl", "Stewart"],
    answer: "Daryl",
    correctGif: '<img src= https://media.giphy.com/media/3ornjJP6f70mvFfRXG/giphy.gif>',
    incorrectGif: '<img src= https://media.giphy.com/media/etKDScqDzX8Bi8KWfs/giphy.gif>'
};
var q5 = {
    question: "How many people live in Letterkenny?",
    options: ["1000", "5000", "10000", "500"],
    answer: "5000",
    correctGif: '<img src= https://media.giphy.com/media/3ohzdO0qBwFKIrHuQo/giphy.gif>',
    incorrectGif: '<img src= https://media.giphy.com/media/3ornk2Fk3VegMr4bKw/giphy.gif>'
};

//Global Variables
var timer;
var currentQuestion = [q1, q2, q3, q4, q5];
var questionCounter = 0;
var timeStarted = false;
var time = 10;
var score = 0;



$("document").ready(function() {
    var audio = new Audio('../../assets/audio/LetterkennyTheme.mp3');
    audio.play();
    var gameStarted = false;
    $(".card").hide();
    if(gameStarted === false) {
        gameStarted = true;
        $("#new").html("<h1 class='open'>Letterkenny Trivia</h1>" + "<div class='card mx-xs-10 mx-md-8 mx-auto mt-8 h-80 w-80 text-center' id='finalScore'>" + "<h1>Click here to start!</h1>" + "</div>");
        $("#new").click(function() {
            $("#new").remove();
            $(".card").show();
            $("#question").html(currentQuestion[0].question);
            trivia();
            tenTimer();
        })
    };
})

//10 second timer function checks if time is running already and sets the interval for count.
function tenTimer() {
    if (!timeStarted) {
        timeStarted = true;
        timer = setInterval(count, 1000);
    }
}

//Counts down the timer and displays info if clock runs out.
function count() {
    time--;
    $("#timer").html("Time Remaining: " + time);
    if (time === 0) {
        answeredQuestion();
        clearInterval(timer);
        timeStarted = false;
        $("#timer").html("Time's Up!");
        $("#image").html(currentQuestion[questionCounter].incorrectGif)
    }
}

//Resets the timer.
function reset() {
    clearInterval(timer);
    timeStarted = false;
    time = 10;
}

//Clears the old question and populates the new one if there are any more questions left in the array.
function nextQuestion() {
    questionCounter++;
    $("#choices").empty();
    $("#image").empty();
    $("#timer").empty();
    $("#result").empty();
    
    if(questionCounter >= currentQuestion.length) {
        $("#question").remove();
        $("#image").empty();
        $("#timer").empty();
        gameOver();
    } else {
        $("#question").html(currentQuestion[questionCounter].question);
        $("#timer").html("Time Remaining: " + time);
        console.log(currentQuestion[questionCounter].answer);
        trivia();
        tenTimer();
    }
    
}

//If they selected an answer they aren't able to select another answer till the next question shows up.
function answeredQuestion() {
    reset();
    $("#choices").empty();
    setTimeout(() => {
        nextQuestion();
    }, 5000);
}

//The meat and potatoes. Actually its more like the spaghetti.  Sets a click event for every option and creates a div for each.  This is the one area that really needs to be refactored.
function trivia() {  
    for (var i = 0; i < currentQuestion[questionCounter].options.length; i++) {
        $("#choices").append("<div class='card col-xs-10 col-md-8 mx-auto mt-2 py-3 text-center' id= option" + i + ">" + currentQuestion[questionCounter].options[i] + "</div>");
    };
    $("#option0").click(function () {
        if ($("#option0").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
            $("#result").text("Correct!");
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
            $("#result").text("Incorrect");
        }
        answeredQuestion();
    });
    $("#option1").click(function () {
        if ($("#option1").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
            $("#result").text("Correct!");
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
            $("#result").text("Incorrect");
        }
        answeredQuestion();
    });
    $("#option2").click(function () {
        if ($("#option2").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
            $("#result").text("Correct!");
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
            $("#result").text("Incorrect");
        }
        answeredQuestion();
    });
    $("#option3").click(function () {
        if ($("#option3").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
            $("#result").text("Correct!");
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
            $("#result").text("Incorrect");
        }
        answeredQuestion();
    });
}

//Displays the final score 
function gameOver() {
    $(".container").empty();
    $(".container").html("<div class='card mx-xs-10 mx-md-8 mx-auto mt-8 h-80 w-80 text-center' id='finalScore'>" + "<h1>Letterkenny Trivia</h1>" + "<h1>Your Score is " + score  + "/5!</h1>" + "</div>");
}

