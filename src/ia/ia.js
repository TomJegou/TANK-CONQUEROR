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


/** 
the first ia shoot on a random case 
** check the response to know if the shoot hit or no
** if it hit shoot near by
** if it miss shoot on a random case
*/
let targeting=false
let nb = 1
let hitCase = []

function ia1(response,caseAlreadyPlay){
    let attackCase =randomcase()
    if(response == "toucher"){
        hitCase.push(caseAlreadyPlay[caseAlreadyPlay.length-1])
        if(targeting == true){
            if(hitCase>2){
            for(let k = 0;i<findLineDirection(hitCase).length;k++){
                    if(!checkCaseAlreadyPlay(caseAlreadyPlay,findLineDirection(hitCase)[k])){
                        caseAlreadyPlay.push(attackCase)
                        attackCase = findLineDirection(hitCase)[k]
                        nb+=1
                        break
                    }
                }
            }else{
            for(let j = 0;j<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                if(!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                    attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                    caseAlreadyPlay.push(attackCase)
                    nb+=1
                    break
                }
            }
        }
        }else if(targeting==false){
        for(let i = 0 ;i<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1]).length;i++){
            if (!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i])) {
                attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i]
                caseAlreadyPlay.push(attackCase)
                targeting = true
                break
            }
        }
    }
    else{
        randomAttack(caseAlreadyPlay,attackCase)
    }
    }
    if(response == "louper"){
        if(targeting == true){
            for(let j = 0;j<findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                if(!checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                    attackCase = findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                    caseAlreadyPlay.push(attackCase)
                    break
                }
            }
        }
        else if (targeting==false){
            randomAttack(caseAlreadyPlay,attackCase)
        }
    }
    if(response == "detruit"){
        hitCase=[]
        nb=1
        targeting=false
        randomAttack(caseAlreadyPlay,attackCase)
    }
    return (caseAlreadyPlay)
}




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

function diagonalLine(){
    let caseDiagonalLine = []
    let i =0
    while(caseDiagonalLine.length<=10){
        for(let j =0;j<50;j++){
            for(let k = 0;k<=5;k++){
                caseDiagonalLine.push([allDiagonalCase()[i]])
                i+=1
            }
        return caseDiagonalLine
        }}
}


console.log(allDiagonalCase()[0])
console.log(diagonalLine())

function diagonalAttack(caseAlreadyPlay,attackCase){
    let findCase = false
    while(!findCase){
        if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
            attackCase = di()
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }else{
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }
        break
    
}
}
/** 
the second ia shoot case in diagonal  
** check the response to know if the shoot hit or no
** if it hit shoot near by
** if it miss shoot on a random case
*/
function ia2(response,caseAlreadyPlay){
    
}
/** 
the third ia use the Nick berry algorithm
*/
function ia3(){
}
