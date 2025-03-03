import React from 'react'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({numCartItems}) => {
    return (
        <div>
            <NavBar numCartItems={ numCartItems} />
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout