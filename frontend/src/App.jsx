import {BsArrowLeftShort,BsSearch,BsChevronDown} from 'react-icons/bs';
import { FaUsersViewfinder } from "react-icons/fa6";
import {useState} from 'react'
import {AiFillEnvironment} from 'react-icons/ai';
import {RiDashboardFill} from 'react-icons/ri'
const App = () => {
  const [open,setOpen]=useState(true)
  const [submenuopen,setsubmenuOpen]=useState(false)
const Menus=[
  {title:"Dashboard",icon:<RiDashboardFill/>},
  {title:"Users",icon:<FaUsersViewfinder/>},
  {title:"Products",spacing:true},
  {
    title:"Orders",
    submenu:true,
    submenuItems:[
      {title:"Order List"},
      {title:"Order Details"},
      {title:"Order Status"},
    ],
  },
  {title:"Account"},
  {title:"Suppliers"},
  {title:"Reports"},
]
  return (
    <div className='flex'>
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72":"w-20"} duration-300  relative `}>
<BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 
top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}/>
<div className='inline-flex'>
  <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
  <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}> Track Mart</h1>
</div>
<div className={`flex items-center rounded-md bg-light-white mt-6 ${!open?"px-2.5":"px-4"} px-4 py-2`}>
  <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
  <input type={"search"} placeholder='search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}/>
</div>
        <ul className='pt-2'>
   {
    Menus.map((menu,index)=>(
      <>
      <li key={index} className={`text-gray-300 
      text-sm flex items-center 
      gap-x-4 cursor-pointer p-2
       hover:bg-light-white rounded-md ${menu.spacing ? "mt-9":"mt-2"} `}>
        <span className='text-2xl block float-left'>
         {menu.icon? menu.icon :<RiDashboardFill/>}
          </span>
        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
        {menu.submenu && open && (
    <BsChevronDown className={`${submenuopen && "rotate-180 duration-300" }`} onClick={()=>setsubmenuOpen(!submenuopen)}/>
        )}
        </li>
        {
          menu.submenu && submenuopen && open && (
            <ul>
            {menu.submenuItems.map((subMenuItem, index) => (
              <li key={index} className='text-gray-300 
                text-sm flex items-center 
                gap-x-4 cursor-pointer p-2 px-5
                hover:bg-light-white rounded-md'>
                {subMenuItem.title}
              </li>
            ))}
          </ul>
          
          )
        }
      </>
    )
   )}
        </ul>
        </div>
      
      <div className='p-7'>Home page</div>
    </div>
  )
}

export default App