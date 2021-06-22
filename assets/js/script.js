var time = document.querySelector('#time');
var answerList = document.querySelector('#question-list');

var timeLeft = 60;

var questions = [
    "What tag is used to link a Javascript file to the HTML?",
    "The programming interface that represents a webpage with text is known as ____", 
    "Typing console.log(this) in the global scope displays ____ to the console"
];

firstAnswers = [
    '<js>',
    '<script>',
    '<java>',
    '<jquery>'
];

secondAnswers = [
    'React',
    'jQuery',
    'DOM',
    'JSON'
];

thirdAnswers = [
    'Window',
    'Document',
    'Body',
    'Main'
];

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


    for (var i = 0; i < firstAnswers.length; i++) {
        answerList.children[i].children[0].textContent = i + ". " + firstAnswers[i];
        // console.log(answerList.children.eq(i).firstChild.textContent);
        console.log(answerList.children[i].children[0].textContent);
    }
}

playTime();
displayFirstQuestions();