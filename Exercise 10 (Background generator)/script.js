var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("random");

function updateBgColor(color1, color2) {
    return function(){
        body.style.background = "linear-gradient(to right, " + 
        color1.value + ", " + color2.value + ")";

        css.textContent = body.style.background + ";";
    }
}

updateBgColor(color1, color2)();

color1.addEventListener("input", updateBgColor(color1, color2));
color2.addEventListener("input", updateBgColor(color1, color2));