//Trivia object holds questions and answer.
var trivia = {
    q1: {
        question: "Which player has never won a major?",
        options: ["Magisk", "Tarik", "Simp1e", "GeT_RighT"],
        answer: "Simp1e"
    },
    q2: {
        question: "",
        options: [],
        answer: ""
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

var timer;
var currentQuestion;
























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