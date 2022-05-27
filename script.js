

const name = document.getElementById("texto");
const btn = document.getElementById("sim");
const btn2 = document.getElementById("nao");

btn.addEventListener("click", function () {
    name.innerHTML = "Eu sabia! &#128169";
    btn.style.visibility = "hidden";
    btn2.style.visibility = "hidden";


});

btn2.addEventListener("mouseover", function (){
    var qtd = 45;
    var mat = 60;
    var total = 2;

    btn2.innerHTML = "haha";
    btn2.style.fontSize = "5px";

    if(total % 2 === 0){
        btn2.style.right = (Math.floor(Math.random() * mat) + qtd) + "vh";
        btn2.style.top = (Math.floor(Math.random() * 200) + 190) + "px";
        btn2.style.bottom = (Math.floor(Math.random() * mat) + qtd) + "vh";
        total*=3;
    }else if(total % 2 !== 0){
        btn2.style.left = (Math.floor(Math.random() * mat) + qtd) + "vh";
        btn2.style.top = (Math.floor(Math.random() * 200) + 190) + "px";
        btn2.style.bottom = (Math.floor(Math.random() * mat) + qtd) + "vh";
        total*=3;
    }

    btn2.addEventListener("click", function () {
        name.innerHTML = "Você ainda é idiota! só que rápido";
        btn.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
    });











});