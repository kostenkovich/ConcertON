import React from 'react';
import ButtonsBuy from './buttonsBuy';

import { showDescBarTick,  closeDescBarTick} from '../../../function/visual_func_reg';

import '../../../../style/buyTickets.css'

const BuyTickets = function(props){

function closeAllBuyTicket(){
        document.querySelector('.allTable').style.backgroundColor = " rgba(255, 255, 255, 0)"
        document.querySelector('.contBuy').style.height = "0px"
    
    setTimeout(() => {
        document.querySelector('.allTable').style.display = "none"
        document.querySelector('.blockThenk').style.display = "none"
        document.querySelector('.blockDont').style.display = "none"
        document.querySelector('.contBuy').style.height = "421px"
        document.querySelector('.blockBuy').style.marginLeft = "0px"
        document.querySelector('.blockDesc').style.display = "block"
        document.querySelector('.loadingBlock').style.backgroundColor = "rgba(29, 29, 29, 0.836)"
                document.querySelector('.prosses_before').style.backgroundColor = "rgb(51, 115, 235)"
                document.querySelector('.nameLoad').style.color = "rgb(255, 255, 255)"
                document.querySelector('.prosses').style.border = "2px solid rgb(238, 238, 238)"
                document.querySelector('.prosses_before').style.transition = "10s"
                document.querySelector('.prosses_before').style.marginLeft = "-300px"
                document.querySelector('#addBarTickBtn').style.backgroundColor = "rgb(241, 255, 47)";
            document.querySelector('#addBarTickBtn').style.boxShadow = "0 0 5px rgb(36, 36, 36)";
            document.querySelector('#addBarTickBtn').style.color = "rgb(54, 54, 54)";
            document.querySelector('.icon').style.marginTop = "-20px"
            
                
    }, 600)
}


function dateConcert(){
    return  new Date(props.concert.date).toISOString().substring(0,10).split("-").join(".");
}
function timeConcert(){
    return new Date(props.concert.time).toISOString().substring(11, 16);
}


    return(
    <div className='allTable'>
        <div className="closeBuyPanel" onClick={closeAllBuyTicket}></div>
        <div className="contBuy">
            <div className="loadingBlock">
                <div className="contLoad">
                    <div className="nameLoad">Operation...</div>
                    
                    <div className="prosses">
                        <div className="prosses_before"></div>
                    </div>
                </div>
            </div>
            <div className='blockBuy'>
                <div className='name'>Купить белеты</div>
                <div className="event">Событие: {props.concert.name}</div>
                <div className='dateConsertTick'>Дата: {dateConcert()}</div>
                <div className='timeConsertTick'>Время: {timeConcert()}</div>
                <div className="lastTickets">Осталось мест: {props.concert.place}</div>
                <div className="saleTickets">Цена: {props.concert.sale}грн</div>
                <div className="blockBarTickets">
                    <div className="saleBarTickets">Барный купон: {props.concert.barTicket}грн</div>
                    <div className="infSaleBarTickets" onClick={showDescBarTick}></div>
                </div>
                <ButtonsBuy concert={props.concert}/>
            </div>
            <div className="blockDesc">
                <div className='name'>Барный купон</div>
                <div className="text">Простота в работе. Мы приложили много усилий, чтобы работать на нашей бирже копирайтинга было максимально легко и удобно. Интуитивно понятный интерфейс, постоянное совершенствование функционала и подробный FAQ помогут в работе начинающим и обеспечат  комфорт постоянным пользователям сервиса Text.ru. Простота в работе. Мы приложили много усилий, чтобы работать на нашей бирже копирайтинга было максимально легко и удобно. Интуитивно понятный интерфейс, постоянное совершенствование функционала</div>
                <div className="contBtn">   
                    <div className="btnOk" onClick={closeDescBarTick}>Хорошо</div>
                </div> 
            </div>
            <div className="blockThenk">
                <div className="contThenk">
                    <div className="nameThank">Спасибо за покупку!</div>
                    <div className="blockImgThenk">
                        <div className="imgThenk"></div>
                    </div>
                    <div className="descThank">Билеты отправлены на вашу почту</div>
                </div>
            </div>
            <div className="blockDont">
                <div className="contThenk">
                    <div className="nameThank">Оплата не прошла</div>
                    
                    <div className="blockImgThenk">
                        <div className="imgDont"></div>
                    </div>
                    <div className="descThank">Попробуйте снова!</div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default BuyTickets;