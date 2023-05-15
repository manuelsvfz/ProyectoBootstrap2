jQuery.fn.InitDialog = function (config) {
    DialogConfig = {
        'background': 'lightgray',
        'scroll': true
    }
    jQuery.extend(DialogConfig, config);
}

jQuery.fn.CreateDialog = function () {
    let backgroundModal = $("<div class='backgroundModal'></div>");
    let newModal = $("<div class='modal'></div>");
    $(newModal).append(this);
    $(backgroundModal).append(newModal);
    $('body').append(backgroundModal);

    ShowDialog = (e) => {
        $(e)[0].parentElement.parentElement.style.display = "flex";
        $(e)[0].parentElement.parentElement.style.background = DialogConfig.background;
        if (DialogConfig.scroll) {
            $("body").addClass("hideScroll");
        }
    }

    HideDialog = (e) => {
        $(e)[0].parentElement.parentElement.style.display = "none";
        $("body").removeClass("hideScroll");
    }
}

jQuery.fn.ShowDialog = function () {
    ShowDialog(this);
}


jQuery.fn.HideDialog = function () {
    HideDialog(this);
}