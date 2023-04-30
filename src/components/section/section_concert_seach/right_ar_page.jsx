import React from 'react';
import { Link } from 'react-router-dom';

const RightArNavPage = function(props){

    function savePageBtnPlus(){
        const res = Number(props.id) + 1;
        if(res > props.arrPage.length) return props.id;
        return res;
    }

    function visualPageIndication(){
        let b = document.querySelectorAll("#pageBtn");
                        let p = [];
                        for(let i = 0; i < b.length; i++) p.push(b[i]);
                        p.map(elem => elem.style.border = "none");

        document.querySelector(".pageBtn" + savePageBtnPlus()).style.borderBottom = "1px solid white";
    }

    if(props.arrPage.length > 1) {
        return(
        <Link
        to={'/concerts/page/' + savePageBtnPlus()}
        id="savePagePlus"
        onClick={visualPageIndication}
        >
            Вперед
        </Link>
      )}
      return <></>
}

export default RightArNavPage;