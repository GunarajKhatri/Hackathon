import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function Chart() {
  const [data, setData]= useState({
    labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"First Dataset",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        // backgroundColor:'#fff',
        borderColor:'blue',
        tension:0.9,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })
  return (
    <>
     <div className='ml-10 mt-8 flex-col flex-wrap shadow-md mr-20 rounded-lg h-[540px] bg-white '>
    <div><p className='text-3xl ml-5 font font-semibold'>orders</p></div>
    <div className="App" style={{width:'1000px', height:'800px'}}>
      <Line data={data}></Line>
    </div>
    </div>
    </>
  );
}

