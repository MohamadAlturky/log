$(document).ready(function () {
    $('#sign-up').click(() => {

        $('.bottom-left').animate({
            'width': '0vw',
            'height': '0vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '0vw',
            'height': '0vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'slow');
        setTimeout(function () {
            window.location.href = "..\\opening\\signUp.html";
        }, 700);
    });


    $('#log-in').click(() => {

        $('.bottom-left').animate({
            'width': '0vw',
            'height': '0vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '0vw',
            'height': '0vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'slow');
        setTimeout(function () {
            window.location.href = "..\\opening\\logIn.html";
        }, 700);
    });
});