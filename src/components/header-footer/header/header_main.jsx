import React, {useState, useEffect, useContext} from 'react';

import { useNavigate } from 'react-router-dom';

import HeaderMenu from './header_menu';
import MainRegister from '../register/mainRegister';

import {titleHeader, openInMenu, openRegMenu, exitMyProfile, closeTopTab} from '../../function/visual_func_reg.js'
import { AccRegContext } from '../../../context/context_acc_reg';
import { completeEnterReg } from '../../function/visual_func_reg.js';
import { MyEmail } from '../../../context/myEmail';
import { AllAccount } from '../../../context/all_account';

const Header = function(){

    const {myAccount, setMyAccount} = useContext(AllAccount);

    let allAccount = myAccount;

    const {isAccReg, setIsAccReg} = useContext(AccRegContext)
    const {myAcc, setMyAcc} = useContext(MyEmail)

    const history = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('auth'))
        if(localStorage.getItem('auth')){
            completeEnterReg(); 
            setIsAccReg(true)
            setMyAcc(localStorage.getItem('email'))
        }}, [])


    function onlStoreEx() {
        localStorage.removeItem('auth') 
        localStorage.removeItem('email') 
        setIsAccReg(false)
    }

    let click = false;

    

    function openTabMenu(){
        if(!click){
        document.querySelector("#menuTop").style.display = "block";

        
            //
            setTimeout(() => {
                click = true;

                document.querySelector(".line2").style.backgroundColor = "transparent";
                document.querySelector(".line1").style.top = "16px";
                document.querySelector(".line1").style.transform = "rotate(-45deg)";
                document.querySelector(".line3").style.top = "16px";
                document.querySelector(".line3").style.transform = "rotate(45deg)";
                document.querySelector(".line3").style.marginTop = "13px";
                if(window.screen.width <= 610 && window.screen.width >= 536){
                    document.querySelector(".tabCont").style.borderRadius = "5px";
                    document.querySelector("#menuTop").style.borderRadius = "5px";
                }else if(window.screen.width <= 385){
                    document.querySelector("#menuTop").style.borderRadius = "5px 5px 5px 5px";
                }else{
                    document.querySelector(".tabCont").style.borderRadius = "5px 5px 0px 0px";
                    document.querySelector("#menuTop").style.borderRadius = "0px 5px 5px 5px";
                }
                document.querySelector("#menuTop").style.height = "341px";
                document.querySelector("#menuTop").style.padding = "15px 15px";
                
                document.querySelector("#menuTop").style.border = "1px solid white";
                
                document.querySelector("#menuTop").style.marginTop = "-1px";
                document.querySelector("#menuTop").style.borderTop = "1px solid white";
            }, 20)    
            
        }
        else{
            closeTopTab();
        click = false;
        }
    }

    return(
    <header>
        
        <div class="topMenu">
        <div className="tabButton">
            <div className="tabCont" onClick={openTabMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
        <div className="logoHeader">Concert<span>ON</span></div>
            <ul id='menuTop'>
                {titleHeader.map(title => 
                    <HeaderMenu list={titleHeader} title={title}/>
                )}

                
                
                
                <li>
                    <div class="register">
                        <div onClick={openRegMenu} class="reg">Зарегестрироваться</div>
                        <div onClick={openInMenu} class="sign">Войти</div>
                        <div className="myAcc">{myAcc}</div>
                        <div onClick={() => {exitMyProfile(); onlStoreEx(); if(window.screen.width <= 1100) closeTopTab();}} className="outMyAcc">Выйти</div>
                    </div>
                </li>
            </ul>
        </div>
        <MainRegister accaunt={allAccount}/>
    </header>
      )
}

export default Header;