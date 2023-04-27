import { IsOccupied, getRandomInt } from "./tools"

let NumberAllTanks = {
    "tank convoy": {"number": 1, "size": 5}, //5 cases
    "big tank": {"number": 2, "size": 4}, //4 cases
    "medium tank": {"number": 3, "size": 2}, //2 cases
    "small tank": {"number": 3, "size": 1}, //1 case
}

let AllTanksEnemy = []
let AllTanksPlayer = []
let BoxImpossibleToPlace = []

class Tank {
    constructor(name, listBox, size) {
        this.name = name;
        this.size = size;
        this.listBox = listBox;
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
                if (IsOccupied({x: i, y: box.y}, grid) || inBoxImpossibleToPlace({x: i, y: box.y})) {
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
                if (IsOccupied({x: i, y: box.y}, grid) || inBoxImpossibleToPlace({x: i, y: box.y})) {
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
                if (IsOccupied({x: box.x, y: i}, grid) || inBoxImpossibleToPlace({x: box.x, y: i})) {
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
                if (IsOccupied({x: box.x, y: i}, grid) || inBoxImpossibleToPlace({x: box.x, y: i})) {
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
    } while (IsOccupied(randomBox, grid) || inBoxImpossibleToPlace(randomBox) || directionPossible.length === 0);
    randomDirection = directionPossible[getRandomInt(0, directionPossible.length)];
    placeBox(randomBox, randomDirection);
    addBorderBoxImpossibleToPlace();
    return result;
}

function GenerateTank() {
    if (AllTanksEnemy.length > 0 || AllTanksPlayer.length > 0) {
        return
    }
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

export { GenerateTank, AllTanksEnemy, AllTanksPlayer };