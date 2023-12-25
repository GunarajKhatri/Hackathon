

import { createBrowserRouter, Navigate } from "react-router-dom";
import Products from "./Products";
import Order from "./Order";
import Channels from "./Channels";
import Dashboard from "./Dashboard";
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
