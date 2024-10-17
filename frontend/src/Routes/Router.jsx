import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout.jsx'; // Adjust based on your folder structure
import AllUsers from '../Pages/AllUsers.jsx'
import Products from '../Pages/Products.jsx';
import Account from '../Pages/Account.jsx';
import Dashboard from '../Pages/Dashboard.jsx'
import AddProduct from '../components/AddProduct.jsx'
import Suppliers from "../Pages/Suppliers.jsx";
import ErrorElement from "../components/ErrorElement.jsx";
import Overview from "../Pages/Inventory/Overview.jsx";
import Alert from "../Pages/Inventory/Alert.jsx";
import Update from "../Pages/Inventory/Update.jsx";
import OrderStatus from "../Pages/Orders/OrderStatus.jsx";
import OrderList from "../Pages/Orders/OrderList.jsx";
import OrderDetails from '../Pages/Orders/OrderDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Render the Layout component
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: "/allusers", element: <AllUsers /> }, // AllUsers component
      { path: "/allproducts", element: <Products /> },
      { path: "/addproduct", element: <AddProduct /> },
      { path: "/account", element: <Account /> },
      { path: '/suppliers', element: <Suppliers /> },
      { path: '/inventory/overview', element: <Overview/> },
      { path: '/inventory/alert', element: <Alert/> },
      { path: '/inventory/update', element: <Update/> },
      { path: '/orders/list', element: <OrderList/> },
      { path: '/orders/details', element: <OrderDetails/> },
      { path: '/orders/status', element: <OrderStatus/> },
    ],
  },
]);

export default router; // Ensure you're exporting the router
