export default class IA {
    currentMode = "search"
    listBoxAlreadyPlayed = []
    listBoxToPlayForSearch = []
    firstBoxTouchedWhenFound = {}
    StateSensFoundedTank = "unknown"
    sensFoundedTank = ""
    direction = ""
    getLastShot () {
        return this.listBoxAlreadyPlayed[this.listBoxAlreadyPlayed.length - 1]
    }
    
    isAlreadyPlayed (box) {
        return this.listBoxAlreadyPlayed.includes(box)
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
                this.StateSensFoundedTank == "unknown" ? "" : this.StateSensFoundedTank == "unknown"
                return this.search()
            } else {
                return this.search()
            }
        } else if (this.currentMode == "finish") {
            return this.finish(respFromEngine)
        }
    }

    finish (respFromEngine) {
        const boxAround = [
            {x: this.firstBoxTouchedWhenFound.x + 1 <= 10 ? this.firstBoxTouchedWhenFound.x + 1 : this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x - 1 >= 1 ? this.firstBoxTouchedWhenFound.x - 1 : this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y + 1 <= 10 ? this.firstBoxTouchedWhenFound.y + 1: this.firstBoxTouchedWhenFound.y},
            {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y - 1 >= 1 ? this.firstBoxTouchedWhenFound.y - 1: this.firstBoxTouchedWhenFound.y},
        ]
        if (this.StateSensFoundedTank == "unknown") {
            return this.fireAround(boxAround)
        } else if (this.StateSensFoundedTank == "searching") {
            if (respFromEngine == "touched") {
                this.StateSensFoundedTank = "founded"
                this.getDirection()
                return this.fireKnowingDir()
            } else if (respFromEngine == "sinked") {
                this.StateSensFoundedTank = "unknown"
                this.currentMode = "search"
                return this.search()
            } else {
                return this.fireAround(boxAround)
            }
        } else {
            if (respFromEngine == "sinked") {
                this.StateSensFoundedTank = "unknown"
                this.direction = ""
                this.currentMode = "search"
                return this.search()
            } else if (respFromEngine == "missed") {
                if (this.sensFoundedTank == "horizontale") {
                    if (this.direction == "right"){
                        this.direction = "left"
                    } else {
                        this.direction = "right"
                    }
                } else {
                    if (this.direction == "up"){
                        this.direction = "down"
                    } else {
                        this.direction = "up"
                    }
                }
                return this.fireKnowingDir()
            } else {
                return this.fireKnowingDir()
            }
        }
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
        const lastBox = this.getLastShot()
        if (this.direction == "right") {
            this.listBoxAlreadyPlayed.push({x: lastBox.x, y: lastBox.y})
            return {x: lastBox.x + 1, y: lastBox.y}
        } else if (this.direction == "left") {
            this.listBoxAlreadyPlayed.push({x: lastBox.x, y: lastBox.y})
            return {x: lastBox.x - 1, y: lastBox.y}
        } else if (this.direction == "up") {
            this.listBoxAlreadyPlayed.push({x: lastBox.x, y: lastBox.y})
            return {x: lastBox.x, y: lastBox.y - 1}
        } else {
            this.listBoxAlreadyPlayed.push({x: lastBox.x, y: lastBox.y})
            return {x: lastBox.x, y: lastBox.y + 1}
        }
    }
}
