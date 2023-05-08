import HeadComponent  from "./Head"
import Footer from "./Footer"

export default function Layout ({ children, className, classNameFooter }) {
    return (
        <div className={className}>
            <HeadComponent 
                title="Tank Conqueror"
                description="Tank Conqueror is a game where you can play with your friends and conquer the world"
                keywords="Tank, Conqueror, Game, Multiplayer, Online"
            />
            {children}
            <Footer className={classNameFooter}/>
        </div>
    )
}