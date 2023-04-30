import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BandList from './band_list';
import PlaceList from './place_list';
import Icons from './icon';
import BuyTickets from './buy_tickets/main_buy';

import { AccRegContext } from '../../../context/context_acc_reg';
import { openBuyTicketPanel, openRegMenu } from '../../function/visual_func_reg';
import allIcon from '../../../media/icon/all_icon';



const SectionId = function(props){

    const {isAccReg, setIsAccReg} = useContext(AccRegContext)
    
    const params = useParams();
    const id = params.id;
    

    function checkAuth(){
        console.log(isAccReg)
        if(!isAccReg){alert("Для покупки билетов необходимо зарегестрироваться!"); openRegMenu(); return;}
        openBuyTicketPanel();
    }
    

    function dateConcert(){
        return  new Date(props.concerts[id].date).toISOString().substring(0,10).split("-").join(".");
    }
    function timeConcert(){
        return new Date(props.concerts[id].time).toISOString().substring(11, 16);
    }


    return(
    <section>
        <BuyTickets concert={props.concerts[id]}/>
        <div className='sectionConsertId'>
            
            <div className='topInf'>
                <div className='nameGroupId'>{props.concerts[id].name}</div>
                
                <div className='textDescription'>{props.concerts[id].description}</div>
                
                <BandList band={props.concerts[id].band}/>
                <div className='infSecId'>
                    <ul>
            {allIcon.map(icon => <Icons icon={icon} ask={props.concerts[id].ask}/> )}
                    </ul>
                </div>
            </div>
            <div className='bottomInf'> 
                <div className='dateConsertId'>Дата концерта: {dateConcert()}</div>
                <div className='timeConsertId'>Время начала концерта: {timeConcert()}</div>       
                <PlaceList place={props.concerts[id].place}/>
                <div className='saleId'>Цена: {props.concerts[id].sale}грн</div>
                
                <button onClick={checkAuth}>Купить белеты</button>
                    
            </div>   
             
        </div>
            

    </section>
      )
}

export default SectionId;