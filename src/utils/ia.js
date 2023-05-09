export class IA{
    constructor(level){
        this.level = level;
        this.caseAlreadyPlay = [];
        this.hitCase = [];
        this.targeting = false;
        this.nb = 1;
        this.casepotentiel = [];

        this.maxTankSize = 5;
        this.attackCase = [];
    }

    getCaseAlreadyPlay(){
        return this.caseAlreadyPlay;
    }

    attack(response) {
        if (this.targeting === false) {
            switch (response) {
                case 'sinked':
                    return this.huntAttack();
                case 'touched':
                    this.targeting = true;
                    return this.huntAttack();
                case 'missed':
                    return this.huntAttack();
                case '':
                    return this.huntAttack();
            }
        } else if (this.targeting===true) {
            switch (response) {
                case 'sinked':
                    return this.sinked();
                case 'touched':
                    return this.touched(response);
                case 'missed':
                    return this.missed();
                case '':
                    return this.huntAttack();
            }
        }
    }

    huntAttack() {
        if (this.level === "Easy") {
          return this.randomAttack();
        } else if (this.level === "Medium") {
          return this.diagonalAttack();
        } else if (this.level === "Hard") {
          return this.ia3Attack();
        }
      }

    targetingAttack(response){
        let defaultCase = this.hitCase[0]
        if(this.hitCase.lenght<1){
            this.casepotentiel.push(this.findCaseAround(defaultCase))
            for(let i = 0;i<this.casepotentiel.length-1;i++){
                if(!this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.casepotentiel[i])){
                    this.attackCase = this.casepotentiel[i]
                    this.caseAlreadyPlay.push(this.attackCase)
                    this.hitCase.push(this.attackCase)
                    return this.attackCase
                }
            }
        }
        if(this.hitCase.length>=2){
            if(response === 'touched'){
                this.casepotentiel.push(this.findCaseLine(defaultCase))
                for(let i = 0;i<this.casepotentiel.length-1;i++){
                    if(!this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.casepotentiel[i])){
                        this.attackCase = this.casepotentiel[i]
                        this.caseAlreadyPlay.push(this.attackCase)
                        this.hitCase.push(this.attackCase)
                        return this.attackCase
                    }
                }
            }else if (response === 'missed'){
                this.casepotentiel.push(this.findCaseLine(defaultCase))
                for(let i = 0;i<this.casepotentiel.length-1;i++){
                    if(!this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.casepotentiel[i])){
                        this.attackCase = this.casepotentiel[i]
                        this.caseAlreadyPlay.push(this.attackCase)
                        this.hitCase.push(this.attackCase)
                        return this.attackCase
                    }
                }
            }
        }
    }

    touched(response) {
        this.hitCase.push(this.caseAlreadyPlay[this.caseAlreadyPlay.length-1]);
        this.target = true;
        this.targetingAttack(response)
    }

    missed(response) {
        this.targetingAttack(response)
    }
    sinked() {
        this.hitCase=[]
        this.huntAttack()
        this.targeting = false;
    }
    

        
    randomcase (){
        return [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)]
    }
      
      /** Random Attack is a function who will find a case to attack,who has not been a player before */
      
    randomAttack(){
        let findCase = false
        while(!findCase){
            if (this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.attackCase)) {
                this.attackCase = this.randomcase()
                this.caseAlreadyPlay.push(this.attackCase)
                findCase=true
            }else{
                this.attackCase = this.randomcase()
                this.caseAlreadyPlay.push(this.attackCase)
                findCase=true
            }
            break
        }
        return this.attackCase
    }

    diagonalAttack(){
        let findCase = false    
        while(!findCase){
            for(let i =0;i<this.diagonalLine().length;i++){
                if (this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.diagonalAttack[i])) {
                    this.attackCase = this.diagonalLine()[i]
                    this.caseAlreadyPlay.push(this.attackCase)
                    findCase=true
                    break
                }else{
                    for(let i =0;i<this.allDiagonalCase.length;i++){
                        if(this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.allDiagonalCase[i])) {{
                            this.attackCase = this.allDiagonalCase()[i]
                            this.caseAlreadyPlay.push(this.attackCase)
                            findCase=true
                            break
                        }}
                    }
                }
            }
        }
        return this.attackCase
    }
    
    /** Attack function is a function to attack whit the use of Nick Berry algorithm inspiration*/
    ia3Attack(){
        let findCase = false
        while(!findCase){
            if(this.ia3huntCase != undefined){
                if (this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.attackCase)){
                    this.attackCase = this.ia3huntCase()
                    this.caseAlreadyPlay.push(this.attackCase)
                    findCase=true
                }
                else{
                    this.caseAlreadyPlay.push(this.attackCase)
                    findCase=true
                }
            }else{
                this.attackCase = randomcase()
            if (this.checkCaseAlreadyPlay(this.caseAlreadyPlay,this.attackCase)){
                this.caseAlreadyPlay.push(this.attackCase)
                findCase=true
            }else{
                this.caseAlreadyPlay.push(this.attackCase)
                findCase=true
            }
        }
    }
    return this.attackCase
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
              return caseDiagonal
            }
        }
      
      
    diagonalLine() {
          const caseDiagonalLine = [];
          for (let i = 0; i < 10; i++) {
            caseDiagonalLine.push([i + 1, i + 1]);
          }
          return caseDiagonalLine;
        }
      
      
  
      
    ia3huntCase(){
          let tankCaseProb = [[4,4],[5,5],[6,6],[7,7],[8,8],[8,3],[3,3],[3,8],[5,10],[10,6],[5,1],[1,5],[2,10],[9,10],[9,1],[2,1],[1,2],[1,9],[10,9],[10,2],[7,2],[4,2],[2,4],[2,7],[4,9],[7,9],[9,7],[9,4]]
          for(let i = 0; i<tankCaseProb.length;i++){
              if(!this.checkCaseAlreadyPlay(this.caseAlreadyPlay,tankCaseProb[i])){
                  return tankCaseProb[i]
              }
          }
          return undefined
      }


      /**return true if the case is already play (is in the tab)*/
    checkCaseAlreadyPlay=(tab,caseToCheck)=>{
          for (let elemenInTab = 0; elemenInTab < tab.length; elemenInTab++) {
                  if(tab[elemenInTab][0] === caseToCheck[0] && tab[elemenInTab][1] === caseToCheck[1]){
                      return true
                  }
              }
              return false
          }

      findCaseLine(hitCase) {
        let line = [];

        let elem1 = hitCase[0];
        let elem2 = hitCase[1];
        if (elem1[0] === elem2[0]) {
          for (let y = elem1[1] - 1; y >= 1; y--) {
            line.push([elem1[0], y]);
          }
          for (let y = elem1[1] + 1; y <= 10; y++) {
            line.push([elem1[0], y]);
          }
        } else if (elem1[1] === elem2[1]) {
          for (let x = elem1[0] - 1; x >= 1; x--) {
            line.push([x, elem1[1]]);
          }
          for (let x = elem1[0] + 1; x <= 10; x++) {
            line.push([x, elem1[1]]);
          }
        }
        return line;
      };
      
      /**FindCaseAround is a function how check around a case we give to check (caseToCheck) and return all are case around */
      findCaseAround(caseToCheck) {
        let allCaseAround = [];
        let caseAround = [];
        let xnumber = caseToCheck[0];
        let number = caseToCheck[1];
        let xIndex = xnumber - 1;
        let numberIndex = number - 1;
        let xIndexMin = xIndex - 1;
        let xIndexMax = xIndex + 1;
        let numberIndexMax = numberIndex + 1;
        let numberIndexMin = numberIndex - 1;
      
        if (xIndexMax > 9) {
          xIndexMax = 9;
        }
        if (xIndexMin < 0) {
          xIndexMin = 0;
        }
        if (numberIndexMax > 9) {
          numberIndexMax = 9;
        }
        if (numberIndexMin < 0) {
          numberIndexMin = 0;
        }
      
        for (let i = xIndexMin; i <= xIndexMax; i++) {
          for (let j = numberIndexMin; j <= numberIndexMax; j++) {
            if (i !== xIndex || j !== numberIndex) {
              caseAround = [i + 1, j + 1];
              allCaseAround.push(caseAround);
            }
          }
        }
      
        return allCaseAround;
      }
      
}


// const ia1 = new IA("Easy");
// const caseplayed = ia1.getCaseAlreadyPlay();

// const c =ia1.attack("touched");
// console.log(caseplayed);

