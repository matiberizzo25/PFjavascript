// seleccion del DOM para funciones principales

const sectionProducts = document.querySelector('#products');
const sectionCarrito = document.getElementById('carrito');
const signUp = document.getElementById('sign-up');
const bienvenida = document.querySelector('.bienvenida');

const totalCompra = document.createElement('div');
const montoTotalCompra = document.createElement('h3');
const cantProductos = document.createElement('p');
const buttonEnd = document.createElement('button');
const logOut = document.createElement('button');

const appendElements = () =>{
    sectionCarrito.appendChild(totalCompra);
    totalCompra.appendChild(montoTotalCompra);
    totalCompra.appendChild(cantProductos);
    totalCompra.appendChild(buttonEnd);
}

// seleccion del DOM para el signUp

const formulario = document.querySelector('.formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmar');
const submit = document.querySelector('.submit');
const goBack = document.querySelector('.back');
const instructionList = document.getElementsByTagName('li');

export {
    sectionProducts,
    sectionCarrito,
    signUp,
    bienvenida,
    totalCompra,
    montoTotalCompra,
    cantProductos,
    buttonEnd,
    logOut,
    appendElements,
    formulario,
    nombre,
    apellido,
    edad,
    correo,
    contrasena,
    confirmarContrasena,
    submit,
    goBack,
    instructionList
}