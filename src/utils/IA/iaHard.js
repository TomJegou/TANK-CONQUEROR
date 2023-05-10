import IA from "./ia";
 /** Ia Hard whit the use of Nick Berry algorithm inspiration*/
 export default class IAHard extends IA {
    constructor() {
        super()
        this.generateCheckerboard()
    }

    generateCheckerboard(){
        const rest = []
        let tankCaseProb=[{x:4,y:4},{x:5,y:5},{x:6,y:6},{x:7,y:7},{x:8,y:8},{x:8,y:3},{x:3,y:3},{x:3,y:8},{x:5,y:10},{x:10,y:6},{x:5,y:1},{x:1,y:5},{x:2,y:10},{x:9,y:10},{x:9,y:1},{x:2,y:1},{x:1,y:2},{x:1,y:9},{x:10,y:9},{x:10,y:2},{x:7,y:2},{x:4,y:2},{x:2,y:4},{x:2,y:7},{x:4,y:9},{x:7,y:9},{x:9,y:7},{x:9,y:4}]
        for (let i = tankCaseProb.length - 1; i >= 0; i--){
            if (i<27){
            this.listBoxToPlayForSearch.push(tankCaseProb[i])
        }else{
            for (let y = 1; y <= 10; y++) {
                for (let x = 1; x <= 10; x++) {
                    if ((x + y)% 2 == 0) {
                        this.listBoxToPlayForSearch.push({x: x, y: y})
                        
                    } else {
                        rest.push({x: x, y: y})
                    }
                }
            }
        }
    }
        this.listBoxToPlayForSearch = [...rest, ...this.listBoxToPlayForSearch]
    }

    search () {
        let result = {x: 1, y: 1}
        let b
        do {
           b = this.listBoxToPlayForSearch.pop() 
        } while (this.isAlreadyPlayed(b))
        result = b
        this.listBoxAlreadyPlayed.push(result)
        return result
    }
}