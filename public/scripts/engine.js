const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

let currentCase = {
    x: undefined,
    y: undefined,
    isOccupied: false,
    isPlayer: false
};

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
    caseType == "player" ? currentCase.isPlayer = true : currentCase.isPlayer = false;
    t = caseCoordinates.split(";")
    currentCase.x = +t[0];
    currentCase.y = +t[1];
    console.log(currentCase);
}

createGrid();