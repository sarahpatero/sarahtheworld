window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;  // Get the vertical scroll position
    const parallaxContainer = document.querySelector('.parallax-container-1');

    // Calculate the new height as a percentage of the scroll position
    let newHeight = 50 + scrollPosition * 0.2;  // Adjust multiplier for effect

    // Set boundaries: don't let the height shrink below 30vh or grow above 100vh
    if (newHeight < 30) {
        newHeight = 30;  // Minimum height (prevents it from shrinking too small)
    }
    if (newHeight > 100) {
        newHeight = 100;  // Maximum height (prevents it from growing too large)
    }

    // Set the new height of the parallax container
    parallaxContainer.style.height = newHeight + 'vh';
let scrollEffect = scrollPosition * 0.1;
    parallaxContainer.style.backgroundPosition = 'center ' + (50 - scrollEffect) + '%';
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const parallaxContainer = document.querySelector('.parallax-container-2');

    // Calculate the new height as a percentage of the scroll position
    let newHeight = 50 + scrollPosition * 0.03; // Reduced multiplier for a more subtle height change

    // Set boundaries: prevent the height from shrinking below 40vh or growing above 90vh
    if (newHeight < 40) {
        newHeight = 40; // Minimum height
    }
    if (newHeight > 90) {
        newHeight = 90; // Maximum height
    }

    // Set the new height of the parallax container
    parallaxContainer.style.height = newHeight + 'vh';

    // Adjust the background position for the parallax effect
    let scrollEffect = scrollPosition * 0.05; // Reduced multiplier for a more subtle scroll effect
    parallaxContainer.style.backgroundPosition = `center ${(50 - scrollEffect)}%`;
});


