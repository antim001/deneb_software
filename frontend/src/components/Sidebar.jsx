import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";
import { useState } from 'react';
import { AiFillEnvironment } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { VscPersonAdd } from "react-icons/vsc";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  // Separate state for different submenus
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  
  const Menus = [
    { title: "Dashboard", icon: <RiDashboardFill />, path: "/dashboard" },
    { title: "Users", icon: <FaUsersViewfinder />, path: "/allusers" },
    { title: "Products", spacing: true , icon: <MdProductionQuantityLimits />, path: '/allproducts' },
    {
      title: "Orders",
      path: "/orders/list",
      submenu: true,
      submenuOpen: ordersOpen,
      setSubmenuOpen: setOrdersOpen, // Bind setOrdersOpen
      submenuItems: [
        { title: "Order List", path: "/orders/list" },
        { title: "Order Details", path: "/orders/details" },
        { title: "Order Status", path: "/orders/status" },
      ],
    },
    { title: "Account", path: "/account" ,icon:<FaSackDollar/>},
    { title: "Suppliers", spacing: true, path: "/suppliers" },
    {
      title: "Inventory",
      path: "/inventory/overview",
      submenu: true,
      submenuOpen: inventoryOpen,
      setSubmenuOpen: setInventoryOpen, // Bind setInventoryOpen
      submenuItems: [
        { title: "Stock Overview", path: "/inventory/overview" },
        { title: "Stock Alert", path: "/inventory/alert" },
        { title: "Stock Update", path: "/inventory/update" },
      ],
    },
    { title: "Reports", path: "/reports",spacing:true },
    { title: "Employees",icon:<VscPersonAdd/>,path: "/employees" },
  ];

  return (
    <div className='flex'>
      
      <div className={`min-h-screen  bg-dark-purple p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />

        <div className='inline-flex'>
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Track Mart</h1>
        </div>

        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} px-4 py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type={"search"} placeholder='search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />
        </div>

        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}
              >
                <span className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <Link to={menu.path} className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                  {menu.title}
                </Link>
                {menu.submenu && open && (
                  <BsChevronDown
                    
                    className={`${menu.submenuOpen ? "rotate-180 duration-300" : ""}`}
                    onClick={() => menu.setSubmenuOpen(!menu.submenuOpen)}
                  />
                )}
              </li>

              {/* Display Submenu Items */}
              {menu.submenu && menu.submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((subMenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'
                    >
                      <Link to={subMenuItem.path}>{subMenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
