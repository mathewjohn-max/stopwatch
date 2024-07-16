let startTime =0;
let running=false;
let elapsedTime=0;
let displayingrunn;
let elapsedTimeMs;

document.getElementById('start-button').addEventListener('click',() =>{
startStopwatch();
})

document.getElementById('stop-button').addEventListener('click',() =>{
    stopStopwatch();
    })

document.getElementById('reset-button').addEventListener('click',() =>{
    resetStopwatch();
    })

function startStopwatch(){
    if(!running){
        running =true;
        startTime = Date.now() - elapsedTime;
        displayingrunn = setInterval(runnStopwatch,10);
    }
}
function stopStopwatch(){
    if(running){
        clearInterval(displayingrunn);
        elapsedTime = Date.now() - startTime;
        running=false;
    }
}

function resetStopwatch(){
    stopStopwatch();
    elapsedTime = 0;
    runnStopwatch();
    document.querySelector('.time-stamp').textContent='00:00:00';
}

function runnStopwatch(){
    elapsedTimeMs = Date.now() - startTime;

    const hours = Math.floor(elapsedTimeMs / (1000*60*60));
    const minutes = Math.floor((elapsedTimeMs % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((elapsedTimeMs % (1000*60)) / 1000);

    const displayStrings = pad(hours) + ':' + pad(minutes) + ':' +pad(seconds);

    document.querySelector('.time-stamp').textContent=displayStrings;

    console.log();

}
function pad(num) {
    return num.toString().padStart(2, '0');
  }