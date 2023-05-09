export default class IA {
    currentMode = "search"
    listBoxAlreadyPlayed = []
    listBoxToPlayForSearch = []
    firstBoxTouchedWhenFound = {}
    sensFoundedTank = "unknow"
    getLastShot () {
        return this.boxAlreadyPlayed[this.boxAlreadyPlayed.length - 1]
    }
    isAlreadyPlayed (box) {
        return this.listBoxAlreadyPlayed.includes(box)
    }
}
