const displayEl=document.getElementById("display");
const startBtn=document.getElementById("btn1");
const stopBtn=document.getElementById("btn2");
const resetBtn=document.getElementById("btn3");


//add event listener to button elements
startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);

//globally keep track of the startTime, elapsed time and interval id
const startTime=0;
const elapsedTime=0;
const timeId=null;

//start function
function start(){
    //check if interval is not null
    if(timeId!==null) return;
    startTime=Date.now()-elapsedTime;
    setInterval(()=>{
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