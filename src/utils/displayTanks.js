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

function hit(box) {
    const div = document.getElementById(box);
    let content = document.createTextNode("X");
    div.appendChild(content);
}