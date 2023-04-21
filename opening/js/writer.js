

$(document).ready(function () {
    // type a text string in the UI.
    function typeEffect() {
        var effect = new Typed(".writable-element", {
            strings: [' ', '✋Welcome to our Website✋',
                'take 🛒 give 💰', '🔥Lets Start👇'],
            loop: false,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 2500,
            cursorChar: ''
        })
    }
    typeEffect();
});