//menu 

$(".hamburger").click(function () {
    $(this).addClass("hide-hamburger");
    $(".close-list").addClass("show-close")
   $(".wrapper").addClass("show-menu");
   $(".bg").addClass("show-bg");
   $("body").addClass("stop-scrooling");
   $(".wrapper").removeClass("hide-menu");
   $(".bg").removeClass("hide-bg");
});

$(".close-list").click(function () {
    $(this).removeClass("show-close");
    $(".hamburger").removeClass("hide-hamburger")
    $(".wrapper").addClass("hide-menu");
    $(".bg").addClass("hide-bg");
    $(".wrapper").removeClass("show-menu");
    $(".bg").removeClass("show-bg");
    $("body").removeClass("stop-scrooling");
 });


// about

$(".question").click(function () {
    var num = $(this).attr("id");
    $(".p"+num).slideToggle("slow");
    $(".img"+num).toggleClass("rotate-arrow-up");
    $(".p").not(".p"+num).slideUp("slow");
    $(this).addClass("qst-hover");
});