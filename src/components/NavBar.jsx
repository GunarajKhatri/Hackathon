import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbBorderStyle2 } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { RiWechatChannelsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import NavItem from "./Navitems";
import Block from "./Block";
import Orders from "./Orders";
import Card from "./Card";

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
        <div className="h-screen p-5 pt-8  font-sans flex-col">
          <div className="flex mb-8">
            <FaReact className="text-6xl mr-2" />
            <h1 className="font-bold text-xl pt-4">React</h1>
          </div>

          <div className=" w-40">
            {navOptions.map((item) => {
              return <NavItem data={item} />;
            })}
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mt-6 ml-9 mr-20 ">
            <p className="ml-3 text-lg">Welcome Back, Deepak</p>
          </div>

          <div className="flex justify-between mr-20 h-40 mt-8 ml-9">
            {BlockBar.map((items) => {
              return <Block Data={items} />;
            })}
          </div>
          <Orders />
          <Card />
        </div>
      </div>
    </>
  );
}
