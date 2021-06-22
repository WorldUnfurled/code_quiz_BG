var time = document.querySelector('#time');

var timeLeft = 60;

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

playTime();