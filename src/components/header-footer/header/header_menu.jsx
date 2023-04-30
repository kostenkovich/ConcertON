import React from 'react';
import {Link} from 'react-router-dom';

import { closeTopTab } from '../../function/visual_func_reg';

const HeaderMenu = function(props){

    if(props.title.id === 4) 
    return( 
    <a href={props.title.url} target="_blank" id={props.title.id} onClick={() => {
        document.getElementById(props.title.id + "").style.borderBottom = "1px solid white";
        if(window.screen.width <= 1100) closeTopTab();
        props.list.map(titleDab => {if(titleDab.id != props.title.id){
            document.getElementById(titleDab.id + "").style.borderBottom = "1px solid transparent";}})
        }}
    >{props.title.name}</a>
    )

    return(
        <Link to={props.title.url} id={props.title.id} key={props.title.id} onClick={() => {
            document.getElementById(props.title.id + "").style.borderBottom = "1px solid white";
            if(window.screen.width <= 1100) closeTopTab();
            props.list.map(titleDab => {if(titleDab.id != props.title.id){
                document.getElementById(titleDab.id + "").style.borderBottom = "1px solid transparent";}})
            }}
        >{props.title.name}</Link>
      )
}

export default HeaderMenu;