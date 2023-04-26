// import { ia1, ia2, ia3 } from "./ia/ia.js";

const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let CurrentBoxClicked = {
    x: undefined,
    y: undefined,
    isOccupied: false,
};

let NumberAllTanks = {
    "tank convoy": {"number": 1, "size": 5}, //5 cases
    "big tank": {"number": 2, "size": 4}, //4 cases
    "medium tank": {"number": 3, "size": 2}, //2 cases
    "small tank": {"number": 3, "size": 1}, //1 case
}

const AllTanksPlayer = []
const AllTanksEnemy = []
let BoxImpossibleToPlace = []

class Tank {
    constructor(name, listBox, size) {
        this.name = name;
        this.size = size;
        this.listBox = listBox;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function isOccupied(thisBox, grid) {
    let result = false;
    grid.map((tank) => {
        tank.listBox.map((boxCurrent) => {
            if(boxCurrent.x === thisBox.x && boxCurrent.y === thisBox.y) {
                result = true;
                return;
            }
        })
    })
    return result;
}

function createBox(x, y, t) {
    const div = document.createElement('div');
    div.className = 'box';
    div.id = `${t}:${x};${y}`;
    div.style.border = "1px solid black";
    if(t === "enemy") {
        div.setAttribute("onclick", "handleClickBox(this)");
    }
    return div;
}

function createGrid() {
    for (let y = 1; y <= 10; y++) {
        for(let x = 1; x <= 10; x++) {
            const playerDiv = createBox(x, y, "player");
            const enemyDiv = createBox(x, y, "enemy");
            playerGrid.appendChild(playerDiv);
            enemyGrid.appendChild(enemyDiv);
        }
    }
}

function placeTank(size, grid) {
    let result = [];
    const directionPossible = [];
    let randomBox;
    let randomDirection;

    function inResult(thisBox) {
        let r = false;
        result.map((currentBox) => {
            if(currentBox.x === thisBox.x && currentBox.y === thisBox.y) {
                r = true;
                return;
            }
        })
        return r;
    }

    function inBoxImpossibleToPlace(thisBox) {
        let result = false;
        BoxImpossibleToPlace.map((currentBox) => {
            if(currentBox.x === thisBox.x && currentBox.y === thisBox.y) {
                result = true;
                return;
            }
        })
        return result;
    }
    
    function addBorderBoxImpossibleToPlace() {
        function addBorderBox(currentBox, x, y) {
            if (x < 1 || x > 10 || y < 1 || y > 10 || inBoxImpossibleToPlace({x: x, y: y}) || inResult({x: x, y: y})) {
                return;
            } else {
                if (x != undefined && y != undefined) {
                    BoxImpossibleToPlace.push({x: x, y: y});
                }
                addBorderBox(currentBox, currentBox.x - 1, currentBox.y);
                addBorderBox(currentBox, currentBox.x + 1, currentBox.y);
                addBorderBox(currentBox, currentBox.x, currentBox.y - 1);
                addBorderBox(currentBox, currentBox.x, currentBox.y + 1);
                addBorderBox(currentBox, currentBox.x - 1, currentBox.y - 1);
                addBorderBox(currentBox, currentBox.x - 1, currentBox.y + 1);
                addBorderBox(currentBox, currentBox.x + 1, currentBox.y - 1);
                addBorderBox(currentBox, currentBox.x + 1, currentBox.y + 1);
            }
        }
        result.map((currentBox) => {
            addBorderBox(currentBox);
        })
    }

    function getSens(box) {
        if (box.x - size >= 1) {
            let isOk = true;
            for (let i = box.x; i >= box.x - size; i--) {
                if (isOccupied({x: i, y: box.y}, grid) || inBoxImpossibleToPlace({x: i, y: box.y})) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                directionPossible.push("left");
            }
        }
        if (box.x + size <= 10) {
            let isOk = true;
            for (let i = box.x; i <= box.x + size; i++) {
                if (isOccupied({x: i, y: box.y}, grid) || inBoxImpossibleToPlace({x: i, y: box.y})) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                directionPossible.push("right");
            }
        }
        if (box.y - size >= 1) {
            let isOk = true;
            for (let i = box.y; i > box.y - size; i--) {
                if (isOccupied({x: box.x, y: i}, grid) || inBoxImpossibleToPlace({x: box.x, y: i})) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                directionPossible.push("top");
            }
        }
        if (box.y + size <= 10) {
            let isOk = true;
            for (let i = box.y; i < box.y + size; i++) {
                if (isOccupied({x: box.x, y: i}, grid) || inBoxImpossibleToPlace({x: box.x, y: i})) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                directionPossible.push("bottom");
            }
        }
    }

    function placeBox(box, direction) {
        if (direction === "left") {
            for (let i = box.x; i > box.x - size; i--) {
                result.push({x: i, y: box.y});
            }
        }
        if (direction === "right") {
            for (let i = box.x; i < box.x + size; i++) {
                result.push({x: i, y: box.y});
            }
        }
        if (direction === "top") {
            for (let i = box.y; i > box.y - size; i--) {
                result.push({x: box.x, y: i});
            }
        }
        if (direction === "bottom") {
            for (let i = box.y; i < box.y + size; i++) {
                result.push({x: box.x, y: i});
            }
        }
    }

    do {
        randomBox = {x: getRandomInt(1, 11), y: getRandomInt(1, 11)};
        getSens(randomBox);
    } while (isOccupied(randomBox, grid) || inBoxImpossibleToPlace(randomBox) || directionPossible.length === 0);
    randomDirection = directionPossible[getRandomInt(0, directionPossible.length)];
    placeBox(randomBox, randomDirection);
    addBorderBoxImpossibleToPlace();
    return result;
}

function generateTank() {
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tankPlayer = new Tank(name, placeTank(NumberAllTanks[name]["size"], AllTanksPlayer), NumberAllTanks[name]["size"]);
            AllTanksPlayer.push(tankPlayer);
        }
    }
    BoxImpossibleToPlace = [];
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tankEnemy = new Tank(name, placeTank(NumberAllTanks[name]["size"], AllTanksEnemy), NumberAllTanks[name]["size"]);
            AllTanksEnemy.push(tankEnemy);
        }
    }
}

