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


/**FindCaseAround is a function how check around a case we give to check (caseToCheck) and return all are case around */
function findCaseAround (caseToCheck){
    let allCaseAround = [];
    let caseAround = [];
    let letter = caseToCheck[0];
    let number = caseToCheck[1];
    let letterIndex = "abcdefghij".indexOf(letter);
    let numberIndex = number-1;
    let letterIndexMin = letterIndex-1;let letterIndexMax = letterIndex+1;let numberIndexMax = numberIndex+1;let numberIndexMin = numberIndex-1;
    if (letterIndex > 9) {
        letterIndexMax = 9
    }
    if (letterIndexMin < 0) {
        letterIndexMin = 0
    }
    if (numberIndexMax > 9) {
        numberIndexMax = 9
    }
    if (numberIndexMin < 0) {
        numberIndexMin = 0
    }
    for (let i = letterIndexMin; i <= letterIndexMax; i++) {
        for (let j = numberIndexMin; j <= numberIndexMax; j++) {
            if (i !== letterIndex || j !== numberIndex) {
                caseAround = ["abcdefghij"[i],j+1]
                allCaseAround.push(caseAround)
            }
        }
    }
    return (allCaseAround)
}
  

/** 
the first ia shoot on a random case 
** check the response to know if the shoot hit or no
** if it hit shoot near by
** if it miss shoot on a random case
*/



function ia1(response,caseAlreadyPlay) {
    let findCase = false
    let attackCase =randomcase()
    while(!findCase){
        if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
            attackCase = randomcase()
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }else{
            caseAlreadyPlay.push(attackCase)
            findCase=true
        }
    }
    if(response == "toucher" || response == "detruit"){
        while (!findCase) {
            attackCase=caseAlreadyPlay[caseAlreadyPlay.length-1]
            for(let i = 0 ;i<findCaseAround(attackCase).length;i++){
                if (checkCaseAlreadyPlay(caseAlreadyPlay,findCaseAround(attackCase)[i])) {
                    attackCase = findCaseAround(attackCase)[i]
                    caseAlreadyPlay.push(attackCase)
                    findCase = true
                    break
                }
            }
        }
        ia1("",caseAlreadyPlay)
    }
    return (caseAlreadyPlay)
}

function ia2(){

}

function ia3(){

}
console.log(ia1("toucher",[['a',1],['b',3]]))

console.log(findCaseAround(['b',3]))