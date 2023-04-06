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
function ia1(response,caseAlreadyPlay) {
    let attackCase =randomcase()
    console.log(attackCase)
    console.log("case played : ")
    console.log(caseAlreadyPlay)
    if (checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
        attackCase = randomcase()
        console.log("new case :",attackCase)
        caseAlreadyPlay.push(attackCase)
        console.log("New tab of case played : ")
        console.log(caseAlreadyPlay)
    }else{
        caseAlreadyPlay.push(attackCase)
        console.log("New tab of case played : ")
        console.log(caseAlreadyPlay)
    }


    if(response===0 || 1){

    }
   
    return (attackCase)
}

function ia2(){

}

function ia3(){

}
ia1(0,[['a',1],['b',3]])