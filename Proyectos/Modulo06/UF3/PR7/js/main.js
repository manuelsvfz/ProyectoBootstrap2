let time = 0;
let iniciar = document.getElementById("tablero");
let startGame = document.getElementById("iniciarJuego");
let isOn = false;
let pausarReanudar = document.getElementById("pausarReanudar");

iniciar.addEventListener("click", () => GenerateTable(document.getElementById("cols").value, document.getElementById("rows").value));
startGame.addEventListener("click", () => {
    isOn = true;
    Timer();
    setInterval(() => Verify(), 500)
});
pausarReanudar.addEventListener("click", (e) => {
    e.currentTarget.textContent == "Pausar" ? isOn = false : isOn = true;
    e.currentTarget.textContent == "Pausar" ? pausarReanudar.textContent = "Reanudar" : pausarReanudar.textContent = "Pausar";
});

function GenerateTable(cols, rows) {
    isOn = false;
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let index = 0; index < rows; index++) {
        let newRow = GenerateRow();
        GenerateCol(newRow, cols);
        container.appendChild(newRow);
    }
}

function GenerateRow() {
    let row = document.createElement("div");
    row.className = "row";
    return row;
}

function GenerateCol(row, amount) {
    for (let index = 0; index < amount; index++) {
        let col = document.createElement("div");
        col.addEventListener("click", () => col.classList.toggle("viva"));
        row.appendChild(col);
    }
}

function Verify() {
    if (isOn == true && document.querySelectorAll(".viva").length > 0) {
        let cols = container.children.length;
        let rows = container.children[0].children.length;
        let changeState = [];

        for (let index = 0; index < rows; index++) {
            for (let index2 = 0; index2 < cols; index2++) {
                let actualCell = container.children[index].children[index2];
                let vivas = VerifyAround(index, index2);
                if ((actualCell.classList.contains("viva") && (vivas < 2 || vivas > 3)) ||
                    (!actualCell.classList.contains("viva") && vivas >= 3)) {
                    changeState.push(actualCell);
                }
            }
        }
        changeState.forEach(cell => cell.classList.toggle("viva"));
    }
}

function VerifyAround(row, col) {
    let vivas = 0;
    for (let index = -1; index < 2; index++) {
        for (let index2 = -1; index2 < 2; index2++) {
            if (!(index == 0 && index2 == 0)) {
                let actualRow = (row + index);
                let actualCol = (col + index2);
                if (actualRow >= 0 && actualRow < container.children.length && actualCol >= 0 && actualCol < container.children[actualRow].children.length) {
                    let actualCell = container.children[actualRow].children[actualCol];
                    if (actualCell.classList.contains("viva")) vivas++;
                }
            }
        }
    }
    return vivas;
}

function Timer() {
    if (isOn == true) {
        time++;
        ShowTime();
    }
    setTimeout("Timer()", 1000);
}

function ShowTime() {
    let timer = document.getElementById("timer");
    let zero = "0";
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let newMinutes = zero.repeat(2 - minutes.toString().split("").length) + minutes;
    let newSecond = zero.repeat(2 - seconds.toString().split("").length) + seconds;
    timer.textContent = newMinutes + ":" + newSecond;
}