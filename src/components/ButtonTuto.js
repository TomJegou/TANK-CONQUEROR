export default function ButtonTuto ({ funcOnClick, className, text }) {
    return (
        <div 
            className={className}
            onClick={funcOnClick}
            style={{cursor: "pointer"}}>
            <p className="flex flex-row flex-wrap justify-center items-center">{text}</p>
        </div>
    )
}