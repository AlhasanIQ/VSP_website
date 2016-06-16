$(".nav .download,img.logo").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-2").offset().top
    }, 1000);
});
$(".nav .about").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-1").offset().top
    }, 1000);
});
