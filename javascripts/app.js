$(document).ready(function() {
    $('.slider').flexslider({
        animation: 'slide',
        animationSpeed: 900,
        directionNav: false
    });

    $(".articleExpand").click(function() {
        if ($('.article_hidden').is(':visible')) {
            $('.article_hidden').slideUp('slow');
        } else {
            $('.article_hidden').slideDown('slow');
        }
    });
});