$(document).ready(() => {
    $("button p").hide();
    $("button").each((i, x) => $(x).addClass(i % 2 == 0 ? "pares" : "impares"));
});

$("button a").hover(function () {
    $(this).next().fadeIn(200);
}, function () {
    $(this).next().fadeOut(200);
});
