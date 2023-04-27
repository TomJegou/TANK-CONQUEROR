export function engine(listTanks, boxPlayed) {
    let result = "missed"
    let indexTankToDelete = null
    listTanks.map((tank, index) => {
        let indexBoxToDelete = null
        tank.listBox.map((box, index) => {
            if (box.x == boxPlayed.x && box.y == boxPlayed.y) {
                result = "touched"
                indexBoxToDelete = index
                return
            }
        })
        if (indexBoxToDelete != null) {
            delete tank.listBox[indexBoxToDelete]
            if (tank.listBox.length <= 0) {
                indexTankToDelete = index
            }
            return
        }
    })
    if (indexTankToDelete != null) {
        delete listTanks[indexTankToDelete]
        result = "sinked"
    }
    return result
}