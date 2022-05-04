
let min = 0;
let sec = 0;
let mil= 0;
let interval ;
  
function start () {
  pause();
   interval = setInterval(( ) => {watch(); },10);
}

function pause () {
    clearInterval(interval);
}

function stop () {
    clearInterval(interval) ;
    mil=0
    sec=0
    min=0
    document.getElementById('watch').innerText = "00:00.000" ;
}

function twoDigits(digit) {
   if(digit<10) {
     return('0'+digit);
   }else{
     return(digit);
   }
}


function watch () {
  if ((mil += 10 ) == 1000) {
    mil = 0;
    sec++;
      if (sec == 60) {
        min++;
        sec=0;
        
      }
    }
      document.getElementById('watch').innerText =twoDigits(min)+ ':' + twoDigits(sec)+ '.' + twoDigits(mil);
}