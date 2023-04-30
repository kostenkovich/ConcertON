import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SectionMain from "./components/section/section_main/sectionMain";
import HeaderFooter from "./components/header-footer/header-footer";
import SectionId from "./components/section/section_consert_id/section_concert_id";
import SeachConsert from "./components/section/section_concert_seach/section_seach_main";
import MyFan from "./components/section/section_my_fan/section_my_fan_main";
import FanClubId from "./components/section/section_my_fan_messeger/main.messeger";
import Story from "./components/section/section_story/section_story";
import BarMenu from "./components/section/section_bar_menu/section_bar_menu_main";

import { AccRegContext } from "./context/context_acc_reg";
import { MyEmail } from "./context/myEmail";
import { AllAccount } from "./context/all_account";

import './style/scrollBar.css'
import './style/header.css'
import './style/section_main.css'
import './style/footer.css'
import './style/section_concert_id.css'
import './style/section_seach.css'
import './style/section_my_fan_main.css'
import './style/adaptiv.css'


import concerts from "./allConserts";


function App() {

    
    const [isAccReg, setIsAccReg] = useState(false)
    const [myAcc, setMyAcc] = useState("");
    const [myAccount, setMyAccount] = useState([
      {
          id: 0,                    
          email: "aaa@aa.aa",
          password: "1234567890",
          myConcert: []
      },
      {
          id: 1,                
          email: "bbb@bb.bb",
          password: "1234567890",
          myConcert: []
      },
  ])

  const topConcert = () => {
    const all = [];
    concerts.filter(con => {
        if(con.ask[2].turn === false) all.push(con)
    })
    return all;
}
  
  

function ThreeTopCon(){
  const topTrueCon = [];
  let all = [];
  topConcert().filter(con => {
      if(con.ask[0].turn === true) all.push(con);
    })
    for(let i = 1; i <= 3; i++){
      let key = Math.floor(Math.random() * all.length);
        topTrueCon.push(all[key])
    }
      return topTrueCon;
}


  return (
  <div className="App">
  <div class="imgBack">
  <AccRegContext.Provider value={{ isAccReg, setIsAccReg }}>
  <MyEmail.Provider value = {{ myAcc, setMyAcc }}>
  <AllAccount.Provider value={{myAccount, setMyAccount}}>
        <Routes>                                                                  
            <Route path='/' element={<HeaderFooter/>}>

                <Route index element={<SectionMain concerts = {ThreeTopCon()}/>} />
                <Route path='/home' element={ <Navigate to="/" replace />} />

                <Route path="/concert/:id" element={<SectionId concerts = {topConcert()}/>}/>

                <Route path="/concerts/page/:id" element={<SeachConsert concerts = {topConcert()}/>}/>
                 
                <Route path="/my-fan" element={<MyFan concerts = {topConcert()}/>}/>
                <Route path="/my-fan/fan-club/:id" element={<FanClubId concerts = {topConcert()}/>}/>

                <Route path="/story" element={<Story/>}/>

                <Route path="/bar-menu" element={<BarMenu/>}/>

            </Route>
        </Routes>
  </AllAccount.Provider>
  </MyEmail.Provider>
  </AccRegContext.Provider>
  </div>
        
            
        
        
    </div>
    
  );
}

export default App;
