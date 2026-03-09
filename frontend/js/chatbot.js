let boton = document.getElementById("chatbot-btn");
let chat = document.getElementById("chatbot");
let cerrar = document.getElementById("cerrar");

boton.onclick = function(){

chat.style.display = "flex";

}

cerrar.onclick = function(){

chat.style.display = "none";

}

function enviarMensaje(){

let input = document.getElementById("mensaje");
let texto = input.value;

if(texto === "") return;

let chatBody = document.getElementById("chat-body");

let mensaje = document.createElement("div");

mensaje.className = "user-msg";

mensaje.innerText = texto;

chatBody.appendChild(mensaje);

input.value = "";

chatBody.scrollTop = chatBody.scrollHeight;

}