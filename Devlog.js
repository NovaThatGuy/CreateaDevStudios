// Get references to the button and dev log elements
const toggleLogButton = document.getElementById("toggleLogButton");
const devLog = document.getElementById("devLog");

// Add a click event listener to the button
toggleLogButton.addEventListener("click", function () {
    // Toggle the visibility of the dev log
    if (devLog.style.display === "none" || devLog.style.display === "") {
        devLog.style.display = "block";
        toggleLogButton.textContent = "Hide Dev Log";
    } else {
        devLog.style.display = "none";
        toggleLogButton.textContent = "Toggle Dev Log";
    }
});