export function IsOccupied(thisBox, grid) {
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

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}