export function IsOccupied (thisBox, grid) {
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

export function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function getCookie (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}