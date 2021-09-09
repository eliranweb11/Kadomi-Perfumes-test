$(document).ready(function(){
    //Add active class to main menu
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    //Read More' : 'Read Less
    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(this).next('.content').slideToggle(200);
    });

    //questions
    $('.answer-item').click(function () {
        var question = $(this).parents('.question-item').attr('data-question');
        var answer = $(this).attr('data-answer');
        console.log('question = ' + question + ' answer = ' + answer);

        var nextQuestion = parseInt(question) + 1;
        goToQuestion(nextQuestion);
    });

    function goToQuestion(question) {
        $('.question-item').hide();
        $('.question-item[data-question="' + question + '"]').show();
    }


});

//filter
document.addEventListener('DOMContentLoaded', function() {
    var menu, toggleButton, closeButton;

    // Set Elements
    menu = document.getElementById('slideout-menu');
    toggleButton = document.getElementById('slideout-toggle');
    closeButton = document.getElementById('slideout-close');

    // Toggle Menu
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('is-open');
    });

    // Close Menu
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('is-open');
    });
});