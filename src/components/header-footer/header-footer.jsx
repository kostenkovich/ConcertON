import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header_main';
import Footer from './footer/footer';
const HeaderFooter = function(){

    
    return(
        <>
        <Header/>

        <Outlet/>

        <Footer/>
        </>
      )
}

export default HeaderFooter;