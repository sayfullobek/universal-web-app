import {Navbar} from "../component/Navbar";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/Footer";


export const MainMenuLayout = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}