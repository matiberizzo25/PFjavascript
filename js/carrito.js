import { notif } from "../export/dom.js";

const sectCart = document.getElementById('contenedor--carrito');
const cart = document.getElementById('carrito');
const TotalCompra = document.createElement('h3');
const cantProds = document.createElement('p');
const btnEnd = document.createElement('button');
const delAll = document.createElement('button');
const cartProds = document.getElementById('carrito-prods');
const alertCont = document.createElement('div');

sectCart.appendChild(cartProds);
delAll.innerHTML = "Vaciar Carrito";
btnEnd.className = 'btnEnd';
btnEnd.innerHTML = 'Finalizar Compra';

let carrito = [];

alertCont.innerHTML = `<h4>¡Oops! Tu carrito esta vacio. Para comprar, redirigete a la seccion de <a href="../index.html" class='acento'>INICIO</a></h4>`;

if (localStorage.getItem('carrito') != null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    TotalCompra.innerHTML = `Total: $${localStorage.getItem('total')}`;
    cantProds.innerHTML = `Productos: ${carrito.length}`;
    cart.appendChild(TotalCompra);
    cart.appendChild(cantProds);
    cart.appendChild(btnEnd);
    cart.appendChild(delAll);

    carrito.forEach((prods) =>{
        const prod = document.createElement('div');
        prod.className = 'prod';
        prod.innerHTML = `
        <div class="prodCo">
            <div class="cartImg" style='background:url(".${prods.foto}");background-position:center center;background-size: cover;'>
            <div class="prod-info">
                <p>TITULO: ${prods.titulo}</p>
                <p>PRECIO: $${prods.precio}</p>
                </div>
        </div>`;
        cartProds.appendChild(prod);
    })
} else {
    cart.appendChild(alertCont);
    cartProds.remove();
}

const calcularCarrito = () =>{
    let total = 0;
    carrito.forEach((prods) =>{
        total += prods.precio;
    })
    localStorage.setItem('total', total);
    carrito = JSON.parse(localStorage.getItem('carrito'));
    TotalCompra.innerText = `Total: $${localStorage.getItem('total')}`;
    cantProds.innerText = `Productos: ${carrito.length}`;
}

const agregarCarrito = (id,url,prodProperty) =>{
    Swal.fire({
        title: '¿Agregar al carrito?',
        html: prodProperty,
        background: '#121212',
        confirmButtonColor: '#111111',
        cancelButtonColor: '#111111',
        showCancelButton: true,
        confirmButtonText: 'Agregar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Producto agregado!',
                html: '<p>El producto se agrego al carrito.</p>',
                background: '#121212',
                confirmButtonColor: '#111111',
            }
            )
            notif.innerText = carrito.length + 1;
            carrito.push(url.find(prods => prods.id == id));
            localStorage.setItem("carrito", JSON.stringify(carrito));
            calcularCarrito();
        }
    })
}

const vaciarCarrito = () =>{
    TotalCompra.innerText = "";
    cantProds.innerText = "";
    notif.innerText = "";
    localStorage.removeItem('carrito');
    localStorage.removeItem('total');
    btnEnd.remove();
    delAll.remove();
    cart.appendChild(alertCont);
    cartProds.remove();
    cartProds.innerHTML = "";
    carrito = [];

}

btnEnd.onclick = () => {
    const precioFinal = TotalCompra.innerText;
    Swal.fire({
        title: 'Quieres realizar la compra?',
        html: `<h4>Precio ${precioFinal}</h4>`,
        icon: 'warning',
        background: '#121212',
        showCancelButton: true,
        confirmButtonColor: '#111111',
        cancelButtonColor: '#111111',
        confirmButtonText: 'Finalizar Compra'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./checkout.html";
        }
    })
}

delAll.onclick = () => {
    Swal.fire({
        title: '¿Quieres vaciar el carrito?',
        html: '<p>Los productos se eliminaran del carrito.</p>',
        icon: 'warning',
        background: '#121212',
        showCancelButton: true,
        confirmButtonColor: '#111111',
        cancelButtonColor: '#111111',
        confirmButtonText: 'Vaciar'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: 'Carrito vaciado!',
            html: '<p>Los productos se eliminaron del carrito.</p>',
            background: '#121212',
            confirmButtonColor: '#111111',
        }
        )
        vaciarCarrito();
        }
    })
}


export {agregarCarrito, calcularCarrito, vaciarCarrito}

