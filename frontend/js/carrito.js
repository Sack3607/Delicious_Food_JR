let carrito=[]

function agregarCarrito(nombre,precio){

let producto = carrito.find(p => p.nombre === nombre)

if(producto){

producto.cantidad++

}else{

carrito.push({
nombre:nombre,
precio:precio,
cantidad:1
})

}

actualizarCarrito()

}



function actualizarCarrito(){

let lista = document.getElementById("lista-carrito")
let total = document.getElementById("total")

lista.innerHTML=""

let totalPrecio=0

carrito.forEach((producto,index)=>{

totalPrecio += producto.precio * producto.cantidad

lista.innerHTML += `

<div class="item">

${producto.nombre}

<div>

<button onclick="cambiarCantidad(${index},1)">+</button>
${producto.cantidad}
<button onclick="cambiarCantidad(${index},-1)">-</button>

</div>

</div>

`

})

total.textContent = totalPrecio

}



function cambiarCantidad(index,cambio){

carrito[index].cantidad += cambio

if(carrito[index].cantidad <= 0){

carrito.splice(index,1)

}

actualizarCarrito()

}


function abrirCarrito(){

document.getElementById("carrito").classList.add("activo")

}

function cerrarCarrito(){

document.getElementById("carrito").classList.remove("activo")

}

/* =================================
ANIMACIÓN CUANDO SE AGREGA PRODUCTO
=================================*/

function animarBoton(boton){

boton.classList.add("animacion-agregado")

setTimeout(()=>{
boton.classList.remove("animacion-agregado")
},400)

}



/* =================================
MODIFICAR FUNCIÓN AGREGAR CARRITO
=================================*/

function agregarCarrito(nombre,precio,boton){

let producto = carrito.find(p => p.nombre === nombre)

if(producto){

producto.cantidad++

}else{

carrito.push({
nombre:nombre,
precio:precio,
cantidad:1
})

}

animarBoton(boton)

actualizarCarrito()

}



/* =================================
FONDO OSCURO CUANDO SE ABRE CARRITO
=================================*/

function abrirCarrito(){

document.getElementById("carrito").classList.add("activo")
document.getElementById("fondoOscuro").classList.add("activo")

}

function cerrarCarrito(){

document.getElementById("carrito").classList.remove("activo")
document.getElementById("fondoOscuro").classList.remove("activo")

}