// Constants
//grab all divs (list or array of divs)
const pictures = document.querySelectorAll('.hidden-pic')
console.log(pictures[0])
// const imgList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const imgList = ['./img/avoToast.png', './img/backyardBurg.JPG', './img/beans.JPG', './img/BLT.JPG', './img/cheeseSteak.png', './img/clubSando.JPG', './img/creamPie.JPG', './img/pretzelBun.png', './img/spicyTuna.png', './img/steakAndEggs.jpg']
const pushArr = []

// Add images
function addPic(event) {
    const img = document.createElement("img")
    //come up with random number on array
    const num = Math.floor(Math.random() * imgList.length)
    if (pushArr.indexOf(imgList[num]) != - 1) {
        imgList.splice(num, 1)
    }
    pushArr.push(imgList[num])
    console.log(imgList, pushArr)
    img.src = imgList[num]
    img.style.height = '182px'
    img.style.width = '182px'
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