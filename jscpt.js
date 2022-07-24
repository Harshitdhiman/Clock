setInterval(() => {
    t=new Date();
    hr=t.getHours()
    min=t.getMinutes()
    sec=t.getSeconds()
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    
    if(sec>60){
        sec=sec-60;
        min++;
    }
    if(min>60){
        min=min-60;
        hr++;
    }
    if(hr>12){
        hr=hr-12;
    }
    time=hr+":"+min+":"+sec;
    document.getElementById("this").innerHTML=time;
    
}, 1000);