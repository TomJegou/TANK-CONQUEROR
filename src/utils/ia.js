class IA {
    iaLevel=""
    constructor(iaLevel) {
        this.iaLevel = iaLevel
        this.targeting = false;
        this.nb = 1;
        this.hitCase = [];
    }


    /**return a random case*/
    static randomcase =()=>{return [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)]}
    /**return true if the case is already play (is in the tab)*/
    static checkCaseAlreadyPlay=(tab,caseToCheck)=>{
        for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
                if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                    return true
                }
            }
            return false
        }
    /**This Function is use to find the Line direction of a ship */
    static findLineDirection(hitCase){
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
    static findCaseAround (caseToCheck){
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
    static randomAttack(caseAlreadyPlay,attackCase){
        let findCase = false
        while(!findCase){
            if (this.checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)) {
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
    static allDiagonalCase(){
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


    static diagonalLine() {
        const caseDiagonalLine = [];
        for (let i = 0; i < 10; i++) {
        caseDiagonalLine.push([i + 1, i + 1]);
        }
        return caseDiagonalLine;
    }


    static diagonalAttack(caseAlreadyPlay,attackCase){
        let findCase = false    
        while(!findCase){
            for(let i =0;i<diagonalLine.length;i++){
                if (this.checkCaseAlreadyPlay(caseAlreadyPlay,diagonalAttack[i])) {
                    attackCase = diagonalAttack[i]
                    caseAlreadyPlay.push(attackCase)
                    findCase=true
                    break
                }else{
                    for(let i =0;i<this.allDiagonalCase.length;i++){
                        if(this.checkCaseAlreadyPlay(caseAlreadyPlay,this.allDiagonalCase[i])) {{
                            attackCase = this.allDiagonalCase[i]
                            caseAlreadyPlay.push(attackCase)
                            findCase=true
                            break
                        }}
                    }
                }
            }
        }
    }


    static huntCase(caseAlreadyPlay){
        tankCaseProb = [[4,4],[5,5],[6,6],[7,7],[8,8],[8,3],[3,3],[3,8],[5,10],[10,6],[5,1],[1,5],[2,10],[9,10],[9,1],[2,1],[1,2],[1,9],[10,9],[10,2],[7,2],[4,2],[2,4],[2,7],[4,9],[7,9],[9,7],[9,4]]
        for(let i = 0; i<tankCaseProb.length;i++){
            if(!this.checkCaseAlreadyPlay(caseAlreadyPlay,tankCaseProb[i])){
                return tankCaseProb[i]
            }
        }
        return undefined
    } 
    /** Attack function is a function to attack whit the use of Nick Berry algorithm inspiration*/
    static level3attack(caseAlreadyPlay,attackCase){
        let findCase = false
        while(!findCase){
            if(this.huntCase != undefined){
                if (this.checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)){
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
            if (this.checkCaseAlreadyPlay(caseAlreadyPlay,attackCase)){
                caseAlreadyPlay.push(attackCase)
                findCase=true
            }else{
                caseAlreadyPlay.push(attackCase)
                findCase=true
            }
        }
        }
    }
    


    mode= {1:"hunt",2:"targeting"}
    fired(response,caseAlreadyPlay){
        if(response == "touched"){
            this.hitCase.push(caseAlreadyPlay[caseAlreadyPlay.length-1])
            if(this.mode == "hunt"){
                if(this.hitCase>2){
                for(let k = 0;i<this.findLineDirection(this.hitCase).length;k++){
                        if(!this.checkCaseAlreadyPlay(caseAlreadyPlay,this.findLineDirection(hitCase)[k])){
                            attackCase = this.findLineDirection(this.hitCase)[k]
                            this.nb+=1
                            break
                        }
                    }
                }else{
                for(let j = 0;j<this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                    if(!this.checkCaseAlreadyPlay(caseAlreadyPlay,this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                        attackCase = this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                        this.nb+=1
                        break
                    }
                }
            }
            }else if(this.mode == "targeting"){
            for(let i = 0 ;i<this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1]).length;i++){
                if (!this.checkCaseAlreadyPlay(caseAlreadyPlay,this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i])) {
                    attackCase = this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-1])[i]
                    this.targeting = true
                    break
                }
            }
        }
        else{
            this.randomAttack(caseAlreadyPlay,attackCase)
        }
    }
    }
    missed(response,caseAlreadyPlay){
        if(response == "missed"){
            if(this.mode == "hunt"){
                for(let j = 0;j<this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb]).length;j++){
                    if(!this.checkCaseAlreadyPlay(caseAlreadyPlay,this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j])) {
                        attackCase = this.findCaseAround(caseAlreadyPlay[caseAlreadyPlay.length-nb])[j]
                        break
                    }
                }
            }
            else if (this.mode == "targeting"){
                this.randomAttack(caseAlreadyPlay,attackCase)
            }
        }
    }
    sinked(response){
    if(response == "sinked"){
        this.hitCase=[]
        this.nb=1
        this.targeting=false
        this.attack
    }
    }
}

