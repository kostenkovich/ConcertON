import React from 'react';

const PlaceList = function(props){
    
    if(props.place < 100) return(
        <div className='placeId'>Осталось мало мест: {props.place}</div>
    )
    return(
        <div className='placeId'>Мест осталось: {props.place}</div>
    )
}
      


export default PlaceList;