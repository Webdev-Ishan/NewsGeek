import React from 'react'
import Navbar from './componnets/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './componnets/Footer'

function Root() {
  return (
    <div >
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Root
