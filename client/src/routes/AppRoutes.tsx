import { Route, Routes } from "react-router-dom"
import Events from "../screens/Events"
import CreateEvent from "../screens/CreateEvent"
import SingleEvent from "../screens/SingleEvent"
import Home from "../screens/Home"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/events" element={<Events/>} ></Route>
            <Route path="/create-event" element={<CreateEvent/>} ></Route>
            <Route path="/events/:id" element={<SingleEvent/>} ></Route>
        </Routes>
        </>
    )
}

export default AppRoutes