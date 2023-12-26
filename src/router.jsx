
import { createBrowserRouter, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Channels from "./pages/Channels";
import Dashboard from "./pages/Dashboard";
import App from "./App";




export default createBrowserRouter([
  {
    
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/dashboard",
        element:(
         <Dashboard/>  
        ),
      },
      {
        path: "/products",
        element:(
         <Products/>  
        ),
      },
      {
        path: "/orders",
        element: (
         <Order/>
        ),
      },
      {
        path: "/channels",
        element: (
         <Channels/>
        ),
      }
    ],
  },
]);
