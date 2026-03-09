const chatBody = document.getElementById("chat-body");
const input = document.getElementById("mensaje");

// enviar mensaje
async function enviarMensaje(){

let mensaje = input.value.trim();

if(mensaje === "") return;

// mensaje usuario
chatBody.innerHTML += `
<div class="user-msg">
${mensaje}
</div>
`;

input.value = "";

// mensaje de "escribiendo"
chatBody.innerHTML += `
<div class="bot-msg" id="typing">
Escribiendo...
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

try{

const respuesta = await fetch("https://delicious-food-jr.onrender.com/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
mensaje: mensaje
})
});

const data = await respuesta.json();

// quitar mensaje escribiendo
document.getElementById("typing").remove();

// respuesta bot
chatBody.innerHTML += `
<div class="bot-msg">
${data.respuesta}
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

}catch(error){

document.getElementById("typing").remove();

chatBody.innerHTML += `
<div class="bot-msg">
Error conectando con el servidor
</div>
`;

}

}