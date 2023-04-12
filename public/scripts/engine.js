const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let CurrentCaseClicked = {
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
let CaseImpossibleToPlace = []

class Tank {
    constructor(name, listCases, size) {
        this.name = name;
        this.size = size;
        this.listCases = listCases;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function isOccupied(x, y) {
    let result = false;
    const t = AllTanksPlayer.concat(AllTanksEnemy);
    t.map((tank) => {
        tank.listCases.map((caseCurrent) => {
            if(caseCurrent.x === x && caseCurrent.y === y) {
                result = true;
                return;
            }
        })
    })
    return result;
}

function createCase(x, y, t) {
    const div = document.createElement('div');
    div.className = 'case';
    div.id = `${t}:${x};${y}`;
    div.style.border = "1px solid black";
    if(t === "enemy") {
        div.setAttribute("onclick", `handleClickCase(this)`);
    }
    return div;
}

function createGrid() {
    for (let y = 1; y <= 10; y++) {
        for(let x = 1; x <= 10; x++) {
            const playerDiv = createCase(x, y, "player");
            const enemyDiv = createCase(x, y, "enemy");
            playerGrid.appendChild(playerDiv);
            enemyGrid.appendChild(enemyDiv);
        }
    }
}

function placeTank(size) {
    let result = [];
    let sens;
    let randomCase;
    function inCaseImpossibleToPlace() {
        let result = false;
        CaseImpossibleToPlace.map((currentCase) => {
            if(currentCase.x === randomCase.x && currentCase.y === randomCase.y) {
                result = true;
                return;
            }
        })
        return result;
    }
    function isPossible() {
        if (inCaseImpossibleToPlace()) {
            return false;
        } else {
            if (sens == "horizontal") {
                if (randomCase.x + size > 10 || randomCase.x - size < 1) {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (randomCase.y + size > 10 || randomCase.y - size < 1) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
    function addBorderCaseImpossibleToPlace(currentCase) {
        if (!isOccupied(currentCase.x+1, currentCase.y)) {
            CaseImpossibleToPlace.push({x: currentCase.x+1, y: currentCase.y});
        }
        if (!isOccupied(currentCase.x-1, currentCase.y)) {
            CaseImpossibleToPlace.push({x: currentCase.x-1, y: currentCase.y});
        }
        if (!isOccupied(currentCase.x, currentCase.y+1)) {
            CaseImpossibleToPlace.push({x: currentCase.x, y: currentCase.y+1});
        }
        if (!isOccupied(currentCase.x, currentCase.y-1)) {
            CaseImpossibleToPlace.push({x: currentCase.x+1, y: currentCase.y-1});
        }
    }
    do {
        Math.random() > 0.5 ? sens = "horizontal" : sens = "vertical";
        randomCase = {x: getRandomInt(1, 11), y: getRandomInt(1, 11)};
    } while (isPossible());
    if (sens == "horizontal") {
        if (randomCase.x + size <= 10) {
            for (let i = 0; i < size; i++) {
                result.push({x: randomCase.x + i, y: randomCase.y});
                CaseImpossibleToPlace.push({x: randomCase.x + i, y: randomCase.y});
                addBorderCaseImpossibleToPlace({x: randomCase.x + i, y: randomCase.y})
            }
        } else {
            for (let i = 0; i < size; i++) {
                result.push({x: randomCase.x - i, y: randomCase.y});
                CaseImpossibleToPlace.push({x: randomCase.x - i, y: randomCase.y});
                addBorderCaseImpossibleToPlace({x: randomCase.x - i, y: randomCase.y})
            }
        }
    } else {
        if (randomCase.y + size <= 10) {
            for (let i = 0; i < size; i++) {
                result.push({x: randomCase.x, y: randomCase.y + i});
                CaseImpossibleToPlace.push({x: randomCase.x, y: randomCase.y + i});
                addBorderCaseImpossibleToPlace({x: randomCase.x, y: randomCase.y + i})
            }
        } else {
            for (let i = 0; i < size; i++) {
                result.push({x: randomCase.x, y: randomCase.y - i});
                CaseImpossibleToPlace.push({x: randomCase.x, y: randomCase.y - i});
                addBorderCaseImpossibleToPlace({x: randomCase.x, y: randomCase.y - i})
            }
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
    CaseImpossibleToPlace = [];
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tankEnemy = new Tank(name, placeTank(NumberAllTanks[name]["size"]), NumberAllTanks[name]["size"]);
            AllTanksEnemy.push(tankEnemy);
        }
    }
}

function displayTankPlayer() {
    AllTanksPlayer.map((tank) => {
        tank.listCases.map((caseCurrent) => {
            const div = document.getElementById(`player:${caseCurrent.x};${caseCurrent.y}`);
            div.style.backgroundColor = "red";
        })
    })
    // debug mod
    AllTanksEnemy.map((tank) => {
        tank.listCases.map((caseCurrent) => {
            const div = document.getElementById(`enemy:${caseCurrent.x};${caseCurrent.y}`);
            div.style.backgroundColor = "blue";
        })
    })
}

function handleClickCase(element) {
    caseType = element.id.split(":")[0];
    caseCoordinates = element.id.split(":")[1];
    t = caseCoordinates.split(";")
    CurrentCaseClicked.x = +t[0];
    CurrentCaseClicked.y = +t[1];
    CurrentCaseClicked.isOccupied = isOccupied(CurrentCaseClicked.x, CurrentCaseClicked.y);
    console.log(CurrentCaseClicked)
}

createGrid();
generateTank();
displayTankPlayer();