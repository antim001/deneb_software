import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout.jsx'; // Adjust based on your folder structure
import AllUsers from '../Pages/AllUsers.jsx'
import Products from '../Pages/Products.jsx';
import Account from '../Pages/Account.jsx';
import Dashboard from '../Pages/Dashboard.jsx'
import AddProduct from '../components/AddProduct.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Render the Layout component
    children: [
        { path: "/allusers", element: <AllUsers /> }, // AllUsers component
        { path: "/allproducts", element: <Products /> },
        { path: "/addproduct", element: <AddProduct /> },
        { path: "/account", element: <Account /> },
        {path:'/dashboard',element:<Dashboard/>}
      ],
  },
]);

export default router; // Ensure you're exporting the router
