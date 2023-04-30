import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';




const Pages = function(props){
    
    return(
            <Link
                className={'pageBtn' + props.el}
                to={'/concerts/page/' + props.el}
                id="pageBtn"   
                onClick={
                    () => {
                        let b = document.querySelectorAll("#pageBtn");
                        let p = [];
                        for(let i = 0; i < b.length; i++) p.push(b[i]);
                        p.map(elem => elem.style.border = "none")
                        document.querySelector(".pageBtn" + props.el).style.borderBottom = "1px solid white";
                    }
                }
            >
            {props.el}
            </Link>
    )
}

export default Pages;