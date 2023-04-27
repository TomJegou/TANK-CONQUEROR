import { randomcase, checkCaseAlreadyPlay, findLineDirection, findCaseAround, randomAttack, allDiagonalCase, diagonalLine, diagonalAttack, huntCase, attack, ia3attack } from "./utilsForIa";


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
                console.log(attackCase)
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
        attack
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
            attack
        }
    }
    if(response == "detruit"){
        hitCase=[]
        nb=1
        targeting=false
        attack
    }
    return (caseAlreadyPlay)
}
