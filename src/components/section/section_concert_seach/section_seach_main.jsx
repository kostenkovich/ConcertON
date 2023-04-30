import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import Consert from './consert';
import BottomPage from './bottomPage';
import RightArNavPage from './right_ar_page';
import LeftArNavPage from './left_ar_page';
import Pages from './pages';

import { useState, useContext } from 'react';



const SeachConsert = function(props){
    
    const arr = [1, 1, 1,1,1,1,1,1,1,1 ,2,2,2,2,2,2,2,2,2,2,3,3, 3, 3,3,3,3,3,3,3, 4,4,4,4,4,4,4,4,4,4]

    const [isMaxSale, setIsMaxSale] = useState(null);
    const [isMinSale, setIsMinSale] = useState(null);
    const [isSaleFilterBtn, setIsSaleFilterBtn] = useState(false);

    const [checkedIsTop, setCheckedIsTop] = useState(false);
    const [checkedIsHot, setCheckedIsHot] = useState(false);
    const [checkedIsSale, setCheckedIsSale] = useState(false);
    const [checkedIsNight, setCheckedIsNight] = useState(false);
    const [checkedIsDay, setCheckedIsDay] = useState(false);

    const [seachQuer, setSeachQuer] = useState('');
    const [btnSeachQuer, setBtnSeachQuer] = useState(false);

    
    const params = useParams();
    const id = params.id;

    const dopFuncPage = () => {if(pages().length <= 1){
        document.querySelector("#savePageMinus").style.visibility = "hidden";
        document.querySelector("#savePagePlus").style.visibility = "hidden";
        return;
    }
    document.querySelector("#savePageMinus").style.visibility = "visible";
    document.querySelector("#savePagePlus").style.visibility = "visible";
    
}



function saleSort() {
    
    let all = props.concerts;
    if(btnSeachQuer && seachQuer !== ""){
        let sortedConsertSeach = [];
            let inputArrSym = seachQuer.split(' ');
                for(let i = 0; i < inputArrSym.length; i++){
                    for(let u = 0; u < all.length; u++){
                        let concertArrName = all[u].name.split(' ');
                        let concertArrInName = [];
                        if(all[u].inName !== undefined) concertArrInName = all[u].inName.split(' ');
                            concertArrName.filter(word => {
                                if(word === inputArrSym[i]) sortedConsertSeach.push(all[u])
                            })
                            concertArrInName.filter(word => {
                                if(word === inputArrSym[i]) sortedConsertSeach.push(all[u])
                            })
                    }
                }
        
        all = sortedConsertSeach;
    }

    if(checkedIsTop){
        let topSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].ask[0].turn === true) topSort.push(all[i]);
        }
        console.log(topSort)
        all = topSort;
    }

    if(checkedIsHot){
        let topSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].ask[1].turn === true) topSort.push(all[i]);
        }
        console.log(topSort)
        all = topSort;
    }

    if(checkedIsSale){
        let topSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].ask[3].turn === true) topSort.push(all[i]);
        }
        console.log(topSort)
        all = topSort;
    }

    if(checkedIsDay){
        let topSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].ask[4].turn === true) topSort.push(all[i]);
        }
        console.log(topSort)
        all = topSort;
    }

    if(checkedIsNight){
        let topSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].ask[5].turn === true) topSort.push(all[i]);
        }
        console.log(topSort)
        all = topSort;
    }

    
    if(isSaleFilterBtn && isMinSale !== "" && isMaxSale !== ""){
        let saleSort = [];
        for(let i = 0; i < all.length; i++){
            if(all[i].sale >= isMinSale){
                if(all[i].sale <= isMaxSale) saleSort.push(all[i]);
            }
        }
        console.log(saleSort)
        
        return saleSort;
    }
    return all;
}

let sortConcerts = saleSort();

