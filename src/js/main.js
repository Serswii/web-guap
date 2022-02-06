$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#top_up').fadeIn();
        } else {
            $('#top_up').fadeOut();
        }
    });
    $('#top_up').click(function () {
        $('body,html').animate({scrollTop: 0}, 700);
    });
    $("#barDropdown").click(function(){
        $("#myDropdown").fadeToggle();
    });
});
// barDropdown.addEventListener("click", dropdown);
// function dropdown()
// {
//     $('myDropdown').click(function() {
//         $(this).slideUp({
//             duration: 'slow',
//             easing: 'linear'
//         });
//     });
// }