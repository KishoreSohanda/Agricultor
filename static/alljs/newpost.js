let date = document.getElementById("date");
date.value=new Date().toDateString();
let timeFormat = new Intl.DateTimeFormat('en-US',{
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    hour12:false
});
let time = document.getElementById("time");
time.value=timeFormat.format(new Date());