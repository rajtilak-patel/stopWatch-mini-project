console.log("hello world");
let timer = document.querySelector(".timer");

let hr = 0
let min = 0
let sec = 0

let timeClock = true;

function startClock(){
    if(timeClock == true){
        timeClock = false;
        console.log("function start Clock run")
         timeCycle();
    }

}

function timeCycle(){
    console.log("function timer Clock run")
    if(timeClock == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec+1;

        if(sec==60){
            min = min+1;
            sec = 0;
        }

        if(min ==60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }

        if(sec<10){
            sec = '0'+sec;
        }
        if(min<10){
            min = '0'+min;
        }
        if(hr<10){
            hr = '0'+hr;
        }
        timer.innerHTML = hr + ':' + min + ":" + sec 
        setTimeout("timeCycle()",1000);
        
    } 
}
 
function stopClock(){
    if(timeClock == false){
        console.log("function stop Clock run")
        timeClock = true;

    }

}

function restartClock(){
    console.log("function restart Clock run");
     timer.innerHTML = "00:00:00";
     timeClock = true;
      hr = 0
      min = 0
      sec = 0

}