//return a random letter
const randomletter= ()=>{return "abcdefghij"[Math.floor(Math.random() * 10)]}

//return a random number
const randomnumb =()=>{return Math.floor(Math.random()*10+1)}
//return a random case
const randomcase =()=>{return [randomletter(),randomnumb()]}

//return true if the case is already play( is in the tab)
const checkCaseAlreadyPlay=(tab,caseToCheck)=>{
    for (let i = 0; i < tab.length; i++) {
        if (tab[i]===caseToCheck) {
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
export function ia1(response,tab) {
    let caseAlreadyPlay=[]
    //need to check is case as already play
    //check the response to know if the shoot hit or no
    //if it hit shoot near by
    //if it miss shoot on a random case

    let attackCase = randomcase()
    console.log(attackCase)
    console.log(attackCase)

    if(response===0 || 1){

    }
    caseAlreadyPlay.push(attackCase)
    console.log(caseAlreadyPlay)
    return (attackCase)
}
export function ia2(){

}

export function ia3(){

}
ia1()