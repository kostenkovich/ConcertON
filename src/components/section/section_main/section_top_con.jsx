import React from 'react';
import { Link } from 'react-router-dom';

import allIcon from '../../../media/icon/all_icon';
import Icons from '../section_consert_id/icon';

const TopConcert = function(props){
    
    function dateConcert(){
        return  new Date(props.concert.date).toISOString().substring(0,10).split("-").join(".");
    }
    function timeConcert(){
        return new Date(props.concert.time).toISOString().substring(11, 16);
    }

    return(
                <Link to={"/concert/" + props.concert.id} key={props.concert.id}>
                    
                        <div class="topConcert">
                            <div class="nameTopConcert">{props.concert.name}</div>
                            <div class="descTopConcert">{props.concert.description}</div>
                            <div class="iconTopConcert">
                                <ul>
                                    {allIcon.map(icon => <Icons icon={icon} ask={props.concert.ask}/> )}
                                </ul>
                            </div>
                            <div className='timeTopConcert'>{timeConcert()}</div>
                            <div className='dateTopConcert'>{dateConcert()}</div>                            
                            <div class="saleTopConcert">
                                от {props.concert.sale}грн
                            </div>
                            <button>
                                Купить белеты
                            </button>
                        </div>
                    
                </Link>
      )
}

export default TopConcert;