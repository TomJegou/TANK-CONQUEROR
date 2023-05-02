export default function DisplayPlayerTurn({ whosTurn }){
    return (
        <div>
            <p className="flex flex-row flex-wrap text-white">{whosTurn}'s turn</p>
        </div>
    )
}