// Constants
//grab all divs (list or array of divs)
const pictures = document.querySelectorAll('.hidden-pic')
console.log(pictures[0])
const imgList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// Add images
function addPic(event) {
    const img = document.createElement("img")
    const num = Math.floor(Math.random() * 10)
    console.log(imgList[num])
    img.src = imgList[num]
    img.style.height = 200
    img.style.width = 200
    const ele = event.target.lastElementChild

    console.log(ele)
    ele.appendChild(img)
}
// addPic()
// pictures[0].addEventListener('click', addPic)
pictures.forEach(element => element.addEventListener('click', addPic))


//TIMER
var seconds = 60;
let timer;
function myFunction() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
   //If seconds are equal or greater than 0, countdown until 1 minute has passed
     if (seconds > 0 ) {
         seconds--;
     } else {
         clearInterval(timer);
         //Else, clear the timer and alert user that game is over
         alert("Time's up champ");
     }
}
document.getElementById("button").onclick = function() {
    //When a button is clicked, update the timer using myFunction
  if(!timer) {
    timer = window.setInterval(function() {
      myFunction();
    }, 1000);
  }
} 
document.getElementById("timer").innerHTML="1:00";