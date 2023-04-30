
import React from 'react';



const BottomPage = function(props){
    
    if(props.concert.id === props.value){ props.page(); 
    console.log("con id: " + props.concert.id, "pageNum: " + props.pageNumber, "value: " + props.value)  
    return(<li>{props.pageNumber}</li>)}

    
    //for(let i = 0; i < fromt.length; i++)if(i = consert) consert = consert+10; page++;  {}
}

export default BottomPage;