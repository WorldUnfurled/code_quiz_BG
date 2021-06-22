var time = document.querySelector('#time');
var question = document.querySelector('#question');
var answerList = document.querySelector('#answer-list');

var timeLeft = 60;

var questions = [
    "What tag is used to link a Javascript file to the HTML?",
    "The programming interface that represents a webpage with text is known as ____.", 
    "Typing console.log(this) in the global scope displays ____ to the console.",
    "Nodes inside of a parent node are known as ____."
];

var answerCollection = {
    firstAnswers: [
        '<js>',
        '<script>',
        '<java>',
        '<jquery>'
    ],

    secondAnswers: [
        'React',
        'jQuery',
        'DOM',
        'JSON'
    ],

    thirdAnswers: [
        'Window',
        'Document',
        'Body',
        'Main'
    ],

    fourthAnswers: [
        'Sons',
        'Grandchildren',
        'Elements',
        'Children'
    ]
};

var funcCollection = {
    play: playTime(),
    first: displayFirstQuestions(),
    second: displaySecondQuestions(),
    third: displayThirdQuestions(),
    fourth: displayFourthQuestions(),
    hs: displayHighscores()
}

function playTime() {
    // Sets interval in variable
    var timeInterval = setInterval(function() {
      timeLeft--;
      time.textContent = timeLeft;

      if (timeLeft == 0) {
          clearInterval(timeInterval);
      }
  
    }, 1000);
}

function displayFirstQuestions () {
    question.textContent = questions[0];
    for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
        answerList.children[i].children[0].textContent = i + ". " + answerCollection.firstAnswers[i];
    }
}

// function displaySecondQuestions () {
//     question.textContent = questions[1];
//     for (var i = 0; i < secondAnswers.length; i++) {
//         answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
//     }
// }

// function displayThirdQuestions () {
//     question.textContent = questions[2];
//     for (var i = 0; i < secondAnswers.length; i++) {
//         answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
//     }
// }

// function displayFourthQuestions () {
//     question.textContent = questions[3];
//     for (var i = 0; i < secondAnswers.length; i++) {
//         answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
//     }
// }

funcCollection.play();
funcCollection.first();