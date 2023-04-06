//return a random case
const randomcase =()=>{return ["abcdefghij"[Math.floor(Math.random() * 10)],Math.floor(Math.random()*10+1)]}

//return true if the case is already play( is in the tab)
const checkCaseAlreadyPlay=(tab,caseToCheck)=>{
    console.log(tab)
    console.log(tab.length)
    for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
            if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                return true
            }
        }
        return false
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