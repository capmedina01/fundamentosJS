const bodyForm = document.body;

const formLogin = document.createElement("form");
formLogin.setAttribute("id", "form_login");

const inputNombre = document.createElement("input");
inputNombre.setAttribute("type", "text");
inputNombre.setAttribute("name", "nombre");
inputNombre.setAttribute("placeholder", "Ingrese su nombre");

const buttonForm = document.createElement("button");
buttonForm.setAttribute("type", "submit"); 
buttonForm.textContent = "Enviar";

formLogin.appendChild(inputNombre);
formLogin.appendChild(buttonForm);

bodyForm.appendChild(formLogin);

formLogin.addEventListener("submit", function (event){
   event.preventDefault();
   alert()
})

