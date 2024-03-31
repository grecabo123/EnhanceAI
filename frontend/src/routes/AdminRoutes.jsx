import Approve from "../components/Admin/pages/Accounts/Approve";
import Details from "../components/Admin/pages/Accounts/Details";
import Pending from "../components/Admin/pages/Accounts/Pending";
import Dashboard from "../components/Admin/pages/Dashboard/Dashboard";
import ActivityLogs from "../components/Admin/pages/Logs/ActivityLogs";


const AdminRoutes = [
    {path: "/admin/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/admin/accounts/registered", exact: true, name: "approved", component: Approve},
    {path: "/admin/accounts/pending", exact: true, name: "pending", component: Pending},
    {path: "/admin/accounts/details/refid=:id", exact: true, name: "Details", component: Details},
    {path: "/admin/history/logs", exact: true, name: "Logs", component: ActivityLogs},
];

export default AdminRoutes;