import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import MainMenu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <MainMenu></MainMenu>
            },
            {
                path: 'order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    }
])