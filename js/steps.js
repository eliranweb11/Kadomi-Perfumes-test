$(document).ready(function () {
    $(".question-item .btn-option").click(function () {
        var question = $(this).parents('.question-item');
        var data = $(question).data();
        var answer = $(this).val();

        console.log(data);

        $('input[name="form[' + data.target + ']"]').val(answer);
    });

    try {
        (function ($) {})(jQuery);
    } catch (e) {
        console.error("An error has occurred: " + e.stack);
    }
    try {
        $(function () {
            $('.qu-steep01>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep01').removeClass('steeps_active');
                $('.qu-steep02').addClass('steeps_active')
            });
            $('.qu-steep02>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep02').removeClass('steeps_active');
                $('.qu-steep03').addClass('steeps_active')
            });
            $('.qu-steep03>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep03').removeClass('steeps_active');
                $('.qu-steep04').addClass('steeps_active')
            });
            $('.qu-steep04>.questions__wrp_buttons .button').click(function () {
                
                $('.qu-steep04').removeClass('steeps_active');
                $('.qu-steep06').addClass('steeps_active');
                $('.wrp-form').css('display', 'block');
                $('.Main').css('padding-top', '0');
                $('.qu-background').hide();
                $('.question-content').hide();
            });
            $('.qu-steep05').click(function () {
                $('.qu-steep05').removeClass('steeps_active');
                $('.qu-steep01').addClass('steeps_active')
            });

            $('.qu-steep-01>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep-01').removeClass('steeps_active');
                $('.qu-steep-02').addClass('steeps_active')
            });
            $('.qu-steep-02>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep-02').removeClass('steeps_active');
                $('.qu-steep-03').addClass('steeps_active')
            });
            $('.qu-steep-03>.questions__wrp_buttons .button').click(function () {
                $('.qu-steep-03').removeClass('steeps_active');
                $('.qu-steep-04').addClass('steeps_active')
            });
            $('.qu-steep-04>.questions__wrp_buttons .button').click(function () {
                
                $('.qu-steep-04').removeClass('steeps_active');
                $('.wrp-form2').css('display', 'block');
                $('.Main').css('padding-top', '0');
                $('.qu-background').hide();
                $('.question-content2').hide();
            });
            $('.qu-steep-05').click(function () {
                $('.qu-steep-05').removeClass('steeps_active');
                $('.qu-steep-01').addClass('steeps_active')
            });
        });

    } catch (e) {
        console.error("An error has occurred: " + e.stack);
    }
});