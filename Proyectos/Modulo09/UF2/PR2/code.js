//EX1
const patata = () => {

    let canvas = document.getElementById("c5a");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;
    let newWidth = width / 20;
    let newHeight = height / 20;

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(i * newWidth, j * newHeight, newWidth, newHeight);
        }
    }



    //EX2

    canvas = document.getElementById("c5b");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    newWidth = width / 20;
    newHeight = height / 20;

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let r = Math.floor(Math.random() * 256);
            ctx.fillStyle = "rgb(" + r + "," + r + "," + r + ")";
            ctx.fillRect(i * newWidth, j * newHeight, newWidth, newHeight);
        }
    }


    //EX3

    canvas = document.getElementById("c5c");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    newWidth = width / 20;
    newHeight = height;

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let r = Math.floor(Math.random() * 256);
            ctx.fillStyle = "rgb(" + r + "," + r + "," + r + ")";
            ctx.fillRect(i * newWidth, 0, newWidth, newHeight);
        }
    }


    //EX4

    canvas = document.getElementById("c5d");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    newWidth = width / 20;
    newHeight = height;

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(i * newWidth, 0, newWidth, newHeight);
        }
    }

    //EX5

    canvas = document.getElementById("c5e");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    newWidth = ((width - 19 * 10) / 20);
    newHeight = ((height - 19 * 10) / 20);

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.lineWidth = 5;
            ctx.strokeRect(i * (newWidth + 10), j * (newHeight + 10), newWidth, newHeight);
        }
    }
}

setInterval(patata, 1000);