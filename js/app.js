// Constants
//grab all divs (list or array of divs)
const pictures = document.querySelectorAll('.hidden-pic')
// console.log(pictures[0])
const imgList = ['./img/avoToast.png', './img/avoToast.png', './img/backyardBurg.JPG', './img/backyardBurg.JPG', './img/beans.JPG', './img/beans.JPG', './img/BLT.JPG', './img/BLT.JPG', './img/cheeseSteak.png', './img/cheeseSteak.png', './img/clubSando.JPG', './img/clubSando.JPG', './img/creamPie.JPG', './img/creamPie.JPG', './img/pretzelBun.png', './img/pretzelBun.png', './img/spicyTuna.png', './img/spicyTuna.png', './img/steakAndEggs.jpg', './img/steakAndEggs.jpg']
const instructions = document.querySelector("#instruction-button")
const hideInstructionsButton = document.querySelector("#hide-instructions")
const instructionsContainer = document.querySelector("#instructions-container")
const newGMBtn = document.getElementById('new-button')

// show instructions
const showInstructions = () => {
  instructionsContainer.classList.remove("hidden")
};

// hide instructions
const hideInstructions = () => {
  instructionsContainer.classList.add("hidden")
};
//Event listeners for instructions
instructions.addEventListener("click", showInstructions)
hideInstructionsButton.addEventListener("click", hideInstructions)

let randomList

//Randomize Images inside array
const randomize = () => {
randomList = imgList.sort(() => {
    return Math.random() - .5
  })
  // let index = 0
  console.log('scrambled')
  return randomList
}

console.log(randomize())


// Add images
const randomizePics = () => {

  pictures.forEach((element, index) => {
    const img = document.createElement("img")
    // console.log(imgList[num])
    img.src = randomList[index] 
    img.style.height = '182px'
    img.style.width = '182px'
    
    element.children[0].appendChild(img)
    // console.log(element, 'child')
  })
}

randomizePics()

//WIN CONDITION
  //two variables in global scope to keep track of cards that have been clicked on
  //instantiate these variable to be falsy values
let card1 = null
let card2 = null
let matches = 0

const strBtn = document.getElementById('start-game')
strBtn.addEventListener('click', () => {



document.querySelector("#button-grid").addEventListener('click', function(event) {
    // console.log(event.target.id.split('-'))
    let idNum = event.target.id.split('-')[1]
    // console.log(idNum)
    let hiddenPic = document.querySelector(`#pic-${idNum}`)
    // console.log(hiddenPic.children[0])
    const boxIds = []
    boxIds.push(idNum)
    // console.log(event.target)
    hideElement(event.target)
   
    //if card one variable is truthy, then the logic happens as card two
    if (card1 !== null) {
      
      card2 = hiddenPic.children[0]
     
      // console.log(card2)
      //compare the two cards to see if same
      setTimeout(() => {
      
      if (card1.src !== card2.src) {
        //if images are not the same, flip cards back over and set two card variables to be falsy
        // console.log('cards dont match', boxIds)
        // console.log(card1.parentElement.id.split('-'))
        // document.getElementById('box-' + card1.parentElement.id.split('-')[1]).style.visibility = 'visible'
        // document.getElementById('box-' + card2.parentElement.id.split('-')[1]).style.visibility = 'visible'
        document.getElementById('box-' + card1.parentElement.id.split('-')[1]).classList.remove('hidden') 
        document.getElementById('box-' + card2.parentElement.id.split('-')[1]).classList.remove('hidden')
       

        // console.log(document.getElementById('box-' + card2.parentElement.id.split('-')[1]))
        // boxA.style.visibility = 'visible'
        // boxB.style.visibility = 'visible'
        // console.log(card1.parentElement)
        // console.log(card2.parentElement)
        card1 = null
        card2 = null
        // boxA = null
        // boxB = null
        
      } else {
        console.log('its a match')
        card1 = null
        card2 = null
        matches++
        if (matches === 10) {
          console.log('YOU WIN')
        }
      }
    }, 800)

    } else {
      card1 = hiddenPic.children[0]

    }
    console.log(card1, card2, 'cards')

            //if they are the same, keep them open and increment matches one time
                //if matches === 10, game is won
    //else if neither are truthy just show the card that was clicked and store event.target for later
})
})
function hideElement(box) {
  box.classList.add('hidden')
}
const allBoxes = document.querySelectorAll('.box')
const allPicBoxes = document.querySelectorAll('.pict')
console.log(allPicBoxes[0].firstChild)
console.log(allBoxes)
// const newGMBtn = document.getElementById('new-button')



  
  // let gameBoard = document.querySelector(".game-board");
  // let rows = document.querySelectorAll(".row");
  // rows.forEach(child => {
  //     gameBoard.removeChild(child);
  // });
  // round = 1;
  // solution = [];
  // guesses = [];
  // gameLevel = 0;
  // buttons.classList.add("hidden");
  // levels.classList.remove("hidden");
  // answer.forEach(circle => {
  //     let attribute = circle.getAttribute("class")
  //     colors.forEach(color => {
  //         if (attribute.includes(`${color}`)) {
  //             circle.classList.remove(`${color}`);
  //         };
  //     });
  // });

// //TIMER
// var seconds = 60;
// let timer;
// function myFunction() {
//   if (seconds < 60) {
//     document.getElementById("timer").innerHTML = seconds;
//   }
//    //If seconds are equal or greater than 0, countdown until 1 minute has passed
//      if (seconds > 0 ) {
//          seconds--;
//      } else {
//          clearInterval(timer);
//          //Else, clear the timer and alert user that game is over
//          alert("Time's up champ");
//      }
// }
// document.getElementById("button").onclick = function() {
//     //When a button is clicked, update the timer using myFunction
//   if(!timer) {
//     timer = window.setInterval(function() {
//       myFunction();
//     }, 1000);
//   }
// } 
// document.getElementById("timer").innerHTML="1:00";