const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let CurrentCase = {
    x: undefined,
    y: undefined,
    isOccupied: false,
    isPlayer: false
};

const NumberAllTanks = {
    "tank convoy": 1, //5*2 cases
    "big tank": 1, //2*2 cases
    "medium tank": 3, //2 cases
    "small tank": 3, //1 case
}

class Tank {
    constructor(name, listCases, size) {
        this.name = name;
        this.size = size;
        this.listCases = listCases;
    }
}

function createCase(x, y, t) {
    const div = document.createElement('div');
    div.className = 'case';
    div.id = `${t}:${x};${y}`;
    div.style.border = "1px solid black";
    div.setAttribute("onclick", `handleClickCase(this)`);
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

const handleClickCase = (element) => {
    caseType = element.id.split(":")[0];
    caseCoordinates = element.id.split(":")[1];
    caseType == "player" ? CurrentCase.isPlayer = true : CurrentCase.isPlayer = false;
    t = caseCoordinates.split(";")
    CurrentCase.x = +t[0];
    CurrentCase.y = +t[1];
    console.log(CurrentCase);
}

createGrid();