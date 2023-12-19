import React from "react";
import Items from "../section_3/Items";
import Numbers from "../section_3/Numbers";
import ColorBox from "../section_3/ColorBox";

const Card = () => {

  const Products=[
    {
      products:"Iphone",
     
    },
    {
      products:"Smartwatch",
     
    },
    {
      products:"Acer Nitro 5",
     
    },
    {
      products:"Headphone",
     
    },
    {
      products:"Gaming mouse",
     
    },
    {
      products:"Keyboard",
   
    },
    {
      products:"Ipad",
     
    },
  ]

  const Demands=[
    {
      label:0
    },
    {
      label:100
    },
    {
      label:200
    },
    {
      label:300
    },
    {
      label:400
    },
    {
      label:500
    },
    {
      label:600
    },
    {
      label:700
    },
    {
      label:800
    },
    {
      label:900
    },
    {
      label:1000
    },
  ]


  
  return (
    <>
      <div className="flex-col ml-9 mr-20  h-[341px] mb-3 mt-8">
        <div className="mb-4">
            <p className="text-3xl font-semibold">Products</p>
          </div>
        <div className="flex">
        <div className="flex w-[800px] mr-14 rounded-lg shadow-md">
          <div className="max-h-full  w-[180px] mt-4 pl-4">
          <p className="text-2xl font-semibold ">products</p>
          <div className="mt-2 bg-white">
            {
              Products.map((currentData,index)=>{
                return (<Items key={index} Data={currentData}/>)
              })
            }
          </div>
          
          </div>
           <div className=" flex-col w-[550px] ml-6 mt-4">
              <div className="inline-flex">
                {
                  Demands.map((currentData,index)=>{
                    return(<Numbers key={index} Data={currentData}/>)
                  })

                }
              </div>
              <ColorBox/>
          </div>
        </div>

        <div className=" w-[450px]  shadow-md ">
          <p>Channels</p>
          <div>Go</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
