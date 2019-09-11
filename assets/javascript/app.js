//Trivia object holds questions and answer.
var trivia = {
    q1: {
        question: "Who is the toughest man in Letterkenny?",
        options: ["Wayne", "McMurray", "Stewart", "Reilly"],
        answer: "Wayne",
        correctGif: '<img src= https://media.giphy.com/media/X81ZDf5BX9zkolIdWY/giphy.gif>',
        incorrectGif: '<img src= https://media.giphy.com/media/l0CLV3syoj2L1emc0/giphy.gif>'
    },
    q2: {
        question: "What is the name of Pastor Glen's Christian post-alt rock emo super band",
        options: ["The Salty Treats", "My Tattered Journal", "Sad Gospel", "Convert the Skids"],
        answer: "My Tattered Journal",
        correctGif: '<img src= https://media.giphy.com/media/VFeWMIKOJzEvv6EZEw/giphy.gif>',
        incorrectGif: '<img src= https://media.giphy.com/media/3o6ZtjpIk4erzIQMYU/giphy.gif>'
    },
    q3: {
        question: "What was the hockey coach sick of leaving droppings on the golf course?",
        options: ["Gophers", "Rabbits", "Humans", "Canadian Gooses"],
        answer: "Canadian Gooses",
        correctGif: '<img src= https://media.giphy.com/media/3oxHQhIsrPBmlFEXuw/giphy.gif>',
        incorrectGif: '<img src= https://media.giphy.com/media/5n7sUps5DE2CE1d9Ye/giphy.gif>'
    },
    q4: {
        question: 'Who do the gang throw a "Super Soft Birthday Party" for?',
        options: ["Katy", "Dan", "Daryl", "Stuart"],
        answer: "Daryl",
        correctGif: '<img src= https://media.giphy.com/media/3ornjJP6f70mvFfRXG/giphy.gif>',
        incorrectGif: '<img src= https://media.giphy.com/media/etKDScqDzX8Bi8KWfs/giphy.gif>'
    },
    q5: {
        question: "How many people live in Letterkenny?",
        options: ["1000", "5000", "10000", "500"],
        answer: "5000",
        correctGif: '<img src= https://media.giphy.com/media/3ohzdO0qBwFKIrHuQo/giphy.gif>',
        incorrectGif: '<img src= https://media.giphy.com/media/3ornk2Fk3VegMr4bKw/giphy.gif>'
    }
};

//Global Variables
var timer;
var currentQuestion = trivia.q1.question;
var timeStarted = false;
var time = 10;

$("#question").html(currentQuestion);
$("#image").html(trivia.q3.incorrectGif);
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