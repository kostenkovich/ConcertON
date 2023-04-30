import React, {useState, useContext, useEffect} from 'react';

import { AccRegContext } from '../../../context/context_acc_reg';
import { AllAccount } from '../../../context/all_account';

import FanList from './fan_list';

const MyFan = function(props){

    const {isAccReg, setIsAccReg} = useContext(AccRegContext)
    const {myAccount, setMyAccount} = useContext(AllAccount);
    console.log(myAccount)
    const thisAcc = () => {
        for(let i = 0; i< myAccount.length; i++){
            console.log(i)
            if(myAccount[i].email === localStorage.getItem('email'))
            return myAccount[i];
        } 
    }
    console.log(thisAcc())


    if(!isAccReg){
        return(
            <div className="cont">
                <div className="reserveCont">
                    <div className="textRegNeed">Для просмотра доступных вам фан клубов необходимо войти в аккаунт или зарегестрироваться и преобрести билет</div>
                </div>
            </div>
        )}
        console.log(thisAcc())
    let howCon = thisAcc().myConcert.length;
    console.log(howCon)
    if((howCon === 0 || howCon === undefined) && isAccReg === true)
        return(
            <div className="cont">
                <div className="reserveCont">
                    <div className="textRegNeed">Для просмотра доступных вам фан клубов необходимо преобрести билет</div>
                </div>
            </div>
        )
    
        return(
        <div className="cont_2"> 
            <div className="conteinerMyFan">
                <div className="title">Доступные фан клубы</div>
                <ul>
                    {
                    thisAcc().myConcert.map(fan => <FanList consertList={fan} concerts={props.concerts}/>)
                    }
                </ul>
            </div>
        </div>
        )
}

export default MyFan;