import BidItem from "../components/Users/pages/Bid/BidItem";
import BuyerHistory from "../components/Users/pages/Buyer/BuyerHistory";
import HistoryCustomer from "../components/Users/pages/Buyer/HistoryCustomer";
import ListofBuyer from "../components/Users/pages/Buyer/ListofBuyer";
import Dashboard from "../components/Users/pages/Dashboard/Dashboard";
import AI from "../components/Users/pages/DesignGenerate/AI";
import CreateFormRequest from "../components/Users/pages/DesignGenerate/CreateFormRequest";
import RequestFlowerDesign from "../components/Users/pages/DesignGenerate/RequestFlowerDesign";
import ActivityLogs from "../components/Users/pages/LogsHistory/Activitylogs";
import DesignGenerate from "../components/Users/pages/MyProduct/DesignGenerate";
import DesignProduct from "../components/Users/pages/MyProduct/DesignProduct";
import DetailsOrder from "../components/Users/pages/MyProduct/DetailsOrder";
import Myproduct from "../components/Users/pages/MyProduct/Myproduct";
import OrderStatus from "../components/Users/pages/MyProduct/OrderStatus";
import PurchaseStatus from "../components/Users/pages/Products/PurchaseStatus";
import SearchProducts from "../components/Users/pages/Products/SearchProducts";
import Form from "../components/Users/pages/Sell/Request/Form";
import Stocks from "../components/Users/pages/Sell/Stocks";
import ListShops from "../components/Users/pages/Shop/ListShops";
import OrderForm from "../components/Users/pages/Shop/OrderForm";
import ShopProduct from "../components/Users/pages/Shop/ShopProduct";


const CustomerRoutes = [
    {path: "/customer/dashboard", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/customer/product/search", exact: true, name: "Logs", component: SearchProducts},
    {path: "/customer/purchase/generate/design/:name/:id", exact: true, name: "AI", component: AI},
    {path: "/customer/request/form/flower", exact: true, name: "AI", component: RequestFlowerDesign},
    {path: "/customer/request/form/flower/:name/:id", exact: true, name: "AI", component: CreateFormRequest},
    {path: "/customer/history/logs", exact: true, name: "Logs", component: ActivityLogs},
    {path: "/customer/purchase/status", exact: true, name: "Status", component: PurchaseStatus},
    {path: "/customer/sell/product/stocks", exact: true, name: "Status", component: Stocks},
    {path: "/customer/request/form", exact: true, name: "Forn", component: Form},
    {path: "/customer/product/status", exact: true, name: "Forn", component: Myproduct},
    {path: "/customer/buyer/list", exact: true, name: "Forn", component: ListofBuyer},
    {path: "/customer/product/order", exact: true, name: "Forn", component: OrderStatus},
    {path: "/customer/product/order/:id", exact: true, name: "Forn", component: DetailsOrder},
    {path: "/customer/buyer/approve", exact: true, name: "Forn", component: BuyerHistory},
    {path: "/customer/buyer/history", exact: true, name: "Forn", component: HistoryCustomer},
    {path: "/customer/product/design", exact: true, name: "Design", component: DesignProduct},
    {path: "/customer/product/design/ai", exact: true, name: "DesignAI", component: DesignGenerate},
    {path: "/customer/visit/shop", exact: true, name: "Design", component: ListShops},
    {path: "/customer/order/form/:id", exact: true, name: "Design", component: OrderForm },
    {path: "/customer/shop/:name/:id", exact: true, name: "Design", component: ShopProduct},
    {path: "/customer/:name/refid=:id", exact: true, name: "Name", component: BidItem},
];

export default CustomerRoutes;