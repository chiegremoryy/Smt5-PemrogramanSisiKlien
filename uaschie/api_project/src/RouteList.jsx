import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import UserLayout from "./Layouts/UserLayout";
import HomePages from "./Pages/User/HomePages";
import NewsPages from "./Pages/User/NewsPages";
import ProtectedRoute from "./Components/ProtectedRoute";
import NewsDetailPages from "./Pages/User/NewsDetailPages";

const RouteList = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/user',
        element:
            <ProtectedRoute>
                <UserLayout />
            </ProtectedRoute>,
        children: [
            {
                index: true,
                element: <HomePages />
            },
            {
                path: 'news',
                element: <NewsPages />,
            },
            {
                path: `news/:id`,
                element: <NewsDetailPages />
            },
        ]
    }
]);

export default RouteList;
