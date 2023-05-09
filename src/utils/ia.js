export default class IA {
    currentMode = "search"
    listBoxAlreadyPlayed = []
    listBoxToPlayForSearch = []
    firstBoxTouchedWhenFound = {}
    StateSensFoundedTank = "unknow"
    sensFoundedTank = ""
    direction = ""
    getLastShot () {
        return this.listBoxAlreadyPlayed[this.listBoxAlreadyPlayed.length - 1]
    }
    isAlreadyPlayed (box) {
        return this.listBoxAlreadyPlayed.includes(box)
    }
    fireAround (boxAround) {
        let result = {x: 1, y: 1}
        boxAround.map(box => {
            if (!this.isAlreadyPlayed(box)) {
                result = box
                return result
            }
        })
        this.listBoxAlreadyPlayed.push(result)
        this.StateSensFoundedTank = "searching"
        return result
    }
}
