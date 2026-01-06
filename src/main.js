const displayEl=document.getElementById("display");
const startBtn=document.getElementById("btn1");
const stopBtn=document.getElementById("btn2");
const resetBtn=document.getElementById("btn3");


//add event listener to button elements
startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);

//globally keep track of the startTime, elapsed time and interval id
let startTime=0;
let elapsedTime=0;
let timeId=null;

//start function
function start(){
    //check if interval is not null
    if(timeId!==null) return;
    startTime=Date.now()-elapsedTime;
    timeId=setInterval(()=>{
        elapsedTime=Date.now()-startTime;
        updateDisplay(elapsedTime);
    },100);
}


function stop(){
    clearInterval(timeId);
    timeId=null; //set the timeId to null;
}

function reset(){
    stop();
    elapsedTime=0;
    updateDisplay(elapsedTime);
}

function updateDisplay(ms){
    const ftime=formatTime(ms);

    displayEl.textContent=`${ftime.hour}:${ftime.minutes}:${ftime.seconds}`;
}

function formatTime(ms){
    const totalSeconds=Math.floor(ms/1000);
    const hrs=Math.floor(totalSeconds/3600);
    const mn=Math.floor((totalSeconds%3600)/60);
    const scds=totalSeconds%60;

    //convert it to strings
    const Hour=String(hrs).padStart(2,"0");
    const Minutes=String(mn).padStart(2,"0");
    const Seconds=String(scds).padStart(2,"0");

    return {
        hour:Hour,
        minutes:Minutes,
        seconds:Seconds
    };
}