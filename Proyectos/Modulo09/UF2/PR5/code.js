const radianes = (grados) => grados * Math.PI / 180;

// Cuadricula


const generateCuadricula = (canvas, divisiones, mostrar) => {
    let context = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    let anchoDivision = width / divisiones;
    let altoDivision = height / divisiones;

    context.lineWidth = 0.5;

    context.beginPath();

    for (let i = 0; i <= divisiones; i++) {
        context.moveTo(0, i * altoDivision);
        context.lineTo(width, i * altoDivision);
    }
    context.closePath();
    context.stroke();

    context.beginPath();
    for (let i = 0; i <= divisiones; i++) {
        context.moveTo(i * anchoDivision, 0);
        context.lineTo(i * anchoDivision, height);
    }
    context.closePath();
    context.stroke();

    if (mostrar) {
        context.strokeStyle = 'red';

        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(0, height / 2);
        context.lineTo(width, height / 2);
        context.moveTo(width / 2, 0);
        context.lineTo(width / 2, height);
        context.closePath();
        context.stroke();
    }

}


//c13b

let canvas = document.getElementById('c13b');
let context = canvas.getContext('2d');

generateCuadricula(canvas, 10, true);

context.beginPath();



context.arc(175, 175, 50, radianes(180), radianes(270));

context.lineTo(275, 125);

context.lineTo(275, 275);

context.arc(225, 225, 50, radianes(0), radianes(90));

context.lineTo(125, 275);

context.lineTo(125, 175);


context.closePath();

context.fill();


//C13c

canvas = document.getElementById('c13c');
context = canvas.getContext('2d');


context.arc(200, 200, 150, radianes(180), radianes(90));

context.arc(200, 200, 75, radianes(90), radianes(180))

context.fill();
context.closePath();

context.beginPath();

context.arc(200, 200, 30, radianes(0), radianes(360));

context.fillStyle = 'red';

context.fill();


//C14
canvas = document.getElementById('c14');
context = canvas.getContext('2d');

context.beginPath();

context.arc(40, 40, 20, radianes(180), radianes(270));
context.moveTo(40, 20);
context.lineTo(100, 20);
context.arc(100, 40, 20, radianes(270), radianes(360));
context.moveTo(120, 40);
context.lineTo(120, 100);
context.arc(100, 100, 20, radianes(0), radianes(90));
context.moveTo(100, 120);
context.lineTo(40, 120);
context.arc(40, 100, 20, radianes(90), radianes(180));
context.moveTo(20, 100);
context.lineTo(20, 40);
context.closePath();
context.stroke();


//C16a

canvas = document.getElementById('c16a');
context = canvas.getContext('2d');

context.fillStyle = 'rgb(138, 199, 199)';

context.beginPath();
context.moveTo(400, 200);
context.lineTo(0, 200);
context.lineTo(0, 50);
context.bezierCurveTo(100, 10, 120, 10, 150, 50);
context.bezierCurveTo(180, 20, 200, 20, 200, 30);
context.bezierCurveTo(220, 15, 300, 30, 300, 70);
context.bezierCurveTo(350, 30, 400, 30, 400, 60);
context.lineTo(400, 200);
context.closePath();
context.fill();


context.stroke();

//C8

canvas = document.getElementById('c8');
context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 200);

let escalones = 10;
let medidas = 200 / escalones;

let actualAnchure = 0;
let actualAlture = 200;
for (let i = 0; i < escalones; i++) {
    actualAnchure += medidas;
    context.lineTo(actualAnchure, actualAlture);
    actualAlture += medidas;
    context.lineTo(actualAnchure, actualAlture);
}

context.lineTo(0, 400);
context.closePath();
context.stroke();




canvas = document.getElementById('cuadricula');


let divisiones = 10;
let mostrar = true;



generateCuadricula(canvas, divisiones, !mostrar);
context = canvas.getContext('2d');

context.beginPath();

context.arc(200, 200, 100, radianes(0), radianes(360));

context.lineWidth = 3;

context.fillStyle = 'red';
context.strokeStyle = 'red';

context.stroke();
context.closePath();



