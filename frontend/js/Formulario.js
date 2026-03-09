/* =================================================
   MOSTRAR FORMULARIO SEGÚN BOTÓN
================================================= */

function mostrarFormulario(tipo) {

  const formNormal = document.getElementById("pqrsForm");
  const formAnon = document.getElementById("pqrsAnonimaForm");
  const switchContainer = document.getElementById("switchContainer");
    const boton = document.getElementById("btnMostrarForm");

  if (tipo === "normal") {

    formNormal.classList.remove("oculto");
    formAnon.classList.add("oculto");
    switchContainer.classList.remove("oculto");

  } else if (tipo === "anonimo") {

    formAnon.classList.remove("oculto");
    formNormal.classList.add("oculto");
    switchContainer.classList.remove("oculto");

  }
  boton.disabled = true;

}


/* =================================================
   SWITCH PARA CAMBIAR ENTRE FORMULARIOS
================================================= */

const switchBtn = document.getElementById("switch");
const formNormal = document.getElementById("pqrsForm");
const formAnonimo = document.getElementById("pqrsAnonimaForm");

/* TEXTO DEL SWITCH */
const textoSwitch = document.getElementById("textoSwitch");

if (switchBtn) {

  switchBtn.addEventListener("change", function () {

    if (this.checked) {

      formNormal.classList.add("oculto");
      formAnonimo.classList.remove("oculto");

      if(textoSwitch){
        textoSwitch.textContent = "Anónimo";
      }

    } else {

      formNormal.classList.remove("oculto");
      formAnonimo.classList.add("oculto");

      if(textoSwitch){
        textoSwitch.textContent = "Con datos";
      }

    }

  });

}


/* =================================================
   ENVÍO FORMULARIO PQRS NORMAL
================================================= */

const scriptURL = "https://script.google.com/macros/s/AKfycbyWpBLMivz-TCLRrt35d2vrYQynIJKvEKTE1GsT9CFPWU7qaWHGy3mO1AVTKxZqO82RYA/exec";
const form = document.getElementById("pqrsForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", e => {

  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  data.formulario = "pqrs";

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })

  .then(res => {

    if (res.ok) {

      mensaje.textContent = "✅ Tu PQRS fue enviada correctamente.";
      mensaje.style.color = "green";

      form.reset();

      setTimeout(() => {
        window.location.href = "https://sackery.github.io/Delicious-food-jr.github.io/";
      }, 2000);

    } else {

      mensaje.textContent = "❌ Error al enviar la PQRS.";
      mensaje.style.color = "red";

    }

  })

  .catch(() => {

    mensaje.textContent = "❌ No se pudo conectar al servidor.";
    mensaje.style.color = "red";

  });

});


/* =================================================
   ENVÍO FORMULARIO PQRS ANÓNIMA
================================================= */

const scriptURLAnon = "https://script.google.com/macros/s/AKfycbyWpBLMivz-TCLRrt35d2vrYQynIJKvEKTE1GsT9CFPWU7qaWHGy3mO1AVTKxZqO82RYA/exec";

const formAnon = document.getElementById("pqrsAnonimaForm");
const mensajeAnon = document.getElementById("mensajeAnon");

formAnon.addEventListener("submit", e => {

  e.preventDefault();

  const data = Object.fromEntries(new FormData(formAnon).entries());

  data.formulario = "anonimo";

  fetch(scriptURLAnon, {
    method: "POST",
    body: JSON.stringify(data)
  })

  .then(res => {

    if (res.ok) {

      mensajeAnon.textContent = "✅ Tu PQRS anónima fue enviada correctamente.";
      mensajeAnon.style.color = "green";

      formAnon.reset();

      setTimeout(() => {
        window.location.href = "https://sackery.github.io/Delicious-food-jr.github.io/";
      }, 2000);

    } else {

      mensajeAnon.textContent = "❌ Error al enviar la PQRS.";
      mensajeAnon.style.color = "red";

    }

  })

  .catch(() => {

    mensajeAnon.textContent = "❌ No se pudo conectar al servidor.";
    mensajeAnon.style.color = "red";

  });

});