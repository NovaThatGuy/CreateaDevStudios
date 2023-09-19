const gifOverlay = document.querySelector(".gif-overlay");

gifOverlay.addEventListener("load", () => {
    let isReversed = false;

    function reverseGif() {
        if (!isReversed) {
            gifOverlay.style.animationDirection = "reverse";
            isReversed = true;
        } else {
            gifOverlay.style.animationDirection = "normal";
            isReversed = false;
        }
    }

    gifOverlay.addEventListener("animationiteration", reverseGif);
});
