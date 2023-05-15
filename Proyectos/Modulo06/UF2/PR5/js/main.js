let cancelar = document.getElementById("cancelar");
let mostrar = document.getElementById("mostrar");

$(document).InitDialog({
    'background': '#FF000080',
    'scroll': false
});
$(".datosUsuario").CreateDialog();

cancelar.addEventListener("click", () => {
    $(".datosUsuario").HideDialog();
});


mostrar.addEventListener("click", () => {
    $(".datosUsuario").ShowDialog();
});

