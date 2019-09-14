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

$("#question").html(currentQuestion[0].question);

//10 second timer function
function tenTimer() {
    if (!timeStarted) {
        timeStarted = true;
        timer = setInterval(count, 1000);
    }
}

function count() {
    time--;
    $("#timer").html(time);
    if (time === 0) {
        answeredQuestion();
        clearInterval(timer);
        timeStarted = false;
        $("#timer").html("Time's Up!");
        $("#image").html(currentQuestion[questionCounter].incorrectGif)
    }
}

function reset() {
    clearInterval(timer);
    timeStarted = false;
    time = 10;
}

function nextQuestion() {
    questionCounter++;
    $("#choices").empty();
    $("#image").empty();
    $("#timer").empty();
    
    if(questionCounter >= currentQuestion.length) {
        $("#question").remove();
        $("#image").empty();
        $("#timer").empty();
        gameOver();
    } else {
        $("#question").html(currentQuestion[questionCounter].question);
        $("#timer").html(time);
        console.log(currentQuestion[questionCounter].answer);
        trivia();
        tenTimer();
    }
    
}

function answeredQuestion() {
    reset();
    $("#choices").empty();
    setTimeout(() => {
        nextQuestion();
    }, 5000);
}

function trivia() {  
    for (var i = 0; i < currentQuestion[questionCounter].options.length; i++) {
        $("#choices").append("<div class='card col-xs-10 col-md-8 m-auto text-center'> <div class = 'card-body'id= option" + i + ">" + currentQuestion[questionCounter].options[i] + "</div></div>");
    };
    $("#option0").click(function () {
        if ($("#option0").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
        }
        answeredQuestion();
    });
    $("#option1").click(function () {
        if ($("#option1").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
        }
        answeredQuestion();
    });
    $("#option2").click(function () {
        if ($("#option2").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
        }
        answeredQuestion();
    });
    $("#option3").click(function () {
        if ($("#option3").text() === currentQuestion[questionCounter].answer) {
            score++;
            $("#image").html(currentQuestion[questionCounter].correctGif);
        } else {
            $("#image").html(currentQuestion[questionCounter].incorrectGif);
        }
        answeredQuestion();
    });
}

function gameOver() {
    $(".container").empty();
    $(".container").html("<div class='card col-xs-10 col-md-8 m-auto text-center' id='finalScore'>" + "<h1>Your Score is " + score  + "!</h1>" + "</div>");
}

trivia();
tenTimer();