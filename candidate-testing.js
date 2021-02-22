const input = require('readline-sync');

let dashLine = "----------------------------------------------------------------";
let doubleDashLine = "===================================================================";

let candidateName = '';
let candidates = [];
let question = '';
let correctAnswer ='';
let candidateAnswer = '';
let candidateAnswers = [];
let questions = 
['Who was the first American woman in space?\n',
'True or False: 5000 meters = 5 Kilometers\n',
'(5 + 3)/2 * 10 = ?\n',
'Given the array [8,"Orbit","Trajectory",45,],\nwhat entry is at index 2?\n',
'What is the minimum crew size for the ISS?\n'];
let correctAnswers = ['Sally Ride','True','40','Trajectory','3'];
let numOfCandidates = 5;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate.  Please Enter Your Name: ");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question); 
  return candidateAnswer;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  numOfCorrectAnswers = 0;
  for (let i=0; i<questions.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(candidateAnswers[i],"is Correct!");
      console.log();
      numOfCorrectAnswers++;
    } else {
        console.log(candidateAnswers[i],'is incorrect.  Correct answer is',correctAnswers[i]);
        console.log();
    }
  }
  let grade = numOfCorrectAnswers/questions.length * 100;
  return grade;
}

function runProgram() {
    // TODO 1.1c: Ask for candidate's name //
   for (let i=0; i<numOfCandidates; i++) {
    console.log(doubleDashLine);
    let candidate = askForName(candidateName);
    console.log();
    console.log("Hello! ", candidateName);
    console.log();
    console.log("The first step in joining the Astronaout Program is\ncompleting the following quiz of 5 question.\nYou must score 80% or better to move to the next step. Let's begin.  ");
    console.log()
    for (let j=0; j<questions.length; j++) {
      candidateAnswers[j] = askQuestion(questions[j]);
      console.log();
    }
    console.log(doubleDashLine);
    candidateGrade = gradeQuiz(candidateAnswers);
    if (candidateGrade < 80) {
      console.log("Sorry Candidate. Your Quize Grade is", candidateGrade+". You cannot continue in the program");
      
    } else {
      console.log("Congratulations!  You Passed.  Your Quiz Grade is", candidateGrade+".\nContinue to next stage in candidate selection.");
      candidates.push(candidate);
      console.log('\n'+dashLine);
      console.log("Candidates moving to next stage:\n ", candidates);
      console.log(dashLine);
    }
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
