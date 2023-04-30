import React from 'react';
import barMenuImg from '../../../media/img/БАР-сторона-1-1.jpg'
const BarMenu = function(props){
    
    return(
        
    <section>
        <div class="firstConteiner">
            <div class="block_1" style={{margin: "80px 0", width: "100%", display: 'flex', justifyContent: 'center'}}>
                <img style={{boxShadow: "0 0 10px black"}} src={barMenuImg}/>
            </div>
        </div>
    </section>
        
      )
}

export default BarMenu;