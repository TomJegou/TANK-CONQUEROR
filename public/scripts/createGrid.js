const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");

function createCase(x, y) {
    const div = document.createElement('div');
    div.className = 'case';
    div.id = `${x};${y}`;
    if((x+y)%2 === 0) {
        div.style.background = "black"
    }
    return div;
}
  
for (let y = 0; y < 10; y++) {
    for(let x = 0; x < 10; x++) {
        const playerDiv = createCase(x, y);
        const enemyDiv = createCase(x, y);
        playerGrid.appendChild(playerDiv);
        enemyGrid.appendChild(enemyDiv);
    }
}