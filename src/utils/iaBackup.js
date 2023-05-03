/**return a random case*/
const randomcase =()=>{return [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)]}

/**return true if the case is already play (is in the tab)*/
const checkCaseAlreadyPlay=(tab,caseToCheck)=>{
    for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
            if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                return true
            }
        }
        return false
    }
/**This Function is use to find the Line direction of a ship */
function findLineDirection(hitCase){
    let line = []

    let elem1 = hitCase[0]
    let elem2 = hitCase[1]
    if(elem1[0]==elem2[0]){
        for(let y =1;y<=10;y++){
            line.push([elem1[0],y])
        }
    }
    if(elem1[1]==elem2[1]){
        for(let x =1;x<=10;x++){
            line.push([elem1[1],x])
        }
    }
    return line
}

/**FindCaseAround is a function how check around a case we give to check (caseToCheck) and return all are case around */
function findCaseAround (caseToCheck){
    let allCaseAround = [];
    let caseAround = [];
    let xnumber = caseToCheck[0];
    let number = caseToCheck[1];
    let xIndex = xnumber-1;
    let numberIndex = number-1;
    let xIndexMin = xIndex-1;let xIndexMax = xIndex+1;let numberIndexMax = numberIndex+1;let numberIndexMin = numberIndex-1;
    if ( xIndexMax > 9) {
        xIndexMax = 9
    }
    if (xIndexMin < 0) {
        xIndexMin = 0
    }
    if (numberIndexMax > 9) {
        numberIndexMax = 9
    }
    if (numberIndexMin < 0) {
        numberIndexMin = 0
    }
    for (let i = xIndexMin; i <= xIndexMax; i++) {
        for (let j = numberIndexMin; j <= numberIndexMax; j++) {
            if (i !==  xIndex || j !== numberIndex) {
                caseAround = [i+1,j+1]
                allCaseAround.push(caseAround)
            }
        }
    }
    return (allCaseAround)
}


/** Random Attack is a function who will find a case to attack,who has not been a player before */

function randomAttack(caseAlreadyPlay,attackCase){
    let findCase = false
    while(!findCase){
        if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
            attackCase = randomcase()
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }else{
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }
        break
}
}

/** This function return a tab whit all the box 1 / 2  */
function allDiagonalCase(){
    const oddeven=(number)=>{if(number % 2==0){return true}else {false}}
    let caseDiagonal = []
    let x = 1;let y = 1;let xNb = 1;let yNb = 1
    while(x<=10){
        while(y<=5){
            caseDiagonal.push([xNb,yNb]);yNb+=2;y+=1;
        }if(oddeven(x)){yNb =1;}else{yNb =2;}
        y = 1 ; x += 1 ; xNb += 1
    }
    return caseDiagonal
}


function diagonalLine() {
    const caseDiagonalLine = [];
    for (let i = 0; i < 10; i++) {
      caseDiagonalLine.push([i + 1, i + 1]);
    }
    return caseDiagonalLine;
  }


function diagonalAttack(caseAlreadyPlay,attackCase){
    let findCase = false    
    while(!findCase){
        for(let i =0;i<diagonalLine().length;i++){
            if (checkCaseAlreadyPlay(caseAlreadyPlay,diagonalAttack[i])) {
                attackCase = diagonalLine[i]
                caseAlreadyPlay.push(attackCase)
                findCase=true
                break
            }else{
                for(let i =0;i<allDiagonalCase.length;i++){
                    if(checkCaseAlreadyPlay(caseAlreadyPlay,allDiagonalCase[i])) {{
                        attackCase = allDiagonalCase[i]
                        caseAlreadyPlay.push(attackCase)
                        findCase=true
                        break
                    }}
                }
            }
        }
    }
}


function huntCase(caseAlreadyPlay){
    tankCaseProb = [[4,4],[5,5],[6,6],[7,7],[8,8],[8,3],[3,3],[3,8],[5,10],[10,6],[5,1],[1,5],[2,10],[9,10],[9,1],[2,1],[1,2],[1,9],[10,9],[10,2],[7,2],[4,2],[2,4],[2,7],[4,9],[7,9],[9,7],[9,4]]
    for(let i = 0; i<tankCaseProb.length;i++){
        if(!checkCaseAlreadyPlay(caseAlreadyPlay,tankCaseProb[i])){
            return tankCaseProb[i]
        }
    }
    return undefined
}
/** Attack function is a function to attack whit the use of Nick Berry algorithm inspiration*/
function ia3attack(caseAlreadyPlay,attackCase){
    let findCase = false
    while(!findCase){
        if(huntCase != undefined){
            if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)){
                attackCase = huntCase()
                caseAlreadyPlay.push(attackCase)
                findCase=true
            }
            else{
                caseAlreadyPlay.push(attackCase)
                findCase=true
            }
        }else{
        attackCase = randomcase()
        if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)){
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }else{
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }
    }
}
}








let targeting=false
let nb = 1
let hitCase = []
/** 
The ia function take the response of the player and the case already play by the ia and return a case to attack the case to attack depend of the ia lvl
*/


export function ia(response,caseAlreadyPlay,iaLevel){
    if(iaLevel == 1){
        let attackCase =randomcase()
        attack=randomAttack(caseAlreadyPlay,attackCase)
    }
    if(iaLevel == 2){
        let attackCase = []

        for(let i =0;i<diagonalLine.length;i++){
            if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
                attackCase =diagonalLine()[i]
            }else{
                for(let i =0;i<allDiagonalCase.length;i++){
                    if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
                    attackCase = allDiagonalCase[Math.floor(Math.random()*50+1)]//random case in diagonal case
                    }
                }
            }
        }

        attack=diagonalAttack(caseAlreadyPlay,attackCase)

    }
    if(iaLevel == 3){
        let attackCase = huntCase()
        if(huntCase == undefined){
            attackCase = randomAttack()
        }
        attack= ia3attack(caseAlreadyPlay,attackCase)
    }
    if(response == "touched"){
        hitCase.push(caseAlreadyPlay[caseAlreadyPlay.length-1])
        if(targeting == true){
            if(hitCase>2){
            for(let k = 0;i<findLineDirection(hitCase).length;k++){
                    if(!checkCaseAlreadyPlay(caseAlreadyPlay,findLineDirection(hitCase)[k])){
                        attackCase = findLineDirection(hitCase)[k]
                        nb+=1
                        break
                    }
                }
            }else{
            for(let j = 0;j<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                if(!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                    attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                    nb+=1
                    break
                }
            }
        }
        }else if(targeting==false){
        for(let i = 0 ;i<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1]).length;i++){
            if (!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i])) {
                attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i]
                targeting = true
                break
            }
        }
    }
    else{
        attack
    }
    }
    if(response == "missed"){
        if(targeting == true){
            for(let j = 0;j<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                if(!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                    attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                    break
                }
            }
        }
        else if (targeting==false){
            attack
        }
    }
    if(response == "sinked"){
        hitCase=[]
        nb=1
        targeting=false
        attack
    }
    return (caseAlreadyPlay)
}
