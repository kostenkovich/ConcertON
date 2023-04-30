import React from 'react';

const Icons = function(props){



    if(props.ask[props.icon.id].turn === true) return <img src={props.icon.value}/>
}

export default Icons;
