$.each($("textarea"), function (indexInArray, valueOfElement) {
    $(valueOfElement).data("Longitud", $(valueOfElement).val().length);
    let newInfo = document.createElement("div");
    newInfo.textContent = "Caracteres totales: " + $(valueOfElement).data("Longitud");
    $(valueOfElement).data("Info", newInfo);
    $(valueOfElement).after($(valueOfElement).data("Info"));
});


document.addEventListener("keyup", () => $("textarea").txtarea());
