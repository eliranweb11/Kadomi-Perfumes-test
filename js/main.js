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

    $('#footer-menu .menu-item a').click(function () {
        var question = $(this).attr('data-question');
        goToQuestion(question);
    });

    function goToQuestion(question) {
        $('.question-item').hide();
        $('.question-item[data-question="' + question + '"]').show();
    }

    //menu - slideout
    $('.slideout-menu-wrp ul li a').click(function () {
        var question = $(this).parents('.menu-item').attr('data-category');
        var answer = $(this).attr('data-answer');
        console.log('question = ' + question + ' answer = ' + answer);

        var nextQuestion = parseInt(question) + 1;
        goToQuestion(nextQuestion);
    });
    $('.slideout-menu-wrp ul li a').click(function () {
        var question = $(this).attr('data-category');
        goToQuestion(question);
        $('.slideout-menu ul.slideout-menu-category').hide();
    });
    //arrow back
    $('.menu-item-icon_back').click(function () {
        $('.slideout-menu ul.slideout-menu-category').show();
        $('.menu-item').hide();
        
    });
    function goToQuestion(question) {
        $('.menu-item').hide();
        $('.menu-item[data-category="' + question + '"]').show();
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
        toggleButton.classList.toggle('btn-open');
    });

    // Close Menu
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('is-open');
        toggleButton.classList.remove('btn-open');
    });
});