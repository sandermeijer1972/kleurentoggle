//klik op het plaatje en het menu verschijnt of verdwijnt

const navigatie = document.getElementById("navi");
const laatMenuZien = function() {
    navigatie.classList.toggle("menu");
}
const ham = document.querySelector(".hamburger");
ham.addEventListener("click", laatMenuZien);


//de kleuren van de body aanmaken

const achterGrond = document.getElementById("body");

const veranderNaarAqua = function() {
    achterGrond.classList.add("aqua");
    achterGrond.classList.remove("lime");
    achterGrond.classList.remove("geel");
    achterGrond.classList.remove("rood");
    achterGrond.classList.remove("fuchsia");
    achterGrond.classList.remove("blauw");
}

const veranderNaarLime = function() {
    achterGrond.classList.add("lime");
    achterGrond.classList.remove("aqua");
    achterGrond.classList.remove("geel");
    achterGrond.classList.remove("rood");
    achterGrond.classList.remove("fuchsia");
    achterGrond.classList.remove("blauw");
}

const veranderNaarGeel = function() {
    achterGrond.classList.add("geel");
    achterGrond.classList.remove("aqua");
    achterGrond.classList.remove("lime");
    achterGrond.classList.remove("rood");
    achterGrond.classList.remove("fuchsia");
    achterGrond.classList.remove("blauw");
}

const veranderNaarRood = function() {
    achterGrond.classList.add("rood");
    achterGrond.classList.remove("aqua");
    achterGrond.classList.remove("lime");
    achterGrond.classList.remove("geel"); 
    achterGrond.classList.remove("fuchsia");
    achterGrond.classList.remove("blauw");
}

const veranderNaarFuchsia = function() {
    achterGrond.classList.add("fuchsia");
    achterGrond.classList.remove("aqua");
    achterGrond.classList.remove("lime");
    achterGrond.classList.remove("geel");
    achterGrond.classList.remove("rood");
    achterGrond.classList.remove("blauw");
}

const veranderNaarBlauw = function() {
    achterGrond.classList.add("blauw");
    achterGrond.classList.remove("aqua");
    achterGrond.classList.remove("lime");
    achterGrond.classList.remove("geel");
    achterGrond.classList.remove("rood");
    achterGrond.classList.remove("fuchsia");
}


//de kleuren klikbaar maken

const akAqua = document.getElementById("aqua");
akAqua.addEventListener("click", veranderNaarAqua);
akAqua.addEventListener("click", laatMenuZien);


const akLime = document.getElementById("lime");
akLime.addEventListener("click", veranderNaarLime);
akLime.addEventListener("click", laatMenuZien);

const akGeel = document.getElementById("geel");
akGeel.addEventListener("click", veranderNaarGeel);
akGeel.addEventListener("click", laatMenuZien);

const akRood = document.getElementById("rood");
akRood.addEventListener("click", veranderNaarRood);
akRood.addEventListener("click", laatMenuZien);

const akFuchsia = document.getElementById("fuchsia");
akFuchsia.addEventListener("click", veranderNaarFuchsia);
akFuchsia.addEventListener("click", laatMenuZien);

const akBlauw = document.getElementById("blauw");
akBlauw.addEventListener("click", veranderNaarBlauw);
akBlauw.addEventListener("click", laatMenuZien);




