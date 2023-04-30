


let type = false;
let reg = false;

function changePassword(){
    if(!type){ document.getElementById('inputformReg').setAttribute('type', 'text'); type = true;
            document.getElementById('eyesClose').style.display = "none";
            document.getElementById('eyesOpen').style.display = "inline-block";
            }
    else{ document.getElementById('inputformReg').setAttribute('type', 'password'); type = false;
            document.getElementById('eyesOpen').style.display = "none";
            document.getElementById('eyesClose').style.display = "inline-block";
            
        }
}

function changePassword_2(){
    if(!type){ document.getElementById('inputformReg_2').setAttribute('type', 'text'); type = true;
        document.getElementById('eyesClose_2').style.display = "none";
        document.getElementById('eyesOpen_2').style.display = "inline-block";
        }
    else{ document.getElementById('inputformReg_2').setAttribute('type', 'password'); type = false;
        document.getElementById('eyesOpen_2').style.display = "none";
        document.getElementById('eyesClose_2').style.display = "inline-block";
        
    }
}

function closeReg(){
    setTimeout(() => {
        document.querySelector(".block_reg_1").style.backgroundColor = "rgb(40, 115, 165)";
        document.querySelector(".block_reg_2").style.backgroundColor = "rgb(40, 115, 165)";
    }, 400)
    document.querySelector('.block_reg_2').style.margin = "955px 0 0 0"
    setTimeout(() => {
        document.querySelector('.block_reg_2').style.display = "none"; 
        document.querySelector('.block_reg_2').style.margin = "-955px 0 0 0";
    }, 400)

    document.querySelector('.block_reg_1').style.margin = "955px 0 0 0"
    setTimeout(() => {
        document.querySelector('.block_reg_1').style.display = "none"; 
        document.querySelector('.block_reg_1').style.margin = "-955px 0 0 0";
    }, 400)

    document.querySelector('.registerAll').style.backgroundColor = "transparent";
    setTimeout(() => document.querySelector('.registerAll').style.display = "none", 400)
    reg = false;
}
function changeReg(){
if(!reg){
    document.querySelector('.block_reg_1').style.margin = "955px 0 0 0"
    setTimeout(() => {
        document.querySelector('.block_reg_1').style.display = "none"; 
        document.querySelector('.block_reg_1').style.margin = "-955px 0 0 0";
    }, 400)

    document.querySelector('.block_reg_2').style.display = "inline-block"; 
    setTimeout(() => {
        document.querySelector('.block_reg_2').style.margin = "0px 0 0 0";
    }, 10)
    reg = true;}
else{
    document.querySelector('.block_reg_2').style.margin = "955px 0 0 0"
    setTimeout(() => {
        document.querySelector('.block_reg_2').style.display = "none"; 
        document.querySelector('.block_reg_2').style.margin = "-955px 0 0 0";
    }, 400)

    document.querySelector('.block_reg_1').style.display = "inline-block"; 
    setTimeout(() => {
        document.querySelector('.block_reg_1').style.margin = "0px 0 0 0";
    }, 10);
    reg = false;}
}



const titleHeader = [
    {
        name: "Главная",
        id: 1,
        url: "/"
    },
    {
        name: "Концерты",
        id: 2,
        url: "/concerts/page/1"
    },
    {
        name: "Фан клуб",
        id: 3,
        url: "/my-fan"
    },
    {
        name: "Мерч",
        id: 4,
        url: "https://www.metalshop.com.ua/?gclid=EAIaIQobChMI29DV65WL_AIVcAuiAx0ppAiGEAAYASAAEgLhgvD_BwE"
    },
    {
        name: "История",
        id: 5,
        url: "/story"
    },
    {
        name: "Барное меню",
        id: 6,
        url: "/bar-menu"
    },
    
]



function openRegMenu(){
    if(window.screen.width <= 1100) closeTopTab();

        setTimeout(() => document.querySelector('.block_reg_1').style.margin = "0px 0 0 0", 10)
        document.querySelector('.block_reg_1').style.display = "inline-block";

        document.querySelector('.registerAll').style.backgroundColor = "rgba(255, 255, 255, 0.575)";
        document.querySelector('.registerAll').style.display = "flex";
         
}

function openInMenu(){
    reg = true;
    setTimeout(() => document.querySelector('.block_reg_2').style.margin = "0px 0 0 0", 10)
    document.querySelector('.block_reg_2').style.display = "inline-block";
    if(window.screen.width <= 1100) closeTopTab();
    document.querySelector('.registerAll').style.backgroundColor = "rgba(255, 255, 255, 0.575)";
    document.querySelector('.registerAll').style.display = "flex";
}



function openBuyTicketPanel(){
    
    document.querySelector('.allTable').style.display = "flex"
    setTimeout(() => document.querySelector('.allTable').style.backgroundColor = "rgba(255, 255, 255, 0.5)", 10);
    
}



function showDescBarTick(){
    document.querySelector('.blockBuy').style.marginLeft = "-500px"
    
}

function closeDescBarTick(){
    document.querySelector('.blockBuy').style.marginLeft = "0px"
}

function completeEnterReg() {
        document.querySelector('.reg').style.display = "none";
        document.querySelector('.sign').style.display = "none";
        document.querySelector('.myAcc').style.display = "-webkit-box";
        document.querySelector('.outMyAcc').style.display = "inline-block";
        document.querySelector('.register').style.marginTop = "3px";
}
function exitMyProfile() {
    document.querySelector('.reg').style.display = "inline-block";
    document.querySelector('.sign').style.display = "inline-block";
    document.querySelector('.myAcc').style.display = "none";
    document.querySelector('.outMyAcc').style.display = "none";
    document.querySelector('.register').style.marginTop = "0px";

}

function closeTopTab(){

    document.querySelector(".line2").style.backgroundColor = "white";
    document.querySelector(".line1").style.top = "0px";
    document.querySelector(".line1").style.transform = "rotate(0deg)";
    document.querySelector(".line3").style.top = "0px";
    document.querySelector(".line3").style.transform = "rotate(0deg)";
    document.querySelector(".line3").style.marginTop = "43px";

    document.querySelector("#menuTop").style.border = "1px solid transparent";
    document.querySelector("#menuTop").style.height = "0px";
    document.querySelector("#menuTop").style.padding = "0px 0px";
    document.querySelector(".tabCont").style.borderRadius = "5px 5px 5px 5px";
    document.querySelector("#menuTop").style.borderRadius = " 0px 0px 5px 5px";
    document.querySelector("#menuTop").style.marginTop = "0px";
    setTimeout(() => {    
        document.querySelector("#menuTop").style.display = "none";
    }, 400)
}



export {
    openInMenu, 
    openRegMenu, 
    titleHeader,
    changeReg,
    closeReg,
    changePassword,
    changePassword_2,
    openBuyTicketPanel,
    showDescBarTick,    
    closeDescBarTick,
    completeEnterReg,
    exitMyProfile,
    closeTopTab,
}