let canvas = document.getElementById('c7a');
let ctx = canvas.getContext('2d');


let width = canvas.width;
let height = canvas.height;

let widthPoints = width / 8;
let heightPoints = height / 8;

for (let x = 0; x <= 100; x++) {
    ctx.beginPath();
    ctx.moveTo(x * widthPoints, 400);
    ctx.lineTo(400, 400 - (x * heightPoints));
    ctx.closePath();
    ctx.stroke();
}



canvas = document.getElementById('c7b');
ctx = canvas.getContext('2d');


width = canvas.width / 2;
height = canvas.height / 2;
let points = 50;
widthPoints = width / points;
heightPoints = height / points;

for (let x = 0; x <= points; x++) {
    ctx.beginPath();
    ctx.moveTo(((x) * widthPoints) + width, 400);
    ctx.lineTo(400, 400 - (x * heightPoints));
    ctx.closePath();
    ctx.stroke();
}

for (let x = 0; x <= points; x++) {
    ctx.beginPath();
    ctx.moveTo((200 - (x) * widthPoints), 400);
    ctx.lineTo(0, 400 - (x * heightPoints));
    ctx.closePath();
    ctx.stroke();
}

for (let x = 0; x <= points; x++) {
    ctx.beginPath();
    ctx.moveTo((200 - (x) * widthPoints), 0);
    ctx.lineTo(0, (x * heightPoints));
    ctx.closePath();
    ctx.stroke();
}

for (let x = 0; x <= points; x++) {
    ctx.beginPath();
    ctx.moveTo(((x) * widthPoints) + width, 0);
    ctx.lineTo(400, (x * heightPoints));
    ctx.closePath();
    ctx.stroke();
}



canvas = document.getElementById('c7c');
ctx = canvas.getContext('2d');


width = canvas.width;
height = canvas.height;

widthPoints = width / 100;





const draw = (positionX, positionY) => {

    let canvas = document.getElementById('c7c');
    let ctx = canvas.getContext('2d');


    let width = canvas.width;
    let height = canvas.height;

    let points = 100;

    let widthPoints = width / points;
    let heightPoints = height / points;

    // positionX = width - positionX;
    // positionY = height - positionY;
    ctx.clearRect(0, 0, width, height);

    for (let x = 0; x <= points; x++) {
        ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        ctx.lineTo(widthPoints * x, 0);
        ctx.closePath();
        ctx.stroke();
    }

    for (let x = 0; x <= points; x++) {
        ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        ctx.lineTo(widthPoints * x, height);
        ctx.closePath();
        ctx.stroke();
    }

    for (let x = 0; x <= points; x++) {
        ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        ctx.lineTo(0, heightPoints * x);
        ctx.closePath();
        ctx.stroke();
    }

    for (let x = 0; x <= points; x++) {
        ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        ctx.lineTo(width, heightPoints * x);
        ctx.closePath();
        ctx.stroke();
    }

}



canvas.addEventListener('mousemove', function (e) {
    draw(e.offsetX, e.offsetY);
});

