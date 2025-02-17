const body = document.body;
const title = document.createElement("h1");
title.textContent = "Saludo con Sweet Alert"
const input = document.createElement("input");
input.setAttribute("type", "button");
input.setAttribute("value", "saludo");
input.setAttribute("onclick", "saludar()")

body.appendChild(title);
body.appendChild(input)

function saludar(){
   swal('hola')
}


