function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();










// var  data =new Date()
// var  getday = data.getTime()
// document.write(getday)
// var copy=convert.slice(16,25 )
// // document.write(data)


// var date =new Date()
// var datemili =date.getTime()
// document.write(datemili)


// var dob =new Date ('12 sep,1999')
// var dobmili =dob .getTime()
// document.write(dobmili)
// var minus =datemili -dobmili
// document.write(minus)













