/**return a random case*/
const randomcase =()=>{return ["abcdefghij"[Math.floor(Math.random() * 10)],Math.floor(Math.random()*10+1)]}

/**return true if the case is already play (is in the tab)*/
const checkCaseAlreadyPlay=(tab,caseToCheck)=>{

    for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
            if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                return true
            }
        }
        return false
    }


/** 
the first ia shoot on a random case 
** check the response to know if the shoot hit or no
** if it hit shoot near by
** if it miss shoot on a random case
*/

const findCaseAround=(caseToCheck)=>{
    let caseAround = [];
    let letter = caseToCheck[0];
    let number = caseToCheck[1];
    let letterIndex = "abcdefghij".indexOf(letter);
    let numberIndex = number-1;
    if (letterIndex+1 > 9) {
        let letterIndexMax = 9
    }
    if (letterIndex-1 < 0) {
        let letterIndexMin = 0
    }
    if (numberIndex+1 > 9) {
        let numberIndexMax = 9
    }
    if (numberIndex-1 < 0) {
        let numberIndexMin = 0
    }
    for (let i = letterIndexMin; i <= letterIndexMax; i++) {
        for (let j = numberIndexMin; j <= numberIndexMax; j++) {
            if (i !== letterIndex || j !== numberIndex) {
                caseAround = ["abcdefghij"[i],j+1]
            }
        }
    }
    return (caseAround,)
}
function ia1(response,caseAlreadyPlay) {
    let findCase = false
    let attackCase =randomcase()
    if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
        attackCase = randomcase()
        caseAlreadyPlay.push(attackCase)
    }else{
        caseAlreadyPlay.push(attackCase)
    }
    if(response === 0 || 1){
        while (!findCase) {
            attackCase=caseAlreadyPlay[caseAlreadyPlay.length-1]

            if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
                caseAlreadyPlay.push(attackCase)
            }
        }
    return (attackCase,caseAlreadyPlay)
    }
}
function ia2(){

}

function ia3(){

}
ia1(0,[['a',1],['b',3]])