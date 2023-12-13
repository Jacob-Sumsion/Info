/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the link element by its ID
    var bruhLink = document.getElementById('bruhLink');

    // Check if the element exists to avoid errors
    if (bruhLink) {
        // Create a new audio object
        var bruhSound = new Audio('assets/bruh-sound-effect-2-37927.mp3');

        // Add a click event listener to the link
        bruhLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link action
            bruhSound.play(); // Play the sound
        });
    }
});
