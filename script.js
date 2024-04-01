const slideBoard = document.querySelector(".sliding-board");
const singUp = document.querySelector(".singUp");
const singIn = document.querySelector(".singIn");

const slidingState = document.querySelector(".main");

singIn.addEventListener("click", function () {
    // Add sliding animation class
    slideBoard.classList.add("sliding");
    // Replace classes to switch between sign-up and sign-in states
    slidingState.classList.replace("sing-up", "sing-in");
    // Wait for transition to complete before redirecting
    setTimeout(function() {
        // Redirect to another page
        window.location.href = "index.html";
    }, 1000); // Adjust the timeout according to your animation duration
});

singUp.addEventListener("click", function () {
    // Remove sliding animation class
    slideBoard.classList.remove("sliding");
    // Replace classes to switch between sign-up and sign-in states
    slidingState.classList.replace("sing-in", "sing-up");
});
