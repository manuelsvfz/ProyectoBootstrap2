import { queenMovements } from "./board.js";
let moviments
export const VerticalMovements = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let rowUp = Number(row) - 1;
    let rowDown = Number(row) + 1;
    let nextUp = true;
    let nextDown = true;

    for (let index = rowUp; index >= 0; index--) {
        if (container.children[index].children[col].dataset.queen == "true" ||
            container.children[index].children[col].dataset.arrow == "true") nextUp = false;

        if (nextUp) {
            movements++;
            queenMovements(container.children[index].children[col])

        };
    }

    for (let index = rowDown; index < container.children.length; index++) {
        if (container.children[index].children[col].dataset.queen == "true" ||
            container.children[index].children[col].dataset.arrow == "true") nextDown = false;

        if (nextDown) {
            movements++;
            queenMovements(container.children[index].children[col])
        };
    }
    return movements;
}

export const HorizontalMovements = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let colRight = Number(col) + 1;
    let colLeft = Number(col) - 1;
    let nextRight = true;
    let nextLeft = true;

    for (let index = colLeft; index >= 0; index--) {
        if (container.children[row].children[index].dataset.queen == "true" ||
            container.children[row].children[index].dataset.arrow == "true") nextLeft = false;

        if (nextLeft) {
            queenMovements(container.children[row].children[index]);
            movements++;
        }
    }

    for (let index = colRight; index < container.children.length; index++) {
        if (container.children[row].children[index].dataset.queen == "true" ||
            container.children[row].children[index].dataset.arrow == "true") nextRight = false;

        if (nextRight) {
            queenMovements(container.children[row].children[index]);
            movements++;
        }
    }
    return movements;
}

export const DiagonalMovementsTR = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let colRight = Number(col) + 1;
    let rowUp = Number(row) - 1;
    let next = true;

    try {
        while (next != false) {
            if (container.children[rowUp].children[colRight].dataset.queen == "true" ||
                container.children[rowUp].children[colRight].dataset.arrow == "true") next = false;

            if (next) {
                queenMovements(container.children[rowUp].children[colRight]);
                movements++;
            }
            colRight++;
            rowUp--;
        }
    } catch (error) {
    }
    return movements;
}

export const DiagonalMovementsTL = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let colLeft = Number(col) - 1;
    let rowUp = Number(row) - 1;
    let next = true;

    try {

        while (next != false) {
            if (container.children[rowUp].children[colLeft].dataset.queen == "true" ||
                container.children[rowUp].children[colLeft].dataset.arrow == "true") next = false;
            if (next) {
                queenMovements(container.children[rowUp].children[colLeft]);
                movements++;
            }
            colLeft--;
            rowUp--;
        }
    } catch (error) {
    }
    return movements;

}

export const DiagonalMovementsBR = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let colRight = Number(col) + 1;
    let rowDown = Number(row) + 1;
    let next = true;

    try {
        while (next != false) {
            if (container.children[rowDown].children[colRight].dataset.queen == "true" ||
                container.children[rowDown].children[colRight].dataset.arrow == "true") next = false;
            if (next) {
                queenMovements(container.children[rowDown].children[colRight]);
                movements++;
            }
            colRight++;
            rowDown++;
        }
    } catch (error) {
    }
    return movements;

}

export const DiagonalMovementsBL = (cell) => {
    let movements = 0;
    let container = document.getElementById("container");
    let row = cell.dataset.row;
    let col = cell.dataset.col;

    let colLeft = Number(col) - 1;
    let rowDown = Number(row) + 1;
    let next = true;

    try {
        while (next != false) {
            if (container.children[rowDown].children[colLeft].dataset.queen == "true" ||
                container.children[rowDown].children[colLeft].dataset.arrow == "true") next = false;
            if (next) {
                queenMovements(container.children[rowDown].children[colLeft]);
                movements++;
            }
            colLeft--;
            rowDown++;
        }
    } catch (error) {
    }
    return movements;
}

export const movementsPossible = (cell) => {

    VerticalMovements(cell);
    HorizontalMovements(cell);
    DiagonalMovementsTR(cell);
    DiagonalMovementsTL(cell);
    DiagonalMovementsBR(cell);
    DiagonalMovementsBL(cell);
}