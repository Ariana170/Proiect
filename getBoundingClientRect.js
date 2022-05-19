//getBoundingClientRect
function alerta(event){
    const rez = event.target.getBoundingClientRect()
    w = rez.width;
    h = rez.height;
    alert("Width:" + Math.round(w) + ", Height:" + Math.round(h));
}
const td = document.getElementsByTagName('td');
for (var i=0; i<td.length; i++)
    td[i].addEventListener('click', function(){alerta(event);});
//getComputedStyle
    const element = document.getElementById("head");
    const cssObj = window.getComputedStyle(element, null);
    
    let bgColor = cssObj.getPropertyValue("background-color");
    let anim = cssObj.getPropertyValue("animation");    
    document.getElementById("tabel").style.backgroundColor = bgColor;
    document.getElementById("tabel").style.animation = anim;
//random prop.
function schimb(){
    var numere = Math.floor(Math.random()*td.length);
    td[numere].style.color='black';
    td[numere].style.fontStyle= 'italic';
    td[numere].style.backgroundColor= 'white';
    setTimeout(function(){td[numere].style.color='initial';
    td[numere].style.fontStyle= 'normal';
    td[numere].style.backgroundColor= 'initial';},5000);
}
setInterval(schimb,5000);