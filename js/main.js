// Inicializamos el array de carrito, luego lo utilizaremos para el LocalStorage:
window.addEventListener('load',()=>{
    let carrito = [];

const obtainProducts = localStorage.getItem('Listado de Productos');

//Parseo para obtener los productos y poder realizar el maquetado mediante DOM:

const parseProducts = JSON.parse(obtainProducts);
console.log(parseProducts);

const sectionProducts = document.querySelector('#products');

parseProducts.forEach(product =>{
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

    document.getElementById(`${product.id}`).onclick =()=> agregarCarrito(`${product.id}`);
});


// Creacion y seleccion de elementos:

const sectionCarrito = document.getElementById('carrito');

const totalCompra = document.createElement('div');
const montoTotalCompra = document.createElement('h3');
const cantProductos = document.createElement('p');
const buttonEnd = document.createElement('button');

totalCompra.className = 'contenedorCarrito';
totalCompra.innerHTML = `<h2> Carrito </h2> `;
montoTotalCompra.innerHTML = 'Monto: $0';
cantProductos.innerHTML = 'Cantidad de productos: 0';
buttonEnd.innerHTML = 'Finalizar Compra';
buttonEnd.className = 'btnEnd';

sectionCarrito.appendChild(totalCompra);
totalCompra.appendChild(montoTotalCompra);
totalCompra.appendChild(cantProductos);
totalCompra.appendChild(buttonEnd);

buttonEnd.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert(`Fin del ${precioFinal}`);
    vaciarCarrito();
}

function agregarCarrito(id){
    carrito.push(parseProducts.find(prods => prods.id == id));
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    console.log(carrito);
    calcularCarrito();
}

function calcularCarrito(){
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    montoTotalCompra.innerText = 'Monto: $' + total;
    cantProductos.innerText = 'Cantidad de Productos: ' + carrito.length;
}

function vaciarCarrito(){
    montoTotalCompra.innerText = "0";
    cantProductos.innerText = "0";
    localStorage.removeItem('Carrito');
    carrito = [];
}
});
