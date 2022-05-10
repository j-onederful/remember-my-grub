// Constants
const totalSeconds = 60;

// DOM Refs
// const seconds = document.querySelector('#seconds')

// const timerCountdown = () => {
//     --totalSeconds
//     seconds.innerText = 
// }

var seconds = 60;
let timer;
function myFunction() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
     if (seconds > 0 ) {
         seconds--;
     } else {
         clearInterval(timer);
         alert("Time's up champ");
     }
}
document.getElementById("button").onclick = function() {
  if(!timer) {
    timer = window.setInterval(function() {
      myFunction();
    }, 1000);
  }
} 
//When a key is pressed in the text area, update the timer using myFunction

 //If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute

document.getElementById("timer").innerHTML="1:00";