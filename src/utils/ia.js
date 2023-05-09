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

    getDirection () {
        const lastBoxPlayed = this.getLastShot()
        if (this.firstBoxTouchedWhenFound.x + 1 == lastBoxPlayed.x || this.firstBoxTouchedWhenFound.x -1 == lastBoxPlayed.x) {
            this.sensFoundedTank == "horizontale"
            if (this.firstBoxTouchedWhenFound.x + 1 == lastBoxPlayed.x) {
                this.direction = "right"
            } else {
                this.direction = "left"
            }
        } else {
            this.sensFoundedTank == "verticale"
            if (this.firstBoxTouchedWhenFound.y + 1 == lastBoxPlayed.y) {
                this.direction = "down"
            } else {
                this.direction = "up"
            }
        }
    }

    fireKnowingDir() {
        const lasBox = this.getLastShot()
        if (this.direction == "right") {
            return {x: lasBox.x + 1, y: lasBox.y}
        } else if (this.direction == "left") {
            return {x: lasBox.x - 1, y: lasBox.y}
        } else if (this.direction == "up") {
            return {x: lasBox.x, y: lasBox.y - 1}
        } else {
            return {x: lasBox.x, y: lasBox.y + 1}
        }
    }
}
