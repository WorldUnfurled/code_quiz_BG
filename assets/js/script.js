var time = document.querySelector('#time');
var question = document.querySelector('#question');
var answerList = document.querySelector('#answer-list');
var card = document.querySelector('#card');

var counter = 0;
var timeLeft = 60;
var score;

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

var highScores = [];

function playTime() {
    var timeInterval = setInterval(function() {
      timeLeft--;
      time.textContent = timeLeft;

      if (timeLeft == 0 || counter == 4) {
          clearInterval(timeInterval);
          displayHighscores();
      }
  
    }, 1000);
}

function displayFirstQuestions() {
    console.log(counter);
    document.addEventListener('click', function(next){
        if(next.target.tagName=="BUTTON"){
            displaySecondQuestions();
        }
    })

    if (counter === 0) {
        question.textContent = questions[0];
        for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[0]][i];
            console.log(answerCollection[Object.keys(answerCollection)[0]][i]);
        }
    }

    counter = 1;
}

function displaySecondQuestions() {
    console.log(counter);
    document.addEventListener('click', function(next){
        if(next.target.tagName=="BUTTON"){
            displayThirdQuestions();
        }
    })

    if (counter === 1) {
        question.textContent = questions[1];
        for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[1]][i];
            console.log(answerCollection[Object.keys(answerCollection)[1]][i]);
        }
    }

    counter = 2;
}

function displayThirdQuestions() {
    console.log(counter);
    document.addEventListener('click', function(next){
        if(next.target.tagName=="BUTTON"){
            displayFourthQuestions();
        }
    })

    if (counter === 2) {
        question.textContent = questions[2];
        for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[2]][i];
            console.log(answerCollection[Object.keys(answerCollection)[2]][i]);
        }
    }

    counter = 3;
}

function displayFourthQuestions() {
    console.log(counter);
    document.addEventListener('click', function(next){
        if(next.target.tagName=="BUTTON"){
            displayHighscores();
        }
    })

    if (counter === 3) {
        question.textContent = questions[3];
        for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[3]][i];
            console.log(answerCollection[Object.keys(answerCollection)[3]][i]);
        }
    }

    counter = 4;
}

function displayHighscores() {
    if (counter == 4 || timeLeft == 0) {
        window.location.replace("highscores.html");
        score = timeLeft;
        console.log(score);
    }

    document.addEventListener('click', function() {

    })
}

playTime();
displayFirstQuestions();