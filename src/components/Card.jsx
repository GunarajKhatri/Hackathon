import React from "react";

const Card = () => {

  const Products=[
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
    {
      products:"Iphone",
      label:0
    },
  ]
  
  return (
    <>
      <div className="flex justify-between ml-9 mr-20  h-[341px] mb-3 mt-8 shadow-2xl">
        <div className="flex-col  w-[630px] mr-10 rounded-lg bg-slate-100">
          <div className="max-h-full bg-slate-400 w-[180px] mt-4 pl-4">
          <p className="text-xl font-semibold ">products</p>
          <div className="mt-2">iphones</div>
          </div>
        </div>

        <div className=" mr-6 w-[367px] ">
          <p>Channels</p>
          <div>Go</div>
        </div>
      </div>
    </>
  );
};

export default Card;
