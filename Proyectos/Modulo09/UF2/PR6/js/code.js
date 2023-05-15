window.onload = function () {
    let contador = 0;
    let contadorDiv = document.getElementById("contador");
    let video = document.getElementById("videoOrigin");
    let videoFinal = document.getElementById("videoFinal");
    let play = document.getElementById("play");
    let pause = document.getElementById("pause");

    contadorDiv.innerHTML = "Se ha pausado " + contador + " veces.";

    video.addEventListener("pause", function () {
        contador++;
        contadorDiv.innerHTML = "Se ha pausado " + contador + " veces.";
    });

    play.addEventListener("click", function () {
        console.log("play");
        videoFinal.play();
    });

    pause.addEventListener("click", function () {
        console.log("pause");
        videoFinal.pause();
    });
};

