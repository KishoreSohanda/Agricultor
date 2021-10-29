let MP = document.getElementById("IN-MP");
let boxMP = document.getElementById("boxMP")
MP.addEventListener("mouseover",()=>{
    MP.style.stroke = "blue"
    MP.style.strokeWidth = "10"
    boxMP.style.display = "block"
});
MP.addEventListener("mouseout",()=>{
    MP.style.stroke = "black"
    MP.style.strokeWidth = "0.6"
    boxMP.style.display = "none"
});
MP.addEventListener("click",()=>{
    javascript:window.location.href="/mp";
});
