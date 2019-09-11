//Trivia object holds questions and answer.
var trivia = {
    q1: {
        question: "Who is the toughest man in Letterkenny?",
        options: ["Wayne", "McMurray", "Stewart", "Reilly"],
        answer: "Wayne",
        correctGif: '<img src= >',
        incorrectGif: '<img src= >'
    },
    q2: {
        question: "What is the name of Pastor Glen's Christian post-alt rock emo super band",
        options: ["The Salty Treats", "My Tattered Journal"],
        answer: "My Tattered Journal",
        correctGif: '<img src= https://media.giphy.com/media/VFeWMIKOJzEvv6EZEw/giphy.gif>',
        incorrectGif: '<img src= >'
    },
    q3: {
        question: "",
        options: [],
        answer: "",
        correctGif: '<img src= >',
        incorrectGif: '<img src= >'
    },
    q4: {
        question: "",
        options: [],
        answer: "",
        correctGif: '<img src= >',
        incorrectGif: '<img src= >'
    },
    q5: {
        question: "",
        options: [],
        answer: "",
        correctGif: '<img src= >',
        incorrectGif: '<img src= >'
    }
};

//Global Variables
var timer;
var currentQuestion;
var timeStarted = false;
var time = 10;

$("#image").html(trivia.q2.correctGif);
//10 second timer function
function tenTimer() {
    if(!timeStarted) {
        timeStarted = true;
        timer = setInterval(count, 1000);
    }
}

function count() {
    time--;
    $("#timer").html(time);
    if(time === 0) {
        clearInterval(timer);
        timeStarted = false;
    }
}

tenTimer();






















function randomTestingJunk() {
    
console.log(trivia.q1.answer);
console.log(trivia.q1.options[2]);

if(trivia.q1.options[2] === trivia.q1.answer) {
    console.log("Success");
}

if(trivia.q1.options[1] !== trivia.q1.answer) {
    console.log("Success");
}

};