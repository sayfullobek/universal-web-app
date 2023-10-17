import {MainMenuLayout} from "../layout/MainMenuLayout";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {FirstMenu} from "../pages/FirstMenu";
import {NotFound} from "../component/NotFound";
import {Contact} from "../pages/Contact";
import {Course} from "../pages/Course";
import {LearnPc} from "../pages/course/LearnPc";
import {WebProgramming} from "../pages/course/WebProgramming";
import {ArchDesign} from "../pages/course/ArchDesign";
import {GraphDesign} from "../pages/course/GraphDesign";
import {Autocad} from "../pages/course/Autocad";
import {Smm} from "../pages/course/smm";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainMenuLayout/>}>
                        <Route index element={<FirstMenu/>}/>
                    </Route>
                    <Route path={"/course"} element={<Course/>}/>
                    <Route path={"/learnPc"} element={<LearnPc/>}/>
                    <Route path={"/webProgramming"} element={<WebProgramming/>}/>
                    <Route path={"/archdesign"} element={<ArchDesign/>}/>
                    <Route path={"/smm&mobilograph"} element={<Smm/>}/>
                    <Route path={"/3dmac&autocad"} element={<Autocad/>}/>
                    <Route path={"/graphDesign"} element={<GraphDesign/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
