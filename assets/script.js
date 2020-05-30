$('.scrollSaja').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 750);
    return false;
});

$(function () {
    $(".toggle").on("click", function () {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("span").html("<i class='fa fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("span").html("<i class='fa fa-times'></i>");
        }
    });
});