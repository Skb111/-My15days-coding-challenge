var seconds=document.getElementById('seconds');
var milliseconds=document.getElementById('milliseconds');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
 var sec=0;
 var ms=0;
 var timeInterval;

 const timer=()=>{
    ms++;

    if(ms<9){
        milliseconds.innerHTML="0"+ms;
    }

    if(ms>9){
        milliseconds.innerHTML=ms;
    }

    if(ms>99){
        sec++;
        seconds.innerHTML="0"+sec;
        ms=0;
        milliseconds.innerHTML="0"+0;
    }
    if(sec>9){
        seconds.innerHTML=sec;
    }
 }

 //start button
 start.addEventListener('click', ()=>{
    timeInterval=setInterval(timer,10);
 })


 //stop button
stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
})

 //reset button
 reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    sec="00";
    ms="00";
    seconds.innerHTML=sec;
    milliseconds.innerHTML=ms;
    
 })