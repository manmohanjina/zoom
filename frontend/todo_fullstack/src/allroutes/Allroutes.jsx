import { Routes,Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Users from "../pages/Users";

export default function AllRoutes(){

    return <Routes>

        <Route path="/" element={<Home/>} ></Route>
         <Route path='/admin' element={<Admin/>} ></Route>
         <Route path="/users" element={<Users/>} ></Route>
    </Routes>
}