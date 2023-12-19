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
        // backgroundColor:'#fafafa',
        borderColor:'blue',
        tension:0.1,
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
     <div className='ml-10 mt-8 flex-col flex-wrap  mr-20 rounded-lg h-[540px] bg-white '>
         <div><p className='text-3xl ml-5 font font-semibold'>Orders</p></div>
         <div className="App  shadow-md mb-4" style={{width:'1300px', height:'505px'}}>
                 <Line data={data}></Line>
          </div>
      </div>
    </>
  );
}

