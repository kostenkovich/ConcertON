import React, {useState} from 'react';


const Cont = function(props){
    
    if(props.mess.email === localStorage.getItem('email')){
        return(
        <div 
        className="allMess" 
        style={{
            display: "flex",
            justifyContent: "right",
        }}>
                <div 
                className="nameEmail"
                style={{
                    top: "0px",
                    marginTop: "7px"
                }}
                >   {props.mess.email}</div>
                <li 
                id={'messege' + props.mess.id} 
                style={{
                    backgroundColor: "#298b39",
                    borderRadius: "4px 6px 0px 4px"
                }}
                >
                    {props.mess.name}
                </li>
        </div>)
    }

    return(
        <div className="allMess">
            <div className="nameEmail">{props.mess.email}</div>
            <li id={'messege' + props.mess.id}>{props.mess.name}</li>
        </div>
)}

export default Cont;