//Luchador
let canvas = document.getElementById('Luchador');
let ctx = canvas.getContext('2d');

let index = 0;
let interval = 100;


setInterval(() => {
    let img = new Image();
    img.src = './img/Frame' + index + '.png';

    img.onload = function () {
        ctx.clearRect(0, 0, 400, 400);
        ctx.drawImage(img, 150, 150);
    };

    index++;
    index = index <= 6 ? index : 0;
}, interval);


//Slug

let canvas2 = document.getElementById('slug');
let ctx2 = canvas2.getContext('2d');



let anchoRecorte = 70;
let altoRecorte = 80;
let InicialX = 19;
let InicialY = 455;

let sumaAncho = 70;

let img2 = new Image();
img2.src = './img/MetalSlug.png';
img2.onload = function () {
    setInterval(() => {
        InicialX += sumaAncho;
        if (InicialX > 400) {
            InicialX = 19;
        }


        ctx2.clearRect(0, 0, 400, 400);
        ctx2.drawImage(img2, InicialX, InicialY, anchoRecorte, altoRecorte, 50, 50, 300, 300);
    }, 70);
}