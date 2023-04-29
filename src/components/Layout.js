import HeadComponent  from "./Head";
import Footer from "./Footer";

export default function Layout({ children, className }) {
    return (
        <>
            <HeadComponent 
                title="Tank Conqueror"
                description="Tank Conqueror is a game where you can play with your friends and conquer the world"
                keywords="Tank, Conqueror, Game, Multiplayer, Online"
            />
            <div className={"h-[100vh] " + className}>
                {children}
                <Footer />
            </div>
        </>
    )
}