const clean = (className, deleteClass) => $(className).removeClass(deleteClass);

const selected = (value, className) => $(value).addClass(className);

$("#boton").on("click", (e) => {
    clean(".importante", "importante");
    selected(e.currentTarget.parentElement.camposelector.value, "importante");
});