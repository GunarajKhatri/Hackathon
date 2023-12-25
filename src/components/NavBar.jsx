import React from 'react'
import { FaReact } from "react-icons/fa6";
import NavItem from "./NavItem";
import { TbBorderStyle2 } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { RiWechatChannelsFill } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";


const NavBar = () => {
     const navOptions = [
    { label: "Dashboard", isActive: "true", icon: RiHome2Line },
    { label: "Product", isActive: "true", icon: MdProductionQuantityLimits },
    { label: "Orders", isActive: "true", icon: TbBorderStyle2 },
    { label: "Channels", isActive: "true", icon: RiWechatChannelsFill },
  ];
  return (
    <>
         <div className="min-h-screen w-1/5  flex-col p-5 pt-8 pr-[120px]">
          <div className="flex mb-8">
            <FaReact className="text-6xl mr-2" />
            <h1 className="font-semibold text-4xl pt-4">React</h1>
          </div>

          <div>
            {navOptions.map((item,index) => {
              return <NavItem key={index} data={item} />;
            })}
          </div>
        </div>
      
    </>
  )
}

export default NavBar
