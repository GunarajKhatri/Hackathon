import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbBorderStyle2 } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { RiWechatChannelsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import NavItem from "./Navitems";
import Block from "./Block";
import Card from "./Card";
import Chart from "./Orders";

export default function NavBar({ label, icon }) {
  const navOptions = [
    { label: "Dashboard", isActive: "true", icon: RiHome2Line },
    { label: "Product", isActive: "true", icon: MdProductionQuantityLimits },
    { label: "Orders", isActive: "true", icon: TbBorderStyle2 },
    { label: "Channels", isActive: "true", icon: RiWechatChannelsFill },
  ];

  const BlockBar = [
    {
      label: 200,
      isActive: "true",
      icon: GoGraph,
      percentage: "+30%",
      message: "This Month",
      text: "Total Orders",

      list: MdProductionQuantityLimits,
    },
    {
      label: "200",
      isActive: "true",
      icon: GoGraph,
      percentage: "+30%",
      message: "This Month",
      text: "Total Orders",
      list: MdProductionQuantityLimits,
    },
    ,
    {
      label: "200",
      isActive: "true",
      icon: GoGraph,
      percentage: "+30%",
      message: "This Month",
      text: "Total Orders",

      list: MdProductionQuantityLimits,
    },
  ];

  
  return (
    <>
      <div className="flex overflow-hidden">
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

        <div className="flex-col w-4/5">
          <div className="mt-5 mr-20">
          <p className="text-2xl">Welcome Back, Deepak</p>
          </div>
        <div className="max-w-full flex mt-6 mr-20 justify-between">
        {BlockBar.map((items,index) => {
              return <Block key={index} Data={items} />;
            })}

        </div>
        <div className="mr-20">
        <div className=" mt-3"><p className='text-2xl font font-md'>Orders</p></div>
        <Chart/>
        </div>
        <Card/>
        </div>
      </div>
    </>
  );
}
