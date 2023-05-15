canvas = document.getElementById('c9b');
ctx = canvas.getContext('2d');

points = 50;

width = canvas.width;
height = canvas.height;

heightPoints = height / points;


for (let x = 0; x <= points; x++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width / 2, heightPoints * x);
    ctx.lineTo(width, height / 2);
    ctx.closePath();
    ctx.stroke();
}


canvas = document.getElementById('c9a');
ctx = canvas.getContext('2d');

points = 30;

width = canvas.width;
height = canvas.height;

heightPoints = height / points;
widthPoints = width / points;
//Punto izquierda para arriba
for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(0, height / 2);
    ctx.lineTo((widthPoints * index) / 2, 0);
    ctx.closePath();
    ctx.stroke();
}

//Punto arriba para izquierda
for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(0, (heightPoints * index) / 2);
    ctx.closePath();
    ctx.stroke();
}

//Punto derecha para arriba
for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width / 2 + (widthPoints * index), 0);
    ctx.closePath();
    ctx.stroke();
}
//Punto arriba para derecha

for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width, heightPoints * index / 2);
    ctx.closePath();
    ctx.stroke();
}

//Punto izquierda para abajo
for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(0, height / 2);
    ctx.lineTo((widthPoints * index) / 2, height);
    ctx.closePath();
    ctx.stroke();
}
//Punto abajo para izquierda

for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width / 2, height);
    ctx.lineTo(0, height - (heightPoints * index) / 2);
    ctx.closePath();
    ctx.stroke();
}

//Punto derecha para abajo
for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width, height / 2);
    ctx.lineTo((width / 2) + (widthPoints * index), height);
    ctx.closePath();
    ctx.stroke();
}

//Punto abajo para derecha

for (let index = 0; index <= points; index++) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width, height - (heightPoints * index) / 2);
    ctx.closePath();
    ctx.stroke();
}