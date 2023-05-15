import { DiagonalMovementsTL, DiagonalMovementsTR, DiagonalMovementsBR, DiagonalMovementsBL, HorizontalMovements, movementsPossible, VerticalMovements } from './movements.js';
let container = document.getElementById("container");
export let turno = "blancas";
export let isFinish = false;
export let throwArrow = false;
let actualCell = null;
const images = [{ turn: "negras", img: '../img/corona(5).png' }, { turn: "blancas", img: '../img/corona(4).png' }];

const cleanBoard = () => {
    for (let index = 0; index < container.children.length; index++) {
        for (let index2 = 0; index2 < container.children[index].children.length; index2++) {
            if (container.children[index].children[index2].classList.contains("possible")) {
                container.children[index].children[index2].classList.remove("possible");
            }
            if (container.children[index].children[index2].classList.contains("possibleArrow")) {
                container.children[index].children[index2].classList.remove("possibleArrow");
            }
        }
    }
}

const cleanGreenMovements = () => {
    for (let index = 0; index < container.children.length; index++) {
        for (let index2 = 0; index2 < container.children[index].children.length; index2++) {
            container.children[index].children[index2].removeEventListener("click", greenCellsFunc);
        }
    }
}

const cleanBlueMovements = () => {
    for (let index = 0; index < container.children.length; index++) {
        for (let index2 = 0; index2 < container.children[index].children.length; index2++) {
            container.children[index].children[index2].removeEventListener("click", blueCellsFunc);
        }
    }
}

const cleanSelected = () => {
    let selected = document.querySelectorAll("[data-selected='true']");
    if (selected != null) selected.forEach((x) => x.dataset.selected = false);
}

const checkMovements = (color) => {
    let damas = Array.from(document.querySelectorAll("[data-turn='" + color + "']"));
    damas = damas.map((x) => x.parentElement);
    let moviments = 0;
    for (let index = 0; index < damas.length; index++) {
        console.log(Number(VerticalMovements(damas[index])));
        moviments += Number(VerticalMovements(damas[index]));
        moviments += HorizontalMovements(damas[index]);
        moviments += DiagonalMovementsTR(damas[index]);
        moviments += DiagonalMovementsTL(damas[index]);
        moviments += DiagonalMovementsBR(damas[index]);
        moviments += DiagonalMovementsBL(damas[index]);
    }
    return Number(moviments);
}


const changeTurn = () => {
    turno = turno == "blancas" ? "negras" : "blancas";
}

const selectQueen = (e) => {
    let cell = e.currentTarget;
    if (!isFinish) {
        if (throwArrow == false) {
            if (cell.dataset.queen == "true" && cell.lastElementChild.dataset.turn == turno) {
                cleanGreenMovements();
                cleanBlueMovements();
                cleanSelected();
                cleanBoard();
                cell.dataset.selected = true;
                movementsPossible(cell);
            } else {
                cleanBoard();
            }
        } else {
            movementsPossible(actualCell);
        }
    }
}

const blueCellsFunc = (cell) => {
    cell = cell.currentTarget;
    cell.classList.add("arrow");
    cell.dataset.arrow = "true";
    throwArrow = false;
    actualCell = null;

    cleanBoard();
    console.log(checkMovements("blancas"));
    console.log(checkMovements("negras"));
    if (checkMovements("blancas") == 0) {
        isFinish = true;
        alert("El juego ha terminado, han perdido las blancas.");
    } else if (checkMovements("negras") == 0) {
        isFinish = true;
        alert("El juego ha terminado, han perdido las negras.");
    } else {
        changeTurn();
    }
    cleanGreenMovements();
    cleanBlueMovements();
    cleanSelected();
}

const greenCellsFunc = (cell) => {
    cell = cell.currentTarget;
    let oldCell = document.querySelector("[data-selected='true']");
    oldCell.dataset.queen = "false";
    oldCell.dataset.selected = "false";
    let queen = oldCell.lastElementChild;
    queen.remove();

    cell.appendChild(queen);
    cell.dataset.queen = "true";
    cell.addEventListener("click", selectQueen);
    throwArrow = true;
    actualCell = cell;
    cleanGreenMovements();
    cleanBlueMovements();
    cleanBoard();
}

export const queenMovements = (cell) => {
    if (throwArrow == false) {
        cell.classList.toggle("possible");
        cell.addEventListener("click", greenCellsFunc);
    } else {
        cell.classList.add("possibleArrow");
        cell.addEventListener("click", blueCellsFunc)
    }
}

const GenerateCol = (row, amount, rowCount) => {
    for (let index = 0; index < amount; index++) {
        let col = document.createElement("div");
        if ((rowCount + index) % 2 == 0) col.className = "other";
        col.dataset.row = rowCount;
        col.dataset.col = index;
        col.dataset.selected = false;
        col.dataset.queen = false;
        col.dataset.arrow = false;
        row.appendChild(col);
        col.addEventListener("click", selectQueen);
    }
}

const GenerateRow = () => {
    let row = document.createElement("div");
    row.className = "row";
    return row;
}

const Positions = (...params) => {
    let container = document.getElementById("container");
    let rows = container.children;
    let cols = rows[0].children;
    for (let index = 0; index < params.length - 1; index++) {
        let newAmazona = document.createElement("img");
        newAmazona.src = params[params.length - 1].img;
        newAmazona.dataset.turn = params[params.length - 1].turn;
        let actualCell = container.children[params[index][0]].children[params[index][1]];
        actualCell.dataset.queen = true;
        actualCell.appendChild(newAmazona);
    }
}

export const GenerateTable = (cols, rows) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let index = 0; index < rows; index++) {
        let newRow = GenerateRow();
        GenerateCol(newRow, cols, index);
        container.appendChild(newRow);
    }
    Positions([3, 0], [0, 3], [0, 6], [3, 9], images[0]);
    Positions([6, 0], [9, 3], [9, 6], [6, 9], images[1]);
}