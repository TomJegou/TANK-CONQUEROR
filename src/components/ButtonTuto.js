export default function ButtonTuto ({ funcOnClick, className, text }) {
    return (
        <div 
            className={className}
            onClick={funcOnClick}>
            <p className="flex flex-row flex-wrap justify-center items-center cursor-pointer">{text}</p>
        </div>
    )
}