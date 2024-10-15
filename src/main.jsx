import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './componnets/Home'
import Science from './componnets/Science'
import Business from './componnets/Business'
import Sports from './componnets/Sports'
import Acting from './componnets/Acting'
import Root from './Root'


const router =createBrowserRouter([
{
  path:'/',
  element:<Root/>,
  children:[

    {
      path:'',
      element:<Home/>
    },
    {
      path:'Science',
      element:<Science/>
    },
    {
      path:'Business',
      element:<Business/>
    },
    {
      path:'Sports',
      element:<Sports/>
    },
    {
      path:'Acting',
      element:<Acting/>
    }

  ]

}


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
