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

// mensaje escribiendo
chatBody.innerHTML += `
<div class="bot-msg" id="typing">
Escribiendo...
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

try{

const respuesta = await fetch("https://delicious-food-jr-backend.onrender.com/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
mensaje: mensaje
})
});

// verificar si el servidor respondió bien
if(!respuesta.ok){
throw new Error("Error del servidor");
}

const data = await respuesta.json();

console.log("Respuesta backend:", data);

// quitar mensaje escribiendo
const typing = document.getElementById("typing");
if(typing) typing.remove();

// mostrar respuesta
chatBody.innerHTML += `
<div class="bot-msg">
${data.respuesta || "⚠️ No se recibió respuesta"}
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

}catch(error){

console.error(error);

const typing = document.getElementById("typing");
if(typing) typing.remove();

chatBody.innerHTML += `
<div class="bot-msg">
⚠️ Error conectando con el servidor
</div>
`;

}
console.log("Hola");
}