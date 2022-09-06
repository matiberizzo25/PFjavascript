// seleccion del DOM para funciones principales

const sectionProducts = document.querySelector('#products');
const bienvenida = document.querySelector('.bienvenida');
const logOut = document.createElement('p');

// seleccion del DOM para el signUp

const signUp = document.getElementById('sign-up');
const formulario = document.querySelector('.formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const correo = document.getElementById('correo');
const notif = document.getElementById('notif');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmar');
const submit = document.querySelector('.submit');
const goBack = document.querySelector('.back');
const instructionList = document.getElementsByTagName('li');

export {
    sectionProducts,
    signUp,
    bienvenida,
    logOut,
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