import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";

import { GoGraph } from "react-icons/go";
import Block from "./Block";
import Card from "./Card";
import Chart from "./Orders";
import NavBar from "./NavBar";

export default function Home({ label, icon }) {

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
      <div className="flex overflow-hidden bg-slate-100">
        <NavBar/>

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
