import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';


import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import WelcomePage from './pages/WelcomePage';
import CustomerRegisterPage from './pages/CustomerRegisterPage';

const routes = ({authStatus, userType}) => [
    {
        path: "/superadmin",
        element: authStatus && userType === "1" ? <DashboardLayout userType={userType}/> :
            <Navigate to="/login"/>,
        children: [
            {path: "", element: <Navigate to="/superadmin/dashboard"/>},
            {path: "dashboard", element: <DashboardAppPage/>},
        ],
    },
    {
        path: "/admin",
        element: authStatus && userType === "2" ? <DashboardLayout userType={userType}/> :
            <Navigate to="/login"/>,
        children: [
            {path: "", element: <Navigate to="/admin/dashboard"/>},
            {path: "dashboard", element: <DashboardAppPage/>},
        ],
    },
    {
        path: "/",
        element: <SimpleLayout/>,
        children: [
            {path: "login", element: <LoginPage/>},
            {path: "register", element: <CustomerRegisterPage/>},
            {path: "404", element: <Page404/>},
            {path: "/", element: <WelcomePage/>},
            {path: "*", element: <Navigate to="/404"/>},
        ],
    },
];

export default routes;
