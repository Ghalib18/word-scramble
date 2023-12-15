const wordText=document.querySelector(".word"),
hintText=document.querySelector(".hint span"),
timeText=document.querySelector(".time b"),
inputField=document.querySelector(".input"),
refreshBtn=document.querySelector(".refresh-word"),
checkBtn=document.querySelector(".check-word")
const inputField1 = document.querySelector(".inputs")
const refreshbutton  = document.querySelector(".refreshb")
let correctWord, timer;  
let popup=document.getElementById("popup")
let win = document.getElementById("win")
let timeout=document.getElementById("timeout")
function openPopup(){
    popup.classList.add("open-popup");
   }
function closepopup(){
popup.classList.remove("open-popup");
}
const openwin = () => {
    win.classList.add("open-win")
}

const closeWin = () => {
    win.classList.remove("open-win")
}
function opentimeout(){
    timeout.classList.add("open-timeout");
}
function closetimeout(){
    timeout.classList.remove("open-timeout");
}




const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        opentimeout();
        initgame();
    },1000)
}


const initgame =()=>{
    initTimer(30);
    let randomObj=words[ Math.floor(Math.random() * words.length)];
    let wordArray=randomObj.word.split("");
    for(let i=wordArray.length -1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    wordText.innerText=wordArray.join("");
    hintText.innerText=randomObj.hint;
    correctWord=randomObj.word.toLocaleLowerCase();
    inputField.value="";
    inputField.setAttribute("Maxlength", correctWord.length)
    console.log(randomObj);
}
initgame();
const checkWord=() =>{

    let userWord=inputField1.value.toLocaleLowerCase();
    if(!userWord) return alert("please Enter to check word");
    if(userWord!==correctWord)
    return openwin()
     openPopup();
     initgame();
  
}
refreshBtn.addEventListener("click",initgame);
checkBtn.addEventListener("click", checkWord);



refreshbutton.addEventListener("click", closeWin)
