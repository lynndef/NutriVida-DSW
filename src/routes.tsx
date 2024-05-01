import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { AdminMenu } from "./pages/AdminMenu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/AdminMenu",
        element: <AdminMenu/>
    }
]);