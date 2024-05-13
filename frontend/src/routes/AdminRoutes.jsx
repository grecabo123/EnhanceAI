import Approve from "../components/Admin/pages/Accounts/Approve";
import Details from "../components/Admin/pages/Accounts/Details";
import Pending from "../components/Admin/pages/Accounts/Pending";
import Request from "../components/Admin/pages/Accounts/Request";
import ShopAccounts from "../components/Admin/pages/Accounts/ShopAccounts";
import ShopDetails from "../components/Admin/pages/Accounts/ShopDetails";
import Dashboard from "../components/Admin/pages/Dashboard/Dashboard";
import ActivityLogs from "../components/Admin/pages/Logs/ActivityLogs";


const AdminRoutes = [
    {path: "/admin/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/admin/accounts/registered", exact: true, name: "approved", component: Approve},
    {path: "/admin/accounts/pending", exact: true, name: "pending", component: Pending},
    {path: "/admin/accounts/request", exact: true, name: "Request", component: Request},
    {path: "/admin/account/request/refid=:id", exact: true, name: "Shop", component: ShopDetails},
    {path: "/admin/accounts/details/refid=:id", exact: true, name: "Details", component: Details},
    {path: "/admin/history/logs", exact: true, name: "Logs", component: ActivityLogs},
    {path: "/admin/shop/accounts", exact: true, name: "Shop", component: ShopAccounts},
];

export default AdminRoutes;