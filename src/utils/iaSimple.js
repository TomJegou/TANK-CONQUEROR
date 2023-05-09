import IA from "./ia";

export default class IASimple extends IA {
    constructor() {
        super()
        this.generateCheckerboard()
    }

    attack (respFromEngine) {
        if (this.currentMode == "search") {
            if (respFromEngine == "touched") {
                this.firstBoxTouchedWhenFound = this.getLastShot()
                this.currentMode = "finish"
                return this.finish (respFromEngine)
            } else if (respFromEngine == "missed") {
                return this.search()
            } else if (respFromEngine == "sinked") {
                this.sensFoundedTank == "unknown" ? "" : this.sensFoundedTank == "unknown"
                return this.search()
            } else {
                return this.search()
            }
        } else if (this.currentMode == "finish") {
            return this.finish(respFromEngine)
        }
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

    finish (respFromEngine) {
        const boxAround = [
            {x: this.firstBoxTouchedWhenFound.x + 1 <= 10 ? this.firstBoxTouchedWhenFound.x + 1 : this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x - 1 >= 1 ? this.firstBoxTouchedWhenFound.x - 1 : this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y + 1 <= 10 ? this.firstBoxTouchedWhenFound.y + 1: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y - 1 >= 1 ? this.firstBoxTouchedWhenFound.y - 1: this.firstBoxTouchedWhenFound.y},
        ]
        if (this.sensFoundedTank == "unknown") {
            return this.fireAround(boxAround)
        } else if (this.sensFoundedTank == "searching") {
            if (respFromEngine == "touched") {

            } else if (respFromEngine == "sinked") {
                this.sensFoundedTank = "unknown"
                this.currentMode = "search"
                return this.search()
            } else {
                return this.fireAround(boxAround)
            }
        }
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