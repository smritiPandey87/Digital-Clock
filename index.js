let hrs=document.getElementById("hrs");
let min=document.getElementById("mins");
let sec =document.getElementById("secs");
let rset=document.getElementById("result");

setInterval(()=>{
    let currentTime= new Date();

    hrs.innerHTML= currentTime.getHours();
    min.innerHTML= currentTime.getMinutes();
    sec.innerHTML= currentTime.getSeconds();
},1000)

