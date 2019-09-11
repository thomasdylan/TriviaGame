//Trivia object holds questions and answer.
var trivia = {
    q1: {
        question: "Who is the toughest man in Letterkenny?",
        options: ["Wayne", "McMurray", "Stewart", "Reilly"],
        answer: "Wayne",
        
    },
    q2: {
        question: "What is the name of Pastor Glen's Christian post-alt rock emo super band",
        options: ["The Salty Treats", "My Tattered Journal"],
        answer: "My Tattered Journal",
        correctGif: '<img src= https://media.giphy.com/media/VFeWMIKOJzEvv6EZEw/giphy.gif>'
    },
    q3: {
        question: "",
        options: [],
        answer: ""
    },
    q4: {
        question: "",
        options: [],
        answer: ""
    },
    q5: {
        question: "",
        options: [],
        answer: ""
    }
};

//Global Variables
var timer;
var currentQuestion;

$("#image").html(trivia.q1.correctGif);
//10 second timer function
function tenTimer() {
    
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