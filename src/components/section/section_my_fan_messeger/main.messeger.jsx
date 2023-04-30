import React from 'react';

import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';

import { AccRegContext } from '../../../context/context_acc_reg';
import { AllAccount } from '../../../context/all_account';

import Cont from './cont';

const FanClubId = function(props){

    const params = useParams();
    const id = params.id;
    const history = useNavigate();

    const [myInput, setMyInput] = useState('');
    const [allMessege, setAllMessege] = useState([]);

    const {isAccReg, setIsAccReg} = useContext(AccRegContext)
    const {myAccount, setMyAccount} = useContext(AllAccount);


    function thisFanClub() {
        let numId = Number(id);
        for(let i = 0; i < props.concerts.length; i++){
            if(props.concerts[i].id === numId) return props.concerts[i];
        }
    }

    function sendMessege(e){
        e.preventDefault()
        let myMessege = {

            id: allMessege.length + 1,
            name: myInput,
            email: localStorage.getItem('email')

        }
        if(myMessege.name === "" || myMessege.name === " ") return;
        allMessege.push(myMessege)
        sendfetch(myMessege);
    }
    

    async function sendfetch(obj){

    await fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'mode': 'no-cors',
            'cache': 'default'
        },
        body: JSON.stringify(obj)
    });
    await iSeeYou();
    await setMyInput('');
    }
    
    async function getfetch(){
        return await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
        .catch(err => {if(err) alert("Произошла ошибка! Нам очень жаль! Error: " + err )})
        .then(res => res.json())
        .then(data => setAllMessege(allMessege.concat(data)))
    }
    
    function cont(){
        getfetch();
        
    }

    function thisAcc() {
        for(let i = 0; i <= myAccount.length; i++){
            console.log(i)
            if(myAccount[i].email === localStorage.getItem('email')) return myAccount[i];
            return {myConcert: [i]};
        } 
    }
    let howCon = thisAcc().myConcert.length;
    console.log(thisAcc())
    console.log(localStorage.getItem('email'))
    console.log(myAccount[2].email)
    console.log(myAccount)
    console.log(howCon)
    
    useEffect(() => {
        cont();
        
        
    }, [])
   
    function iSeeYou() { if(allMessege.length !== 0) document.querySelector('.messegeCont').lastChild.scrollIntoView({block: "center", behavior: "smooth"})}
    
    function candy() {if((howCon !== 0 || howCon !== undefined) && isAccReg === true) iSeeYou(); return};
    candy();
    
    


    if(!isAccReg){
        return(
            <div className="cont">
                <div className="reserveCont">
                    <div className="textRegNeed">Для просмотра доступных вам фан клубов необходимо войти в аккаунт или зарегестрироваться и преобрести билет</div>
                </div>
            </div>
        )}
    
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
        <div className="conteinerMyFan_2">
            <div className="topPanel">
                <div className="retutnBack" onClick={() => history(-1)}>Назад</div>
                <div className="nameConcertFan">{thisFanClub().name}</div>
                <div className="howManyFan">{thisFanClub().place - thisFanClub().lastPlace}</div>
            </div>
            <div className="contMess">
                <div className="blockFanMess">
                    <ul className='messegeCont'>
                        { allMessege.length === 0 
                                      ? 
                                      <div className='loading'>Loading...</div>
                                      :
                                      allMessege.map(mess => <Cont allMessege={allMessege} mess={mess}/>)           
                        }
                        { allMessege.length === 0 
                                      ? 
                                      <></>
                                      :
                                      <div className="alert">Вы в чате</div>      
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="bottomPanel">
                <form className='formMessege'>
                    <input 
                    type="text"
                    className='inputMessege'
                    placeholder='Напишите здесь свое сообщение...'
                    value={myInput}
                    onChange={e => setMyInput(e.target.value)}
                    />
                    <button className='buttonMessege' onClick={sendMessege}>Отправить</button>
                </form>
            </div>
        </div>
    )
}
export default FanClubId;