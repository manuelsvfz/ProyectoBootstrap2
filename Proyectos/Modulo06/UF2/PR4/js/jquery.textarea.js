
const insertInfo = (element) => $(element).data("Info").textContent = "Caracteres totales: " + $(element).data("Longitud");


const updateData = (elements) => {
    $.each(elements, function (indexInArray, valueOfElement) {
        $(valueOfElement).data("Longitud", $(valueOfElement).val().length);
    });
}

jQuery.fn.txtarea = function () {
    updateData(this)
    $.each(this, function (indexInArray, valueOfElement) {
        insertInfo($(valueOfElement));
    });
}