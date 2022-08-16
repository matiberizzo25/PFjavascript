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

    $(`#${product.id}`).click((e)=>{
        agregarCarrito(`${product.id}`)
    })
});

// seleccion de links del menu para efectos:

const links = $('a');

links.click((e)=>{
    if(links[0] == e.target){
        links[0].style.color = '#8C1858';
        links[1].style.color = '#f5f5f5e5';
        links[2].style.color = '#f5f5f5e5';
        links[3].style.color = '#f5f5f5e5';
    }
    else if(links[1] == e.target){
        links[0].style.color = '#f5f5f5e5';
        links[1].style.color = '#8C1858';
        links[2].style.color = '#f5f5f5e5';
        links[3].style.color = '#f5f5f5e5';
    }
    else if(links[2] == e.target){
        links[0].style.color = '#f5f5f5e5';
        links[1].style.color = '#f5f5f5e5';
        links[2].style.color = '#8C1858';
        links[3].style.color = '#f5f5f5e5';
    }
    else if(links[3] == e.target){
        links[0].style.color = '#f5f5f5e5';
        links[1].style.color = '#f5f5f5e5';
        links[2].style.color = '#f5f5f5e5';
        links[3].style.color = '#8C1858';
    }
})


// Creacion y seleccion de elementos:

const sectionCarrito = document.getElementById('carrito');

const totalCompra = document.createElement('div');
const montoTotalCompra = document.createElement('h3');
const cantProductos = document.createElement('p');
const buttonEnd = document.createElement('button');

totalCompra.className = 'contenedorCarrito';
totalCompra.innerHTML = `<h2> Carrito </h2> `;
montoTotalCompra.innerHTML = '$0';
cantProductos.innerHTML = 'Cantidad de productos: 0';
buttonEnd.innerHTML = 'Finalizar Compra';
buttonEnd.className = 'btnEnd';

sectionCarrito.appendChild(totalCompra);
totalCompra.appendChild(montoTotalCompra);
totalCompra.appendChild(cantProductos);
totalCompra.appendChild(buttonEnd);

buttonEnd.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;

    // alert(`Fin del ${precioFinal}`);
    Swal.fire({
        title: 'Quieres realizar la compra?',
        html: `<h4>Precio final: ${precioFinal}</h4>
        <p> Agregamos un 10% de descuento por compras mayores a $10000 </p>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Finalizar Compra'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Compra Finalizada!',
            'Tu compra se finalizo con exito.',
            'success'
        )
        vaciarCarrito();
        }
    })
}

function agregarCarrito(id){
    carrito.push(parseProducts.find(prods => prods.id == id));
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    console.log(carrito);
    calcularCarrito();
    Swal.fire({
        text: '¡Producto agregado al carrito!'
    })
}

function calcularCarrito(){
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;

        // para el desafio complementario:
        let totalDescuento = total * 0.15;
        let totalConDescuento = total - totalDescuento;
        (total > 10000) ? console.log(totalConDescuento):console.log('no tiene descuento');
    }
    montoTotalCompra.innerText = total;
    cantProductos.innerText = 'Cantidad de Productos: ' + carrito.length;
}

function vaciarCarrito(){
    montoTotalCompra.innerText = "0";
    cantProductos.innerText = "0";
    localStorage.removeItem('Carrito');
    carrito = [];
}
});

// Para el desafio complementario de optimizacion agregaremos descuentos a ciertos productos con el operador ternario y a esos productos les pondremos un indicador de que tienen tanto porcentaje de descuento.

