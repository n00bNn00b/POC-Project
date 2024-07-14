import { IoMenuOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoListOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/Images/logo-2.png";
import { useGlobalContext } from "../Context/GlobalContext";
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";


const Topbar = () => {
    const {open, setOpen, setToken} = useGlobalContext();

    const handleSignOut = () => {
      localStorage.removeItem('token');
      setToken('')
    }

  return (
    <div className="flex justify-between items-center h-[4rem] w-full bg-white shadow-md fixed px-6">
      <div className="flex items-center gap-4">
        {open? 
        <button onClick={() => setOpen(false)} className="text-2xl h-[2rem] w-[2rem] flex justify-center items-center bg-blue-100 rounded-full duration-500 hover:rotate-[360deg]">
            <IoMdClose/>
        </button> :
        <button onClick={() => setOpen(true)} className="text-2xl h-[2rem] w-[2rem] flex justify-center items-center bg-blue-100 rounded-full duration-500 hover:rotate-[360deg]">
            <IoMenuOutline/>
        </button>}
        <img src={logo} className="w-[140px] h-[41px]"/>
      </div>

      <div className="flex items-center gap-10">
        <NavLink to={"/home"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <IoHomeOutline className="text-2xl"/>
            <p>Home</p>
        </NavLink>
        <NavLink to={"/alerts"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <GoBell className="text-2xl"/>
            <p>Alerts</p>
        </NavLink>
        <NavLink to={"/tasks"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <IoListOutline className="text-2xl"/>
            <p>Tasks</p>
        </NavLink>
        <NavLink to={"/notifications/inbox"} className={({isActive}) => isActive? "flex gap-2 bg-blue-100 px-4 py-2 rounded-md": "flex gap-2"}>
            <BsEnvelope className="text-2xl"/>
            <p>Notifications</p>
        </NavLink>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus: outline-none">
            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[2.5rem] h-[2.5rem] rounded-full object-cover object-center" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#f3f3f3] text-[#250001] flex flex-col gap-1 w-40 pl-4 pb-4 pt-2 mt-[0.6rem]">
            <DropdownMenuLabel className="pb-1 border-b border-[#250001]/50">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link className="hover:translate-x-1 duration-300" to="/profile">
              <DropdownMenuItem className="flex gap-2">
                <FiUser className="lg"/>
                <p>Profile</p>
              </DropdownMenuItem>
            </Link>
            <Link className="hover:translate-x-1 duration-300" to="/security">
              <DropdownMenuItem className="flex gap-2">
                <MdOutlineSecurity className="lg"/>
                <p>Security</p>
              </DropdownMenuItem> 
            </Link>
            <Link className="hover:translate-x-1 duration-300" to="/settings">
              <DropdownMenuItem className="flex gap-2">
                <IoSettingsOutline className="lg"/>
                <p>Settings</p>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="text-slate-100" />
            <DropdownMenuItem onClick={handleSignOut} className="text-[#a50104] cursor-pointer flex items-center gap-1 hover:translate-x-1 duration-300 pt-1 border-t border-[#250001]/50">
              <MdLogout className="text-lg"/>
              <p>Sign Out</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Topbar
