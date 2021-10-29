let input = document.getElementById("input");
let weather = document.getElementById("weather");
let map = document.getElementById("map");
let tableInput = document.getElementById("tableInput");
let tableWeather = document.getElementById("tableWeather");
let tableMap = document.getElementById("tableMap");

input.addEventListener("click",()=>{
    if (tableInput.style.display=="block") {
        tableInput.style.display="none";
    } else {
        tableInput.style.display="block";
    }
});

weather.addEventListener("click",()=>{
    if (tableWeather.style.display=="block") {
        tableWeather.style.display="none";
    } else {
        tableWeather.style.display="block";
    }
});

map.addEventListener("click",()=>{
    if (tableMap.style.display=="block") {
        tableMap.style.display="none";
    } else {
        tableMap.style.display="block";
    }
});

let seeds = document.getElementById("seeds");
let fertilisers = document.getElementById("fertilisers");
let pesticides = document.getElementById("pesticides");
let seedSec = document.getElementById("seedSec");
let fertiliserSec = document.getElementById("fertiliserSec");
let pesticideSec = document.getElementById("pesticideSec");

seeds.addEventListener("click",()=>{
    if (seedSec.style.display=="block") {
        seedSec.style.display="none";
    } else {
        seedSec.style.display="block";
    }
});

fertilisers.addEventListener("click",()=>{
    if (fertiliserSec.style.display=="block") {
        fertiliserSec.style.display="none";
    } else {
        fertiliserSec.style.display="block";
    }
});

pesticides.addEventListener("click",()=>{
    if (pesticideSec.style.display=="block") {
        pesticideSec.style.display="none";
    } else {
        pesticideSec.style.display="block";
    }
});