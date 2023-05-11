import IA from "./ia";
import { getRandomInt } from "../tools";

export default class IAMedium extends IA {
    constructor() {
        super()
        this.generateCheckerboard()
    }

    search () {
        let result = {x: 1, y: 1}
        let b
        let i
        do {
            i = getRandomInt(0,this.listBoxToPlayForSearch.length)
            b = this.listBoxToPlayForSearch[i]
        } while (this.isAlreadyPlayed(b))
        this.listBoxToPlayForSearch[i]
        result = b
        console.log(result)
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