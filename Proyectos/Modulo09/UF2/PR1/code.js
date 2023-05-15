//Ex1
let canva = document.getElementById("c1a");

let ctx = canva.getContext("2d");

ctx.fillStyle = "black";

ctx.fillRect(0, 0, 300, 200);

ctx.fillStyle = "red";

ctx.fillRect(10, 10, 210, 150);

ctx.fillStyle = "blue";

ctx.fillRect(150, 230, 190, 130);


//Ex2
canva = document.getElementById("c1b");

ctx = canva.getContext("2d");

ctx.fillStyle = "blue";

ctx.fillRect(10, 10, 200, 200);

ctx.fillStyle = "rgba(255, 255, 0, 0.75)";

ctx.fillRect(100, 100, 180, 180);

//Ex3

canva = document.getElementById("c1c");

ctx = canva.getContext("2d");

ctx.fillStyle = "cyan";
for (let index = 0; index < 11; index++) {
    ctx.fillRect(index * 20, index * 20, 15, 15);
}

ctx.fillStyle = "magenta";

for (let index = 0; index < 11; index++) {
    ctx.strokeStyle = 'rgba(128, 0, 128, 0.750)';
    ctx.lineWidth = 5;
    ctx.strokeRect(index * 20, 200 - (index * 20), 15, 15);
}


//Ex4

canva = document.getElementById("c1d");

ctx = canva.getContext("2d");

let buttonClear = document.getElementById("borrado");

ctx.fillStyle = "red";
for (let index = 0; index < 11; index++) {
    ctx.fillRect(index * 20, index * 20, 15, 15);
}

ctx.fillStyle = "green";

for (let index = 0; index < 11; index++) {
    ctx.strokeStyle = 'rgb(255,255,0,0.5)';
    ctx.lineWidth = 5;
    ctx.strokeRect(index * 20, 200 - (index * 20), 15, 15);
}


buttonClear.addEventListener("click", function () {
    ctx.clearRect(75, 75, 63, 63);
});