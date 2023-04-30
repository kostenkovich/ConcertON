import React from 'react';
import { Link } from 'react-router-dom';

import { openBuyTicketPanel } from '../../function/visual_func_reg';

import Icons from '../section_consert_id/icon';
import allIcon from '../../../media/icon/all_icon';

const Consert = function(props){

function backToTop(){
    window.scrollTo(0, 0)
}

function dateConcert(){
    return  new Date(props.concert.date).toISOString().substring(0,10).split("-").join(".");
}
function timeConcert(){
    return new Date(props.concert.time).toISOString().substring(11, 16);
}


    return(
        <div className='conteiner'>
        <Link 
        to={"/concert/" + (props.concert.id - 2)} 
        key={props.concert.id}
        onClick={backToTop()}
        >
        
            <div className='nameCon'>{props.concert.name}</div>
            <div className='descripCon'>{props.concert.description}</div>
            <div className='iconCon'>
                <ul>
                {allIcon.map(icon => <Icons icon={icon} ask={props.concert.ask}/> )}
                </ul>
            </div>
            <div className='blockBotInf'>
                <div className='timeCon'>{timeConcert()}</div>
                <div className='dateCon'>{dateConcert()}</div>
                <div className='saleCon'>от {props.concert.sale}грн</div>
            </div>
                <button>Купить белеты</button>
            
            
        </Link>
        </div>
      )
}

export default Consert;