function displayTankGrid(grid) {
    let t;
    let color;
    if (grid === "player") { 
        t = AllTanksPlayer;
        color = "blue"
    } else {
        t = AllTanksEnemy;
        color = "red"
    }
    t.map((tank) => {
        tank.listBox.map((boxCurrent) => {
            const div = document.getElementById(`${grid}:${boxCurrent.x};${boxCurrent.y}`);
            div.style.backgroundColor = color;
        })
    })
}

function handleClickBox(element) {
    caseType = element.id.split(":")[0];
    caseCoordinates = element.id.split(":")[1];
    t = caseCoordinates.split(";")
    CurrentBoxClicked.x = +t[0];
    CurrentBoxClicked.y = +t[1];
    CurrentBoxClicked.isOccupied = isOccupied(CurrentBoxClicked, AllTanksPlayer.concat(AllTanksEnemy));
    console.log(CurrentBoxClicked);
}

function hit(box) {
    const div = document.getElementById(box);
    let content = document.createTextNode("X");
    div.appendChild(content);
}

function engine() {
    generateTank();
    // debug mode
    const debugMode = true;
    if (debugMode){
        function displayBoxImpossibleToPlace(grid) {
            BoxImpossibleToPlace.map((boxCurrent) => {
                hit(`${grid}:${boxCurrent.x};${boxCurrent.y}`)
            })
        }
        displayTankGrid("enemy"); 
        displayBoxImpossibleToPlace("enemy");
    }
    displayTankGrid("player");
    let difficultyIA = document.cookie.split('; ').find(cookie => cookie.startsWith('difficultyIA')).split('=')[1];
    let whoPlay;
    Math.random() > 0.5 ? whoPlay = "player" : whoPlay = "enemy";
    let winner;
    // while (true) {

    // }
}

export { engine, createGrid, handleClickBox };