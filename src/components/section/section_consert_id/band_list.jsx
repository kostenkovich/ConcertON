import React from 'react';

const BandList = function(props){
    
    if (props.band.length > 1)return(
    <>
        <div className='groupeList'>Состав группы: </div>
        <ul>
            {props.band.map(singer => <li>{singer}</li>)}
        </ul>
    </>
    
    )
    return(
    <>
        <div className='groupeList'>Учасник: </div>
        <ul>
            {props.band.map(singer => <li>{singer}</li>)}
        </ul>
    </>
        
    )
}
      


export default BandList;