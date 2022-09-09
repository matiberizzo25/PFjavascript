import {
    sectionProducts,
    signUp,
    bienvenida,
    logOut,
    interaction
} from "../export/dom.js";

import {agregarCarrito} from './carrito.js';

// Atributos, clases y html de los elementos del DOM.

logOut.className = 'log-out';
logOut.innerHTML = 'LOG OUT';

// fetch al json de productos para renderizarlo en el DOM.

fetch('./js/products.json')
    .then(res => res.json())
    .then(json => {
        json.forEach(product => {
            let nuevoProducto = document.createElement('div');
            nuevoProducto.className = 'product';
            nuevoProducto.innerHTML = `
                                        <h3 class='title'> ${product.titulo} </h3>
                                        <img src='${product.foto}' alt='' class='productPic'>
                                        <p class='price'>Precio: $${product.precio}</p>
                                        <p class='platform'>Plataforma: <span class='acento'>${product.plataforma}</span></p>
                                        <button class='addProduct' id='${product.id}'> Agregar Producto </button>
                                        `;
            sectionProducts.appendChild(nuevoProducto);
            $(`#${product.id}`).click(()=>{
                agregarCarrito(`${product.id}`, json,
                `<h3 class='title'>${product.titulo}</h3>
                <p class='categoria'>Categoria: ${product.categoria}</p>
                <p class='price'>Precio: $${product.precio}</p>
                <p class='platform'>Plataforma: <span class='acento'>${product.plataforma}</span></p>
                `);
            })
        })
    }).catch(err => console.log('No se pudo cargar el JSON: ' + err))


signUp.addEventListener('click',(e)=>{
    window.location.href = "./pages/signup.html";
})

let generarCodigo = () =>{
    let code = '';
    let numbChars = '0123456789'
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let minusChars = 'abcdefghijklmnopqrstuvwxyz'
        for (let i = 0; i < 6; i++){
            code+= numbChars.concat(chars,minusChars)[Math.floor(Math.random() * numbChars.concat(chars,minusChars).length)]
        }
        return code;
    }

logOut.addEventListener('click',(e)=>{
    Swal.fire({
        title: '¿Quieres cerrar sesión?',
        icon: 'warning',
        background: '#121212',
        showCancelButton: true,
        confirmButtonColor: '#111111',
        cancelButtonColor: '#111111',
        confirmButtonText: 'Cerrar Sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('datos');
            window.location.href = "./index.html";
        }
    })
})

// Comprobación de datos en localStorage para mostrar el nombre del usuario en el DOM.

const comprobarSignUp = ()  => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('datos') && localStorage.getItem('email')){
            resolve('Bienvenido de nuevo');
        } else {
            reject('No estas registrado');
        }
    })
}

const mostrarDatos = async () => {
    comprobarSignUp()
    .then(res =>{
        signUp.remove();
        interaction.appendChild(logOut);
        let elementoUsuario = document.createElement('p');
        elementoUsuario.className = 'username animate__animated animate__fadeIn animate__delay-1s animate__medium';
        elementoUsuario.innerHTML = `Bienvenido <span>${localStorage.getItem('datos')}</span>`;
        bienvenida.appendChild(elementoUsuario);
        console.log(generarCodigo());
    }).catch(err =>{
        setInterval(() => {
            Toastify({
                text: '¡Logueate para obtener increibles beneficios!',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            }).showToast();
        }, 30000);
    })
}

mostrarDatos();

// DOM PARA PARALLAX BOTON

const buttonParallax = document.querySelector('.button--parallax');

buttonParallax.addEventListener('click',(e)=>{
    Swal.fire({
        title: '¡Aprovecha las ofertas de la semana!',
        html: '<p>¡Durante solo esta semana con tu codigo de usuario tenes hasta un 50% de descuento en todos los juegos!</p><br><p>¡No te quedes sin tus juegos favoritos!</p>',
        icon: 'info',
        background: '#121212',
        confirmButtonColor: '#111111',
        confirmButtonText: '¡Entendido!'
    })
})