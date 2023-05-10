export default class IA {
    currentMode = "search"
    listBoxAlreadyPlayed = []
    listBoxToPlayForSearch = []
    firstBoxTouchedWhenFound = {}
    StateSensFoundedTank = "unknown"
    sensFoundedTank = ""
    direction = ""
    boxAroundFirstShot = []
    getLastShot () {
        return this.listBoxAlreadyPlayed[this.listBoxAlreadyPlayed.length - 1]
    }
    
    isAlreadyPlayed (box) {
        let result = false
        this.listBoxAlreadyPlayed.map(b => {
            if (b.x == box.x && b.y == box.y) {
                result = true
                return
            }
        })
        return result
    }

    attack (respFromEngine) {
        if (this.currentMode == "search") {
            if (respFromEngine == "touched") {
                this.currentMode = "finish"
                this.firstBoxTouchedWhenFound = this.getLastShot()
                this.boxAroundFirstShot = this.generateBoxAroundFirstTouchedWhenSearched ()
                return this.finish(respFromEngine)
            } else if (respFromEngine == "sinked") {
                this.resetMode()
                return this.search()
            } else {
                return this.search()
            }
        } else if (this.currentMode == "finish") {
            return this.finish(respFromEngine)
        }
    }

    finish (respFromEngine) {
        if (this.StateSensFoundedTank == "unknown") {
            return this.fireAround()
        } else if (this.StateSensFoundedTank == "searching") {
            if (respFromEngine == "touched") {
                this.StateSensFoundedTank = "founded"
                this.getDirection()
                return this.fireKnowingDir()
            } else if (respFromEngine == "sinked") {
                this.resetMode()
                return this.search()
            } else {
                return this.fireAround()
            }
        } else {
            if (respFromEngine == "sinked") {
                this.resetMode()
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
                this.listBoxAlreadyPlayed.push(this.firstBoxTouchedWhenFound)
            }
            return this.fireKnowingDir()
        }
    }

    fireAround () {
        let result = {x: 1, y: 1}
        let b
        do {
            b = this.boxAroundFirstShot.pop()
        } while (this.isAlreadyPlayed(b))
        result = b
        this.listBoxAlreadyPlayed.push(result)
        this.StateSensFoundedTank = "searching"
        return result
    }

    getDirection () {
        const lastBoxPlayed = this.getLastShot()
        if (this.firstBoxTouchedWhenFound.x + 1 == lastBoxPlayed.x || this.firstBoxTouchedWhenFound.x -1 == lastBoxPlayed.x) {
            this.sensFoundedTank = "horizontale"
            if (this.firstBoxTouchedWhenFound.x + 1 == lastBoxPlayed.x) {
                this.direction = "right"
            } else {
                this.direction = "left"
            }
        } else {
            this.sensFoundedTank = "verticale"
            if (this.firstBoxTouchedWhenFound.y + 1 == lastBoxPlayed.y) {
                this.direction = "down"
            } else {
                this.direction = "up"
            }
        }
    }

    fireKnowingDir() {
        const lastBox = this.getLastShot()
        let b
        if (this.direction == "right") {
            b = {x: lastBox.x + 1, y: lastBox.y}
        } else if (this.direction == "left") {
            b = {x: lastBox.x - 1, y: lastBox.y}
        } else if (this.direction == "up") {
            b = {x: lastBox.x, y: lastBox.y - 1}
        } else if (this.direction == "down") {
            b = {x: lastBox.x, y: lastBox.y + 1}
        }
        this.listBoxAlreadyPlayed.push(b)
        return b
    }

    generateBoxAroundFirstTouchedWhenSearched() {
        const result = []
        let b = {x: this.firstBoxTouchedWhenFound.x + 1, y: this.firstBoxTouchedWhenFound.y}
        if (this.isBoxValid(b)){
            result.push(b)
        }
        b = {x: this.firstBoxTouchedWhenFound.x - 1, y: this.firstBoxTouchedWhenFound.y}
        if (this.isBoxValid(b)){
            result.push(b)
        }
        b = {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y + 1}
        if (this.isBoxValid(b)){
            result.push(b)
        }
        b = {x: this.firstBoxTouchedWhenFound.x, y: this.firstBoxTouchedWhenFound.y - 1}
        if (this.isBoxValid(b)){
            result.push(b)
        }
        return result
    }

    isBoxValid(b) {
        if (b.x < 1 || b.x > 10) {
            return false
        }
        if (b.y < 1 || b.y > 10) {
            return false
        }
        return true
    }

    resetMode () {
        this.StateSensFoundedTank = "unknown"
        this.direction = ""
        this.sensFoundedTank = ""
        this.boxAroundFirstShot = []
        this.firstBoxTouchedWhenFound = {}
        this.currentMode = "search"
    }
}
