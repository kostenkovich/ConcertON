import React, {useState, useContext} from 'react';

import { AllAccount } from '../../../../context/all_account';
    

const ButtonsBuy = function(props){

    let [howMany, sethowMany] = useState(1);
    
    let [barSelect, setbarSelect] = useState(false);
    let [everyPrice, setEveryPrice] = useState(props.concert.sale)

    const {myAccount, setMyAccount} = useContext(AllAccount);

    function Plus(){
        if(howMany === props.concert.place) return
        if(howMany === 9)document.querySelector('.plus').style.margin = "2px 0 0 calc(-40% + 66px)"
        if(howMany === 99)document.querySelector('.plus').style.margin = "2px 0 0 calc(-40% + 75px)"
        sethowMany(howMany + 1)
        allSale()
    }
    function Minus(){
        if(howMany === 0) return
        if(howMany === 10)document.querySelector('.plus').style.margin = "2px 0 0 calc(-40% + 57px)"
        if(howMany === 100)document.querySelector('.plus').style.margin = "2px 0 0 calc(-40% + 66px)"
        sethowMany(howMany - 1)
        allSale()
    }

    function setOptions() {
        setbarSelect(barSelect = false)
        setEveryPrice(everyPrice = 600)
        sethowMany(howMany = 1)
    }
    

    function barChoose(){
        if(!barSelect){
            setbarSelect(barSelect = true)
            document.querySelector('#addBarTickBtn').style.backgroundColor = "rgba(107, 107, 107, 0)";
            document.querySelector('#addBarTickBtn').style.boxShadow = "0 0 2px rgb(10, 10, 10)";
            document.querySelector('#addBarTickBtn').style.color = "white";
            document.querySelector('.icon').style.marginTop = "6px"
        }else{
            document.querySelector('#addBarTickBtn').style.backgroundColor = "rgb(241, 255, 47)";
            document.querySelector('#addBarTickBtn').style.boxShadow = "0 0 5px rgb(36, 36, 36)";
            document.querySelector('#addBarTickBtn').style.color = "rgb(54, 54, 54)";
            document.querySelector('.icon').style.marginTop = "-20px"
            setbarSelect(barSelect = false)}
            allSale()
    }

    function allSale() {
        if(barSelect)return setEveryPrice( everyPrice = ((props.concert.sale + props.concert.barTicket) * howMany))
        return setEveryPrice( everyPrice = props.concert.sale * howMany);

        
    }

    let operation = true;
    let prosses = true;

    function lodingBuy(){
        
        setTimeout(() => document.querySelector('.prosses_before').style.marginLeft = "0px",10)
        document.querySelector('.loadingBlock').style.display = "flex";
        document.querySelector('.closeBuyPanel').style.display = "none"
        
        setTimeout(() => {
            prosses = false; 
            buyTicketMainBtn();
            setTimeout(() => document.querySelector('.loadingBlock').style.backgroundColor = "rgba(29, 29, 29, 0.000)", 400) 
            document.querySelector('.prosses_before').style.backgroundColor = "rgba(51, 115, 235, 0)"
            document.querySelector('.nameLoad').style.color = "rgba(255, 255, 255, 0)"
            document.querySelector('.prosses').style.border = "2px solid rgba(238, 238, 238, 0)"
            document.querySelector('.prosses_before').style.transition = "400ms" 
            setTimeout(() => {
                document.querySelector('.loadingBlock').style.display = "none"
                
            }, 800)
        }, 3000);
        
    }

    function buyTicketMainBtn(){

        if(prosses){
            lodingBuy();
            
            setTimeout(() => document.querySelector('.loadingBlock').style.backgroundColor = "rgba(29, 29, 29, 0.836)", 10)
            return;
        }

        document.querySelector('.blockDesc').style.display = "none";

        setTimeout(() => {
            document.querySelector('.blockBuy').style.marginLeft = "500px"
            setTimeout(() => {
                document.querySelector('.contBuy').style.height = "300px"
                
                setOptions();
                
                for(let i = 0; i< myAccount.length; i++){
                    if(myAccount[i].email === localStorage.getItem('email'))
                    myAccount[i].myConcert.push(props.concert.id)
                }
                console.log(myAccount)   
            }, 600)
        }, 2000) 

        if(operation){
        document.querySelector('.blockThenk').style.display = "flex";
        setTimeout(() => {
            document.querySelector('.allTable').style.backgroundColor = " rgba(255, 255, 255, 0)"
            document.querySelector('.contBuy').style.height = "0px"
        }, 7000)
        setTimeout(() => {
            document.querySelector('.allTable').style.display = "none"
            document.querySelector('.blockThenk').style.display = "none"
            document.querySelector('.blockDont').style.display = "none"
            document.querySelector('.contBuy').style.height = "421px"
            document.querySelector('.blockBuy').style.marginLeft = "0px"
            document.querySelector('.blockDesc').style.display = "block"
            document.querySelector('.loadingBlock').style.backgroundColor = "rgba(29, 29, 29, 0.836)"
                document.querySelector('.prosses_before').style.backgroundColor = "rgb(51, 115, 235)"
                document.querySelector('.prosses_before').style.marginLeft = "-300px"
                document.querySelector('.nameLoad').style.color = "rgb(255, 255, 255)"
                document.querySelector('.prosses').style.border = "2px solid rgb(238, 238, 238)"
                document.querySelector('.prosses_before').style.transition = "10s"
                document.querySelector('.closeBuyPanel').style.display = "flex"
                document.querySelector('#addBarTickBtn').style.backgroundColor = "rgb(241, 255, 47)";
            document.querySelector('#addBarTickBtn').style.boxShadow = "0 0 5px rgb(36, 36, 36)";
            document.querySelector('#addBarTickBtn').style.color = "rgb(54, 54, 54)";
            document.querySelector('.icon').style.marginTop = "-20px"
            
        }, 7610)
        operation = true;
        prosses = true;
        return;
        }else{
        setTimeout(() => {
            document.querySelector('.allTable').style.backgroundColor = " rgba(255, 255, 255, 0)"
            document.querySelector('.contBuy').style.height = "0px"
        }, 7000)
        setTimeout(() => {
            document.querySelector('.allTable').style.display = "none"
            document.querySelector('.blockThenk').style.display = "none"
            document.querySelector('.blockDont').style.display = "none"
            document.querySelector('.contBuy').style.height = "421px"
            document.querySelector('.blockBuy').style.marginLeft = "0px"
            document.querySelector('.blockDesc').style.display = "block"
            document.querySelector('.loadingBlock').style.backgroundColor = "rgba(29, 29, 29, 0.836)"
                document.querySelector('.prosses_before').style.backgroundColor = "rgb(51, 115, 235)"
                document.querySelector('.prosses_before').style.marginLeft = "-300px"
                document.querySelector('.nameLoad').style.color = "rgb(255, 255, 255)"
                document.querySelector('.prosses').style.border = "2px solid rgb(238, 238, 238)"
                document.querySelector('.prosses_before').style.transition = "10s"
                document.querySelector('.closeBuyPanel').style.display = "flex"
                document.querySelector('#addBarTickBtn').style.backgroundColor = "rgb(241, 255, 47)";
            document.querySelector('#addBarTickBtn').style.boxShadow = "0 0 5px rgb(36, 36, 36)";
            document.querySelector('#addBarTickBtn').style.color = "rgb(54, 54, 54)";
            document.querySelector('.icon').style.marginTop = "-20px"
            
                operation = true;
                prosses = true;
        }, 7610)
        document.querySelector('.blockDont').style.display = "flex";
        return;
        }
    }
    

    
    


    return(
        <div className='bottomCont'>
            <div className="mehano">
                <div className="howMany">Количество: </div>
                <div className="minus" onClick={Minus}></div>
                <div className="value">{howMany}</div>
                <div className="plus" onClick={Plus}></div>
                <div id="addBarTickBtn" onClick={barChoose}>Добавить барный купон</div>
                <div className="ind"><div className="icon"></div></div>
            </div>
            <div className="lastBlock">
                <div className="allSale">Цена: {everyPrice}грн</div>
                <div id="buyTickBtn" onClick={buyTicketMainBtn}>Купить</div>
            </div>
            

        </div>
      )
}

export default ButtonsBuy;