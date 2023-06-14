// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function () {
  const errorModal = document.querySelector("#modal");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
      mimicServerCall()
        .then(function () {
          if (heart.classList.contains("activated-heart")) {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          } else {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          }
        })
        .catch(function (error) {
          errorModal.classList.remove("hidden");
          const errorMessage = document.querySelector("#modal-message");
          errorMessage.textContent = error;
          setTimeout(function () {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
