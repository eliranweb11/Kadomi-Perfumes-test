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