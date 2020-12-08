// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

document.addEventListener('click', event => {
 if(event.target.matches("span.like-glyph"))
    updateLike(event)
})
 
function updateLike(event) {
  let heart = event.target
  mimicServerCall()
  .then(function(serverMessage) {
    document.querySelector("div#modal").className = "hidden";
    document.querySelector("div#modal p").innerText = "";
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(serverError) {
    let divElement = document.querySelector("div#modal");
    divElement.className = "";
    divElement.querySelector('p').innerText = serverError
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
