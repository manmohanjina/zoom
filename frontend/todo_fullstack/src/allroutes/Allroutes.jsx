import { Routes,Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Users from "../pages/Users";
import Private from "../privateRoute/Private";
import Todo from "../pages/Todo";
import UserPrivate from "../privateRoute/Userprivate";

export default function AllRoutes(){

    return <Routes>

        <Route path="/" element={<Home/>} ></Route>
         <Route path='/admin' element={
        <Private> <Admin/></Private>
         } ></Route>
         <Route path='/login' element={<Login/>} ></Route>
         <Route path='/todo' element={
         <UserPrivate><Todo/></UserPrivate>} ></Route>
         <Route path='/signup' element={<Signup/>} ></Route>
         <Route path="/users" element={<Users/>} ></Route>
    </Routes>
}