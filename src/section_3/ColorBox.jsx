// import React, { useState } from 'react'

const ColorBox = () => {
  const Colors=[
    {
    color:"red",
    width:400
  },
  {
    color:"green",
    width:500
  },
  {
    color:"gray",
    width:200
  },
  {
    color:"brown",
    width:277
  },
  {
    color:"blue",
    width:320
  },
  {
    color:"yellow",
    width:100
  },
  {
    color:"orange",
    width:470
  },
]

// const [Data,setData]=useState(Colors)
   
 return (
  <div className='flex-col'>
   {Colors.map((currentData, index) => (
        <div
        className="mt-4 py-3 rounded-r-xl"
          key={index}
          style={{
            width: `${(currentData.width / 530) * 100}%`,
            backgroundColor: currentData.color,
            height: "19px",
          }}
        ></div>
      ))}
  </div>
);
  }
export default ColorBox
