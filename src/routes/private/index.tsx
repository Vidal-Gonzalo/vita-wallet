import Dashboard from "../../containers/Dashboard";
import Exchange from "../../containers/Exchange";

export const privateRoutes = [
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/exchange',
        element: <Exchange />
    }
];