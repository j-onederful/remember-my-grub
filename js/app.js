// Constants
//grab all divs (list or array of divs)
const pictures = document.querySelectorAll('.hidden-pic')
const buttons = document.querySelectorAll('.box')
console.log(pictures[0])
const imgList = ['./img/avoToast.png', './img/avoToast.png', './img/backyardBurg.JPG', './img/backyardBurg.JPG', './img/beans.JPG', './img/beans.JPG', './img/BLT.JPG', './img/BLT.JPG', './img/cheeseSteak.png', './img/cheeseSteak.png', './img/clubSando.JPG', './img/clubSando.JPG', './img/creamPie.JPG', './img/creamPie.JPG', './img/pretzelBun.png', './img/pretzelBun.png', './img/spicyTuna.png', './img/spicyTuna.png', './img/steakAndEggs.jpg', './img/steakAndEggs.jpg']
const buttonArray = []

let randomList = imgList.sort(() => {
    return Math.random() - .5
  })
  let index = 0
console.log(randomList)



// Add images
// function addPic(event) {
    
// }
pictures.forEach((element, index) => {
    const img = document.createElement("img")
    // console.log(imgList[num])
    img.src = randomList[index] 
    img.style.height = '182px'
    img.style.width = '182px'

    element.appendChild(img)
})

//Hide overlaying box buttons
const box1 = document.getElementById('box-1')
box1.addEventListener('click', hideElement.bind(this, box1))
const box2 = document.getElementById('box-2')
box2.addEventListener('click', hideElement.bind(this, box2))
// const box3 = document.getElementById('box-3')
// box3.addEventListener('click', hideElement.bind(this, box3))
const box4 = document.getElementById('box-4')
box4.addEventListener('click', hideElement.bind(this, box4))
const box5 = document.getElementById('box-5')
box5.addEventListener('click', hideElement.bind(this, box5))
const box6 = document.getElementById('box-6')
box6.addEventListener('click', hideElement.bind(this, box6))
const box7 = document.getElementById('box-7')
box7.addEventListener('click', hideElement.bind(this, box7))
const box8 = document.getElementById('box-8')
box8.addEventListener('click', hideElement.bind(this, box8))
const box9 = document.getElementById('box-9')
box9.addEventListener('click', hideElement.bind(this, box9))
const box10 = document.getElementById('box-10')
box10.addEventListener('click', hideElement.bind(this, box10))
const box11 = document.getElementById('box-11')
box11.addEventListener('click', hideElement.bind(this, box11))
const box12 = document.getElementById('box-12')
box12.addEventListener('click', hideElement.bind(this, box12))
const box13 = document.getElementById('box-13')
box13.addEventListener('click', hideElement.bind(this, box13))
const box14 = document.getElementById('box-14')
box14.addEventListener('click', hideElement.bind(this, box14))
const box15 = document.getElementById('box-15')
box15.addEventListener('click', hideElement.bind(this, box15))
const box16 = document.getElementById('box-16')
box16.addEventListener('click', hideElement.bind(this, box16))
const box17 = document.getElementById('box-17')
box17.addEventListener('click', hideElement.bind(this, box17))
const box18 = document.getElementById('box-18')
box18.addEventListener('click', hideElement.bind(this, box18))
const box19 = document.getElementById('box-19')
box19.addEventListener('click', hideElement.bind(this, box19))
const box20 = document.getElementById('box-20')
box20.addEventListener('click', hideElement.bind(this, box20))
// const boxBtnList = document.querySelectorAll('.box')
// boxBtnList.forEach(ele => ele.addEventListener('click', hideElement.bind(this, ele)))

// function hide(a) {
//     // hideElement(a);
//     timeoutID = window.setTimeout(() => hideElement(a), 2000);
//   }
  
  function hideElement() {
    if (this.style.display === "none") {
      this.style.display = "block";
    } else {
      this.style.display = "none";
    }
  
  }








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