import {
    sectionProducts,
    sectionCarrito,
    signUp,
    bienvenida,
    totalCompra,
    montoTotalCompra,
    cantProductos,
    buttonEnd,
    logOut,appendElements
} from "../export/dom.js";


let carrito = [];

// Atributos, clases y html de los elementos del DOM.

logOut.className = 'log-out';
totalCompra.className = 'contenedorCarrito';
buttonEnd.className = 'btnEnd';

logOut.innerHTML = 'Log Out';
totalCompra.innerHTML = `<h2> Carrito </h2>`;
montoTotalCompra.innerHTML = '$0';
cantProductos.innerHTML = 'Cantidad de productos: 0';
buttonEnd.innerHTML = 'Finalizar Compra';

appendElements();

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
                    agregarCarrito(`${product.id}`, json)
                })
            })
        }).catch(err => console.log('No se pudo cargar el JSON: ' + err))

// evento del boton de finalizar compra.

buttonEnd.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    Swal.fire({
        title: 'Quieres realizar la compra?',
        html: `<h4>Precio final: ${precioFinal}</h4>`,
        icon: 'warning',
        background: '#121212',
        showCancelButton: true,
        confirmButtonColor: '#111111',
        cancelButtonColor: '#111111',
        confirmButtonText: 'Finalizar Compra'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: 'Compra Finalizada!',
            html: '<p>Tu compra se finalizo con exito.</p>',
            background: '#121212',
            confirmButtonColor: '#111111',
        }
        )
        vaciarCarrito();
        }
    })
}

// funciones para agregar al carrito, calcularlo y vaciarlo

const agregarCarrito = (id,url) =>{
    carrito.push(url.find(prods => prods.id == id));
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    calcularCarrito();
    Swal.fire({
        text: '¡Producto agregado al carrito!',
        background: '#121212',
        confirmButtonColor: '#111111'
    })
}

const calcularCarrito = () =>{
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    localStorage.setItem('monto', total);
    let parseTotal = localStorage.getItem('monto');
    montoTotalCompra.innerText = '$' + parseTotal;
    cantProductos.innerText = 'Cantidad de Productos: ' + carrito.length;
}

const vaciarCarrito = () =>{
    montoTotalCompra.innerText = "0";
    cantProductos.innerText = "0";
    localStorage.removeItem('Carrito');
    carrito = [];
}

signUp.addEventListener('click',(e)=>{
    window.location.href = "./pages/signup.html";
})

const comprobarSignUp = ()  => {
    if (localStorage.getItem('datos')) {
        signUp.remove();
        const interaction = document.getElementById('interaction');
        interaction.appendChild(logOut);
        let elementoUsuario = document.createElement('p');
        elementoUsuario.className = 'username';
        elementoUsuario.innerHTML = `Bienvenido <span>${localStorage.getItem('datos')}</span>`;
        bienvenida.appendChild(elementoUsuario);
    }
} 

comprobarSignUp();

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
}
)