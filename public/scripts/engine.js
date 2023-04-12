const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let CurrentCaseClicked = {
    x: undefined,
    y: undefined,
    isOccupied: false,
};

const NumberAllTanks = {
    "tank convoy": {"number": 1, "size": 5*2}, //5*2 cases
    "big tank": {"number": 1, "size": 2*2}, //2*2 cases
    "medium tank": {"number": 3, "size": 2}, //2 cases
    "small tank": {"number": 3, "size": 1}, //1 case
}

const AllTanksPlayer = []
const AllTanksEnemy = []

class Tank {
    constructor(name, listCases, size) {
        this.name = name;
        this.size = size;
        this.listCases = listCases;
    }
}

function isOccupied(x, y) {
    t = AllTanksPlayer1.concat(AllTanksPlayer2);
    t.map((tank) => {
        tank.listCases.map((caseCurrent) => {
            if(caseCurrent.x === x && caseCurrent.y === y) {
                return true;
            }
        })
    })
    return false;
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

function generateTank() {
    for (const name in NumberAllTanks) {
        for (let i = 0; i < NumberAllTanks[name]["number"]; i++) {
            const tank = new Tank(name, [], NumberAllTanks[name]["size"]);
            AllTanksPlayer.push(tank);
            AllTanksEnemy.push(tank);
        }
    }
}

function handleClickCase(element) {
    caseType = element.id.split(":")[0];
    caseCoordinates = element.id.split(":")[1];
    t = caseCoordinates.split(";")
    CurrentCaseClicked.x = +t[0];
    CurrentCaseClicked.y = +t[1];
    CurrentCaseClicked.isOccupied = isOccupied(CurrentCaseClicked.x, CurrentCaseClicked.y);
    console.log(CurrentCaseClicked);
}

createGrid();
generateTank();