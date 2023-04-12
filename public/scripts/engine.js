const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let CurrentBoxClicked = {
    x: undefined,
    y: undefined,
    isOccupied: false,
};

const NumberAllTanks = {
    "tank convoy": {"number": 1, "size": 5}, //5 cases
    "big tank": {"number": 1, "size": 4}, //2*2 cases
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

function isOccupied(thisBox) {
    let result = false;
    const t = AllTanksPlayer.concat(AllTanksEnemy);
    t.map((tank) => {
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
        div.setAttribute("onclick", `handleClickBox(this)`);
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

function placeTank(size) {
    let result = [];
    const directionPossible = [];
    let randomBox;
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
    
    function addBorderBoxImpossibleToPlace(currentBox) {
        if (!isOccupied({x: currentBox.x+1, y: currentBox.y})) {
            BoxImpossibleToPlace.push({x: currentBox.x+1, y: currentBox.y});
        }
        if (!isOccupied({x: currentBox.x-1, y: currentBox.y})) {
            BoxImpossibleToPlace.push({x: currentBox.x-1, y: currentBox.y});
        }
        if (!isOccupied({x: currentBox.x, y: currentBox.y+1})) {
            BoxImpossibleToPlace.push({x: currentBox.x, y: currentBox.y+1});
        }
        if (!isOccupied({x: currentBox.x, y: currentBox.y-1})) {
            BoxImpossibleToPlace.push({x: currentBox.x+1, y: currentBox.y-1});
        }
    }

    function getSens(rdmBox) {
        for (let i = rdmBox.x; i<= rdmBox+size; i++){

        }
    }

    return result;
}

function generateTank() {
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tankPlayer = new Tank(name, placeTank(NumberAllTanks[name]["size"]), NumberAllTanks[name]["size"]);
            AllTanksPlayer.push(tankPlayer);
        }
    }
    BoxImpossibleToPlace = [];
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tankEnemy = new Tank(name, placeTank(NumberAllTanks[name]["size"]), NumberAllTanks[name]["size"]);
            AllTanksEnemy.push(tankEnemy);
        }
    }
}

function displayTankPlayer() {
    AllTanksPlayer.map((tank) => {
        tank.listBox.map((boxCurrent) => {
            const div = document.getElementById(`player:${boxCurrent.x};${boxCurrent.y}`);
            div.style.backgroundColor = "red";
        })
    })
    // debug mod
    AllTanksEnemy.map((tank) => {
        tank.listBox.map((boxCurrent) => {
            const div = document.getElementById(`enemy:${boxCurrent.x};${boxCurrent.y}`);
            div.style.backgroundColor = "blue";
        })
    })
}

function handleClickBox(element) {
    caseType = element.id.split(":")[0];
    caseCoordinates = element.id.split(":")[1];
    t = caseCoordinates.split(";")
    CurrentBoxClicked.x = +t[0];
    CurrentBoxClicked.y = +t[1];
    CurrentBoxClicked.isOccupied = isOccupied(CurrentBoxClicked);
    console.log(CurrentBoxClicked);
}

createGrid();
generateTank();
displayTankPlayer();