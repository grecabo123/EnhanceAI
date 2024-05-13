import BidItem from "../components/Users/pages/Bid/BidItem";
import ListofBuyer from "../components/Users/pages/Buyer/ListofBuyer";
import Dashboard from "../components/Users/pages/Dashboard/Dashboard";
import AI from "../components/Users/pages/DesignGenerate/AI";
import ActivityLogs from "../components/Users/pages/Logs/Activitylogs";
import DesignProduct from "../components/Users/pages/MyProduct/DesignProduct";
import Myproduct from "../components/Users/pages/MyProduct/Myproduct";
import PurchaseStatus from "../components/Users/pages/Products/PurchaseStatus";
import SearchProducts from "../components/Users/pages/Products/SearchProducts";
import Form from "../components/Users/pages/Sell/Request/Form";
import Stocks from "../components/Users/pages/Sell/Stocks";


const CustomerRoutes = [
    {path: "/customer/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/customer/product/search", exact: true, name: "Logs", component: SearchProducts},
    {path: "/customer/purchase/generate/design", exact: true, name: "AI", component: AI},
    {path: "/customer/history/logs", exact: true, name: "Logs", component: ActivityLogs},
    {path: "/customer/purchase/status", exact: true, name: "Status", component: PurchaseStatus},
    {path: "/customer/sell/product/stocks", exact: true, name: "Status", component: Stocks},
    {path: "/customer/request/form", exact: true, name: "Forn", component: Form},
    {path: "/customer/product/status", exact: true, name: "Forn", component: Myproduct},
    {path: "/customer/buyer/list", exact: true, name: "Forn", component: ListofBuyer},
    {path: "/customer/product/design", exact: true, name: "Design", component: DesignProduct},
    {path: "/customer/:name/refid=:id", exact: true, name: "Name", component: BidItem},
];

export default CustomerRoutes;