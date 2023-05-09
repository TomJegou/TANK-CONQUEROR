import IA from "./ia";

export default class IASimple extends IA {
    constructor() {
        super()
        this.generateCheckerboard()
    }

    search () {
        let result = {x: 1, y: 1}
        this.listBoxToPlayForSearch.map(box => {
            if (!this.isAlreadyPlayed(box)) {
                result = box
                return result
            }
        })
        this.listBoxAlreadyPlayed.push(result)
        return result
    }

    generateCheckerboard () {
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                if ((x + y)% 2 == 0) {
                    this.listBoxToPlayForSearch.push({x: x, y: y})
                }
            }
        }
    }
}