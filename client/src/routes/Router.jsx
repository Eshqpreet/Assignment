import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Events from "../pages/Events"

import {Routes,Route} from "react-router-dom"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/events" element={<Events/>}/>
        </Routes>
    )
}

export default Router