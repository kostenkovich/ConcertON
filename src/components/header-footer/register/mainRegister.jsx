import React from 'react';
import { useState, useContext } from 'react';
import '../../../style/register.css'

import eyesClose from '../../../media/icon/free-icon-close-eye-6704951.png'
import eyesOpen from '../../../media/icon/free-icon-open-eye-6704953.png'
import {changeReg, closeReg, changePassword, changePassword_2, completeEnterReg} from '../../function/visual_func_reg.js'
import { AccRegContext } from '../../../context/context_acc_reg';
import { MyEmail } from '../../../context/myEmail';
import { AllAccount } from '../../../context/all_account';



const MainRegister = function(props){
    const {isAccReg, setIsAccReg} = useContext(AccRegContext)
    const {myAcc, setMyAcc} = useContext(MyEmail)
    const {myAccount, setMyAccount} = useContext(AllAccount);


    let [valueEmail, setValueEmail] = useState("");
    let [valuePassword, setValuePassword] = useState("");
    


    function createProfl(e){
        e.preventDefault()
        if(valueEmail.length < 8 && valuePassword.length <= 6){
            document.querySelector(".block_reg_1").style.backgroundColor = "rgb(253, 30, 30)";
            document.querySelector("#email_dop").innerHTML = "Введите корректный имаил";
            document.querySelector("#password_dop").innerHTML = "Пароль должен быть больше 6 символов";
            document.querySelector("#password_dop").style.minWidth = "max-content"
        }
        else if(valueEmail.length < 8){
            
            
            document.querySelector(".block_reg_1").style.backgroundColor = "rgb(253, 30, 30)";
            document.querySelector("#email_dop").innerHTML = "Введите корректный имаил";
        }

        else if(valuePassword.length <= 6){
            
            
            document.querySelector(".block_reg_1").style.backgroundColor = "rgb(253, 30, 30)";
            document.querySelector("#password_dop").innerHTML = "Пароль должен быть больше 6 символов";
            document.querySelector("#password_dop").style.minWidth = "max-content"
        }
        
        else{
            for(let i = 0; i<allAccount.length; i++ ){
                if(valueEmail === allAccount[i].email){
                document.querySelector(".block_reg_1").style.backgroundColor = "rgb(253, 30, 30)";
                document.querySelector("#email_dop").innerHTML = "Данный имейл уже занят";
                return;
            }}
            document.querySelector(".block_reg_1").style.backgroundColor = "rgb(20, 182, 20)";
            document.querySelector("#password_dop").innerHTML = "GOOD";
            document.querySelector("#email_dop").innerHTML = "GOOD";
            
            setTimeout(closeReg, 1000)
            setTimeout(() => {
                completeEnterReg(); 
                localStorage.setItem('auth', 'true')
                setIsAccReg(true)
                localStorage.setItem('email', valueEmail)
                setMyAcc(localStorage.getItem('email'))
                let newId = (myAccount[myAccount.length - 1].id + 1);
                myAccount.push({
                    id: newId,                    
                    email: valueEmail,
                    password: valuePassword,
                    myConcert: []
                })
                console.log(myAccount)
                
            }, 1200)

            setTimeout(() => {
                document.querySelector(".block_reg_1").style.backgroundColor = "rgb(40, 115, 165)";
                setValuePassword("")
                setValueEmail("")
                document.querySelector("#password_dop").innerHTML = "Введите пароль";
                document.querySelector("#email_dop").innerHTML = "Введите имейл";
            }, 3000)
        } 
        if(valueEmail.length >= 8) document.querySelector("#email_dop").innerHTML = "GOOD";          
        if(valuePassword.length > 6) document.querySelector("#password_dop").innerHTML = "GOOD";         
    }

    let allAccount = props.accaunt;
    



    function inAcc(e){
        e.preventDefault()
        for(let i = 0; i<=allAccount.length; i++){
            console.log(allAccount[i].email, allAccount[i].password)
            console.log(allAccount)
            console.log(valueEmail)
            if(allAccount[i].email === valueEmail){
                document.querySelector("#email_dop_2").innerHTML = "GOOD";
                document.querySelector(".block_reg_2").style.backgroundColor = "rgb(20, 182, 20)";
                    if(allAccount[i].password === valuePassword){
                        document.querySelector("#password_dop_2").innerHTML = "GOOD";
                        document.querySelector(".block_reg_2").style.backgroundColor = "rgb(20, 182, 20)";
                        setTimeout(closeReg, 1000)

                        setTimeout(() => {
                            completeEnterReg();
                            localStorage.setItem('auth', 'true')
                            setIsAccReg(true)
                            localStorage.setItem('email', valueEmail)
                            setMyAcc(localStorage.getItem('email'))
                        }, 1200)

                        setTimeout(() => {
                            document.querySelector(".block_reg_2").style.backgroundColor = "rgb(40, 115, 165)";
                            setValuePassword("")
                            setValueEmail("")
                            document.querySelector("#password_dop_2").innerHTML = "Введите пароль";
                            document.querySelector("#email_dop_2").innerHTML = "Введите имейл";
                        }, 3000)
                    }else{
                        document.querySelector(".block_reg_2").style.backgroundColor = "rgb(253, 30, 30)";
                        document.querySelector("#password_dop_2").innerHTML = "Неверный пароль";
                    }    
                return console.log(allAccount[i].id)
            }else{
                document.querySelector(".block_reg_2").style.backgroundColor = "rgb(253, 30, 30)";
                document.querySelector("#email_dop_2").innerHTML = "Данный имейл не найден";
            }
        
        }
    }
 

    return(
        <div className='registerAll'>
            <div className='block_reg_1'>
                <div className='closed' onClick={() => { 
                closeReg();
                setValueEmail(valueEmail = "")
                setValuePassword(valuePassword = "")
                }}></div>
                <div className='nameReg'>Зарегестрированы?</div>
                <div className='textReg'><div className="dop" onClick={changeReg}>Войдите</div> в аккаунт</div>
                <form>
                    <div className='contInput'>
                        <div className='topName' id='email_dop'>
                        Введите имейл
                        </div>
                        <input
                        type='email' 
                        value = {valueEmail}
                        onChange = {event => setValueEmail(event.target.value)}
                        placeholder="Email"
                        />
                    </div>
                    <div className='contInput'>
                        <div className='topName' id='password_dop'>
                        Введите пароль
                        </div>
                        <input 
                        id='inputformReg'
                        type='password' 
                        placeholder="Password"
                        value = {valuePassword}
                        onChange = {event => setValuePassword(event.target.value)}
                        />
                        <img id='eyesClose' onClick={changePassword} src={eyesClose}/>
                        <img id='eyesOpen'  onClick={changePassword} src={eyesOpen}/>
                    </div>
                    <button onClick={createProfl}>Зарегестрироваться</button> 
                </form>

            </div>
            <div className='block_reg_2'>
                <div className='closed' onClick={() => { 
                closeReg();
                setValueEmail(valueEmail = "")
                setValuePassword(valuePassword = "")
                }}></div>
                <div className='nameReg' style={{minWidth: "273px"}}>Войдите в аккаунт!</div>
                <div className='textReg'>Или<div className="dop" onClick={changeReg} style={{marginLeft: "10px"}}> зарегестрируйтесь</div></div>
                <form>
                    <div className='contInput'>
                        <div className='topName' id='email_dop_2'>
                        Введите имейл 
                        </div>
                        <input 
                        type='email'
                        placeholder="Email"
                        value = {valueEmail}
                        onChange = {event => setValueEmail(event.target.value)}
                        />
                    </div>
                    <div className='contInput'>
                        <div className='topName' id='password_dop_2'>
                        Введите пароль
                        </div>
                        <input 
                        type='password' 
                        id='inputformReg_2'
                        placeholder="Password"
                        value = {valuePassword}
                        onChange = {event => setValuePassword(event.target.value)}
                        />
                        <img id='eyesClose_2' onClick={changePassword_2} src={eyesClose}/>
                        <img id='eyesOpen_2'  onClick={changePassword_2} src={eyesOpen}/>
                    </div>
                    <button onClick={inAcc}>Войти в аккаунт</button> 
                </form>
            </div>
        </div>
      )
}

export default MainRegister;