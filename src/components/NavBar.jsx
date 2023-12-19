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
      <div className="flex">
        <div className="h-screen p-5 pt-8  font-sans flex-col flex-w">
          <div className="flex mb-8">
            <FaReact className="text-6xl mr-2" />
            <h1 className="font-bold text-xl pt-4">React</h1>
          </div>

          <div className="w-28 md:w-44">
            {navOptions.map((item) => {
              return <NavItem data={item} />;
            })}
          </div>
        </div>

        <div className="w-full mr-20">
          <p className="mt-5 ml-9  text-2xl md:text-4xl">Welcome Back, Deepak</p>
        <div className="flex flex-wrap mt-6 ml-10 mr-20 justify-between ">
        {BlockBar.map((items) => {
              return <Block Data={items} />;
            })}

        </div>
        <Chart/>
        <Card/>
        </div>
      </div>
    </>
  );
}
