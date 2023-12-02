import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Orders = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor: "green",
        tension: 0.4,
        fill: true,
        // pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <>
      <div className="flex-col text-black h-80  ml-9 mr-20 mt-6 border-none cursor-pointer">
        <p className=" font-semibold text-lg h-16  py-3  ">Orders</p>
        <div className="text-lg h-64 shadow-md  rounded-xl bg-white hover:shadow-2xl hover:bg-slate-50 ">
          <div className="App pb-4 h-60">
            <Line data={data}></Line>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
