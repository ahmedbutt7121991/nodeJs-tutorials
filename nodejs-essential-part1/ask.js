const readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

const questions = [
    "What is your name?",
    "Where do you live?",
    "What you are going to do with NodeJS?",
    "Which programming lamguage do you like"
];

//rl.question("How do you like Node?", answer => {
//    console.log(`Your answer: ${answer}`);
//});

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };
    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});