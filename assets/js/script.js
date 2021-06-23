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

var counter = 0;

function displayFirstQuestions() {
    console.log(counter);
    if (counter === 0) {
        question.textContent = questions[0];
        for (var i = 0; i < answerCollection.firstAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[0]][i];
            console.log(answerCollection[Object.keys(answerCollection)[0]]);
        }
    
        document.addEventListener('click', function(next){
            if(next.target.tagName=="BUTTON"){
                displaySecondQuestions();
                counter++;
            }
        })
    }
}

function displaySecondQuestions() {
    console.log(counter);
    if (counter === 1) {
        question.textContent = questions[1];
        for (var i = 0; i < answerCollection.secondAnswers.length; i++) {
            answerList.children[i].children[0].textContent = i + ". " + answerCollection[Object.keys(answerCollection)[1]][i];
            console.log(answerCollection[Object.keys(answerCollection)[0]][1]);
        }

        document.addEventListener('click', function(next){
            if(next.target.tagName=="BUTTON"){
                displayThirdQuestions();
                counter++;
            }
        })
    }
}

function displayThirdQuestions () {
    question.textContent = questions[2];
    for (var i = 0; i < secondAnswers.length; i++) {
        answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
    }
}

function displayFourthQuestions () {
    question.textContent = questions[3];
    for (var i = 0; i < secondAnswers.length; i++) {
        answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
    }
}

playTime();
displayFirstQuestions();