const pages = () =>{
    const num = (sortConcerts.length / 10);       //props.concerts.length / 10 + 1;
    console.log(num)
    let page = [];

        if(Number.isInteger(num)){
            for(let i = 1; i <= num; i++){
                page.push(i)
            }
            if(page.length <= 1) return []
            return page;
        }

        for(let i = 1; i <= (num + 1); i++){
            page.push(i)
        }
        if(page.length <= 1) return []
        return page;
    
}


    function visibleConcerts() {
            let visible = [];
            for(let i = 0; i<10; i++){

                if(sortConcerts[(id - 1) * 10 + i] === undefined) return visible;

                visible.push(sortConcerts[(id - 1) * 10 + i])
                //console.log(props.concerts[(id - 1) * 10 + i])
            }
            
            return visible;
    }
    
    function change1(){
        if(checkedIsTop === true){
          document.querySelector("#beforeLabelVis1").style.backgroundColor = "rgb(34 71 100)";
          setCheckedIsTop(false)
          
          }
        else{
        document.querySelector("#beforeLabelVis1").style.backgroundColor = "rgb(0 197 57)";
        setCheckedIsTop(true)
      }}

      function change2(){
        if(checkedIsHot === true){
          document.querySelector("#beforeLabelVis2").style.backgroundColor = "rgb(34 71 100)";
          setCheckedIsHot(false)
          
          }
        else{
        document.querySelector("#beforeLabelVis2").style.backgroundColor = "rgb(0 197 57)";
        setCheckedIsHot(true)
      }}

      function change3(){
        if(checkedIsSale === true){
          document.querySelector("#beforeLabelVis3").style.backgroundColor = "rgb(34 71 100)";
          setCheckedIsSale(false)
          
          }
        else{
        document.querySelector("#beforeLabelVis3").style.backgroundColor = "rgb(0 197 57)";
        setCheckedIsSale(true)
      }}

      function change4(){
        if(checkedIsDay === true){
          document.querySelector("#beforeLabelVis4").style.backgroundColor = "rgb(34 71 100)";
          setCheckedIsDay(false)
          
          }
        else{
        document.querySelector("#beforeLabelVis4").style.backgroundColor = "rgb(0 197 57)";
        setCheckedIsDay(true)
      }}

      function change5(){
        if(checkedIsNight === true){
          document.querySelector("#beforeLabelVis5").style.backgroundColor = "rgb(34 71 100)";
          setCheckedIsNight(false)
          
          }
        else{
        document.querySelector("#beforeLabelVis5").style.backgroundColor = "rgb(0 197 57)";
        setCheckedIsNight(true)
      }}
    
    
    

    return(
      <section>
            <div className='conteiner'>
                <div className='topInf'>
                    <div className='seach'>
                        <form>
                            <input 
                            type='seach' 
                            placeholder='Введите название концерта или группу...' 
                            className='seachInput' 
                            value={seachQuer}
                            onChange={e => {setSeachQuer(e.target.value); console.log(seachQuer)}}
                            />
                            <button className='buttonSeach' onClick={(e) => {e.preventDefault(); setBtnSeachQuer(true)}}>Найти</button>
                        </form>
                    </div>
                    <div className='blocks'>
                        <div className='leftBlock'>
                        <div className='moreFilter'>
                            <div className='name'>Фильтры</div>
                            <div className='saleFilterBox'>
                                <div className='filterSaleName'>Цена</div>
                            <form>
                                <div className='filterSale'>
                                
                                    <input 
                                    type="text" 
                                    placeholder='От...'
                                    value={isMinSale}
                                    onChange={event => setIsMinSale(event.target.value)}
                                    />
                                    <input 
                                    type="text"
                                    placeholder='До...'
                                    value={isMaxSale}
                                    onChange={event => setIsMaxSale(event.target.value)}
                                    />
                                </div>
                                <button 
                                className='filterSaleButton'
                                onClick={(e) => { e.preventDefault(); setIsSaleFilterBtn(true); saleSort()}}
                                >Применить</button>
                            </form>
                            </div>
                                <div className='nameIsQue'>Отметки</div>
                                <div className='filterIsQue'>
                                    <ul>

                                        <label htmlFor={"checkBox1"}>
                                            <li><input type="checkbox" id={"checkBox1"} value={checkedIsTop} onChange={change1}/>Топовый</li>
                                            <div className="beforeLabelVis" id={"beforeLabelVis1"}></div>
                                        </label>

                                        <label htmlFor={"checkBox2"}>
                                            <li><input type="checkbox" id={"checkBox2"} value={checkedIsHot} onChange={change2}/>Гарячий концерт</li>
                                            <div className="beforeLabelVis" id={"beforeLabelVis2"}></div>
                                        </label>

                                        <label htmlFor={"checkBox3"}>
                                            <li><input type="checkbox" id={"checkBox3"} value={checkedIsSale} onChange={change3}/> Скидка</li>
                                            <div className="beforeLabelVis" id={"beforeLabelVis3"}></div>
                                        </label>

                                        <label htmlFor={"checkBox4"}>
                                            <li><input type="checkbox" id={"checkBox4"} value={checkedIsNight} onChange={change4}/>Проходит ночью</li>
                                            <div className="beforeLabelVis" id={"beforeLabelVis4"}></div>
                                        </label>

                                        <label htmlFor={"checkBox5"}>
                                            <li><input type="checkbox" id={"checkBox5"} value={checkedIsDay} onChange={change5}/> Проходит днем</li>
                                            <div className="beforeLabelVis" id={"beforeLabelVis5"}></div>
                                        </label>
                                    </ul>
                                </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className='RightBlock'>
                        
                        <div className='allConcert'>
                            <ul>
                                {
                                visibleConcerts().length === 0 
                                    ?
                                        <div className='loading' style={{height: "350px"}}>Ничего не найдено!</div>
                                    :
                                        visibleConcerts().map( concert => <Consert concert={concert}/>)}
                            </ul>
                        </div>
                        </div>
                </div>
                <div className='bottomPage'>
                    <ul>
                        <div className="contBack">
                            <LeftArNavPage id={id} arrPage={pages()}/>
                {
                pages().map(el => <Pages el={el}/>)
                }
                           <RightArNavPage id={id} arrPage={pages()}/>
                        </div>
                    </ul>
                </div>
            </div>
      </section>
      )
}

export default SeachConsert;