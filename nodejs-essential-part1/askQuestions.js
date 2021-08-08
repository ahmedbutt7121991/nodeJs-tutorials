const questions = [
    "What is your name?",
    "Where do you live?",
    "What you are going to do with NodeJS?",
    "Which programming lamguage do you like? "
];

collectAnswers = require("./lib/collectAnswers");

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => 
console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => 
    process.exit()
    );