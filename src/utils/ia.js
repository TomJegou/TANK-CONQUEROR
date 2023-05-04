class ia{
    constructor(level){
        this.level = level;
        this.mode = 'Hunt'; 
        this.target = null;
        this.caseAlreadyPlay = [];
        this.hitCase = [];

        this.targeting = false;
        this.nb = 1;
    }
    switchMode() {
        if (this.mode === 'Hunt') {
          this.mode = 'Targeting';
        } else {
          this.mode = 'Hunt';
          this.target = null;
        }
      }
    attack() {
        if (this.mode === 'Hunt') {
          return this.huntAttack();
        } else if (this.mode === 'Targeting') {
          return this.targetingAttack();
        }
    }
    huntAttack() {
        if (this.level === 1) {
          return this.randomAttack();
        } else if (this.level === 2) {
          return this.diagonalAttack();
        } else if (this.level === 3) {
          return this.ia3Attack();
        }
      }

    targetingAttack() {

    }

    
      
      /** Random Attack is a function who will find a case to attack,who has not been a player before */
      
    randomAttack(caseAlreadyPlay,attackCase){
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

    diagonalAttack(caseAlreadyPlay,attackCase){
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
    
    /** Attack function is a function to attack whit the use of Nick Berry algorithm inspiration*/
    ia3Attack(caseAlreadyPlay,attackCase){
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
      /** This function return a tab whit all the box 1 / 2  */
    allDiagonalCase(){
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
      
      
    diagonalLine() {
          const caseDiagonalLine = [];
          for (let i = 0; i < 10; i++) {
            caseDiagonalLine.push([i + 1, i + 1]);
          }
          return caseDiagonalLine;
        }
      
      
  
      
    huntCase(caseAlreadyPlay){
          tankCaseProb = [[4,4],[5,5],[6,6],[7,7],[8,8],[8,3],[3,3],[3,8],[5,10],[10,6],[5,1],[1,5],[2,10],[9,10],[9,1],[2,1],[1,2],[1,9],[10,9],[10,2],[7,2],[4,2],[2,4],[2,7],[4,9],[7,9],[9,7],[9,4]]
          for(let i = 0; i<tankCaseProb.length;i++){
              if(!checkCaseAlreadyPlay(caseAlreadyPlay,tankCaseProb[i])){
                  return tankCaseProb[i]
              }
          }
          return undefined
      }
    
      randomcase =()=>{return [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)]}

      /**return true if the case is already play (is in the tab)*/
    checkCaseAlreadyPlay=(tab,caseToCheck)=>{
          for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
                  if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                      return true
                  }
              }
              return false
          }
      /**This Function is use to find the Line direction of a ship */
    findLineDirection(hitCase){
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
    findCaseAround (caseToCheck){
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
      
}

const ia = new IA(2);
const attackCoords = ia.attack(); 
