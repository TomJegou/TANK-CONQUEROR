const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

function createCase(x, y, t) {
    const div = document.createElement('div');
    div.className = 'case';
    div.id = `${t}:${x};${y}`;
    div.style.border = "1px solid black";
    div.setAttribute("onclick", `handleClickCase(this)`);
    return div;
}
  
for (let y = 0; y < 10; y++) {
    for(let x = 0; x < 10; x++) {
        const playerDiv = createCase(x, y, "player");
        const enemyDiv = createCase(x, y, "enemy");
        playerGrid.appendChild(playerDiv);
        enemyGrid.appendChild(enemyDiv);
    }
}