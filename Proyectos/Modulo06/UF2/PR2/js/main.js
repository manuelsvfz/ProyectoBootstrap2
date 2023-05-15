$.each($("figure figcaption"), function (indexInArray, valueOfElement) {
    $(this).hide();
    $(this).next().hide();
});

/*
$("figure img").mouseenter(function (e) {
    $(this).next().fadeIn(200);
});

$("figure img").mouseleave(function (e) {
    $(this).next().fadeOut(200);
});
*/
$("figure img").hover(function () {
    // over
    $(this).next().fadeIn(1000);
}, function () {
    // out
    $(this).next().fadeOut(1000);
}
);

$("figure img").click(function (e) {
    console.log($(this).next().next());
    $(this).next().next().css({
        display: "flex"
    });

    $("body").css({
        overflow: "hidden"
    })
});


$("figure button").click(function (e) {
    console.log($(this).parent());

    $(this).parent().css({
        display: "none"
    })

    $("body").css({
        overflow: "visible"
    })
})