import React from 'react';

import { Link } from 'react-router-dom';

import TopConcert from './section_top_con';
import { useEffect } from 'react';

const SectionMain = function(props){

    return(
    <section>
        <div class="firstConteiner">
            <div class="block_1">
                <div class="title">
                      Лучшие концерты только в ConcertON!
                </div>
                <div class="desc">
                      Простота в работе. Мы приложили много усилий, чтобы работать на нашей бирже
                      копирайтинга было максимально легко и удобно. Интуитивно понятный интерфейс, постоянное
                      совершенствование функционала и подробный FAQ помогут в работе начинающим и обеспечат 
                      комфорт постоянным пользователям сервиса Text.ru.
                      Простота в работе. Мы приложили много усилий, чтобы работать на нашей бирже
                      копирайтинга было максимально легко и удобно. Интуитивно понятный интерфейс, постоянное
                      совершенствование функционала и подробный FAQ помогут в работе начинающим и обеспечат 
                      комфорт постоянным пользователям сервиса Text.ru.
                </div>
                <Link to="/concerts/page/1"><button>Просмотреть афишу</button></Link>
            </div>
        </div>
        <div class="secondConteiner">
            <div class="block_2">
                <div class="title">
                    Лучшие концерты только в ConcertON!
                </div>
                <ul className='topCon'>
                    {props.concerts.map(concert => 
                            <TopConcert concert={concert}/>
                        )}
                        
                    
                </ul>
            </div>
        </div>
        <div class="therdConteiner">
            <div class="block_3">
                <div class="title">
                    Узнавай о всех новый ивентах раньше других!
                </div>
                <form>
                    <input type="email" placeholder="Email..."/>
                    <button type="submit">Узнать первому</button>
                </form>
            </div>
        </div>
    </section>
      )
}

export default SectionMain;