export default class IA {
    currentMode = "search"
    listBoxAlreadyPlayed = []
    listBoxToPlayForSearch = []
    firstBoxTouchedWhenFound = {}
    sensFoundedTank = "unknow"
    getLastShot () {
        return this.listBoxAlreadyPlayed[this.listBoxAlreadyPlayed.length - 1]
    }
    isAlreadyPlayed (box) {
        return this.listBoxAlreadyPlayed.includes(box)
    }
}
