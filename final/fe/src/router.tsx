import { createHashRouter } from "react-router-dom"
import Loginin from "./pages/Login_in"
import CreateAccount from "./pages/Create_Account"
import React from "react"
import Home from "./pages/Home"
import Contents from "./components/contents"
import Detail from "./components/deatil"
import About from "./components/about"

const router = createHashRouter([
    {
      path: "",
      element: <Loginin />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
    {
      path: "/Home",
      element: <Home />,
      children:[
        {
          path:'',
          element:<Contents />,
        },
        {
          path:'/Home/detail',
          element:<Detail />
        },
        {
          path:'/Home/about',
          element:<About />
        }
      ]
    },
    
])
export default router