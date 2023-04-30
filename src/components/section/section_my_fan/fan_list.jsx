import React from 'react';

import { Link } from 'react-router-dom';

const FanList = function(props){

    
    for(let i = 0; i < props.concerts.length; i++){
    if(props.concerts[i].id === props.consertList){

    function lastMessege() {
        fetch()
        .catch(err => {return <div className='title'>Error: {err}</div>})
        .then()
        .then(messeges => {
            let allMesseges = messeges.json()
            let index = allMesseges.length - 1;
            return allMesseges[index].text
        })
        
            
    }


    return(
        <Link to={"/my-fan/fan-club/" + props.concerts[i].id}>
                <div className="nameFan">{props.concerts[i].name}</div>
        </Link> 
        //<div className="isWasWill">{() => {console.log(Date.now)}}</div>
)}
}
}
export default FanList;