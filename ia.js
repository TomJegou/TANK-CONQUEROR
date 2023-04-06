//return a random case
const randomcase =()=>{return ["abcdefghij"[Math.floor(Math.random() * 10)],Math.floor(Math.random()*10+1)]}

//return true if the case is already play( is in the tab)
const checkCaseAlreadyPlay=(tab,caseToCheck)=>{
    console.log(tab)
    console.log(tab.length)
    for (let t = 0; t < tab.length; t++) {
        for(let i = 0; i < tab[t].length; i++){
            if (tab[t][i]===caseToCheck) {
                return true
            }
        }
        return false
    }
}
test1=[[1,'b'],[3,'o'],[5,'o'],[4,'a']]
test2=[4,'a']
console.log(checkCaseAlreadyPlay(test1,test2))

/** 
the first ia shoot on a random case 
** check the response to know if the shoot hit or no
** if it hit shoot near by
** if it miss shoot on a random case
*/
function ia1(response,tab) {
    let attackCase =randomcase()
    let caseAlreadyPlay=[]
    console.log(attackCase)

    if (checkCaseAlreadyPlay(tab,attackCase)) {
        attackCase = randomcase()
        console.log(attackCase)
        
    }
    //need to check is case as already play
    //check the response to know if the shoot hit or no
    //if it hit shoot near by
    //if it miss shoot on a random case

    console.log(attackCase)
    console.log(attackCase)

    if(response===0 || 1){

    }
    caseAlreadyPlay.push(attackCase)
    console.log(caseAlreadyPlay)
    return (attackCase)
}
function ia2(){

}

function ia3(){

}