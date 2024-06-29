import Approve from "../components/Admin/pages/Accounts/Approve";
import Details from "../components/Admin/pages/Accounts/Details";
import LockAccount from "../components/Admin/pages/Accounts/LockAccount";
import Pending from "../components/Admin/pages/Accounts/Pending";
import Request from "../components/Admin/pages/Accounts/Request";
import ShopAccounts from "../components/Admin/pages/Accounts/ShopAccounts";
import ShopDetails from "../components/Admin/pages/Accounts/ShopDetails";
import Dashboard from "../components/Admin/pages/Dashboard/Dashboard";
import ActivityLogs from "../components/Admin/pages/LogsHistory/ActivityLogs";
import Information from "../components/Admin/pages/ShopDetails/Information";


const AdminRoutes = [
    {path: "/admin/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/admin/accounts/registered", exact: true, name: "approved", component: Approve},
    {path: "/admin/accounts/lock", exact: true, name: "approved", component: LockAccount},
    {path: "/admin/accounts/pending", exact: true, name: "pending", component: Pending},
    {path: "/admin/accounts/request", exact: true, name: "Request", component: Request},
    {path: "/admin/account/request/refid=:id", exact: true, name: "Shop", component: ShopDetails},
    {path: "/admin/accounts/details/refid=:id", exact: true, name: "Details", component: Details},
    {path: "/admin/history/logs", exact: true, name: "Logs", component: ActivityLogs},
    {path: "/admin/shop/accounts", exact: true, name: "Shop", component: ShopAccounts},
    {path: "/admin/shop/name=:name/refid=:id", exact: true, name: "Shop", component: Information},
];

export default AdminRoutes;