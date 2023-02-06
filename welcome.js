let button = document.querySelector('.enter-button');

button.addEventListener('click', function() {
    button.classList.add('fadeIn');
});

// document.documentElement.addEventListener('touchstart', function (event) {
//     if (event.touches.length > 1) {
//         event.preventDefault();
//     }
// }, false);