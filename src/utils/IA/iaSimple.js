import IA from "./ia";
/** Ia Simple do a grid */
export default class IASimple extends IA {
    constructor() {
        super()
        this.generateCheckerboard()
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

    generateCheckerboard () {
        const rest = []
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                if ((x + y)% 2 == 0) {
                    this.listBoxToPlayForSearch.push({x: x, y: y})
                } else {
                    rest.push({x: x, y: y})
                }
            }
        }
        this.listBoxToPlayForSearch = [...rest, ...this.listBoxToPlayForSearch]
    }
}