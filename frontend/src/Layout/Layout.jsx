import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Make sure to create this component

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar component */}
      <div className="flex-1 p-4"> {/* Main content area */}
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </div>
  );
};

export default Layout;
