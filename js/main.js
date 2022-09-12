import {
    sectionProducts,
    signUp,
    logOut,
} from "../export/dom.js";

import {agregarCarrito} from './carrito.js';

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

// DOM PARA PARALLAX BOTON

const buttonParallax = document.querySelector('.button--parallax');

buttonParallax.addEventListener('click',(e)=>{
    Swal.fire({
        title: '¡Aprovecha las ofertas de la semana!',
        html: '<p>¡Durante solo esta semana tenes hasta un 50% de descuento en todos los juegos!</p><br><p>¡No te quedes sin tus juegos favoritos!</p>',
        icon: 'info',
        background: '#121212',
        confirmButtonColor: '#111111',
        confirmButtonText: '¡Entendido!'
    })
})