var readlineSync = require("readline-sync");
var userName = readlineSync.question("Whats your name?");
//Welcome
console.log(
  "Welcome to the",
  '"DO YOU KNOW ISHA ARORA"',
  "Quiz, ",
  userName.toUpperCase()
);
console.log("---------------");

//array of questions
var questions = [
  {
    Question: "What is my favorite food?",
    Answer: "Chole Chawal",
  },
  {
    Question: "What is my favorite mode of transport?",
    Answer: "Metro",
  },
  {
    Question: "What is my favorite app in the phone?",
    Answer: "YouTube",
  },
  {
    Question: "What do I like more? Tea or Coffee?",
    Answer: "Coffee",
  },
  {
    Question: "What show do I like most?",
    Answer: "The Office",
  },
];

//Quiz Function
var score = 0;
function quiz(Question, Answer) {
  var userAnswer = readlineSync.question(Question);
  if (userAnswer.toUpperCase() === Answer.toUpperCase()) {
    console.log("You are right");
    score++;
  } else {
    console.log("You are wrong!");
  }
}

//For loop to run the quiz
for (var i = 0; i < questions.length; i++) {
  var current = questions[i];
  quiz(current.Question, current.Answer);
  console.log("Correct answer is:", current.Answer);
  console.log("---------------");
}

//Test
console.log("Congratualations, Your final score is:", score);
if (score < 3) {
  console.log("Guess you dont know Isha that well!");
} else {
  console.log("Hey, looks like you know Isha well!");
}
console.log("---------------");
console.log("Thanks for playing the quiz!");
