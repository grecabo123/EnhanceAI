import Dashboard from "../components/Users/pages/Dashboard/Dashboard";
import AI from "../components/Users/pages/DesignGenerate/AI";


const CustomerRoutes = [
    {path: "/customer/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/customer/purchase/generate/design", exact: true, name: "AI", component: AI},
];

export default CustomerRoutes;