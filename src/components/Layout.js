import HeadComponent  from "./Head.js";

export default function Layout({ children, className }) {
    return (
        <>
        <HeadComponent 
            title="Tank Conqueror"
            description="Tank Conqueror is a game where you can play with your friends and conquer the world"
            keywords="Tank, Conqueror, Game, Multiplayer, Online"
        />
        <div className={className}>
            {children}
        </div>
        </>
    )
}