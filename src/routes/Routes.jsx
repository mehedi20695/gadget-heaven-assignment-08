import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import ErrorPage from "../pages/ErrorPage";
import Statistics from "../pages/Statistics";
import Upcoming from "../pages/Upcoming";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/upcoming',
                element: <Upcoming></Upcoming>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },

        ]
    },
]);

export default routes