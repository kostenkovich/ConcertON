import React from 'react';
import { Link } from 'react-router-dom';

const LeftArNavPage = function(props){

    function savePageBtnMinus(){
        const res = Number(props.id) - 1;
        if(res < props.arrPage[0]) return props.id;
        return res;
    }

    function visualPageIndication(){
        let b = document.querySelectorAll("#pageBtn");
                        let p = [];
                        for(let i = 0; i < b.length; i++) p.push(b[i]);
                        p.map(elem => elem.style.border = "none");

        document.querySelector(".pageBtn" + savePageBtnMinus()).style.borderBottom = "1px solid white";
    }

    if(props.arrPage.length > 1) {
    return(
        <Link
        to={'/concerts/page/' + savePageBtnMinus()}
        id="savePageMinus"
        onClick={visualPageIndication}
        >
            Назад
        </Link>
      )}
    return <></>
}

export default LeftArNavPage;