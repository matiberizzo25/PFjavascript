// Inicializamos el array de carrito, luego lo utilizaremos para el LocalStorage:

let carrito = [];

const sectionProducts = document.querySelector('#products');

fetch('../json/data.json')
    .then((res)=> res.json())
    .then((json)=>{
        json.forEach(product =>{
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
                agregarCarrito(`${product.id}`,json)
            })
        })
    });

// Creacion y seleccion de elementos:

const sectionCarrito = document.getElementById('carrito');

const totalCompra = document.createElement('div');
const montoTotalCompra = document.createElement('h3');
const cantProductos = document.createElement('p');
const buttonEnd = document.createElement('button');

totalCompra.className = 'contenedorCarrito';
buttonEnd.className = 'btnEnd';

totalCompra.innerHTML = `<h2> Carrito </h2> `;
montoTotalCompra.innerHTML = '$0';
cantProductos.innerHTML = 'Cantidad de productos: 0';
buttonEnd.innerHTML = 'Finalizar Compra';

sectionCarrito.appendChild(totalCompra);
totalCompra.appendChild(montoTotalCompra);
totalCompra.appendChild(cantProductos);
totalCompra.appendChild(buttonEnd);

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
            html: '<p class="mondongo">Tu compra se finalizo con exito.</p>',
            background: '#121212',
            confirmButtonColor: '#111111',
        }
        )
        vaciarCarrito();
        }
    })
}

// funciones para agregar al carrito, calcularlo y vaciarlo

const agregarCarrito = (id,direction) =>{
    carrito.push(direction.find(prods => prods.id == id));
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

// tenemos que asignarle a cantidad de productos y a monto total que se escriban con el localStorage asi no perdemos los datos al actualizar la pagina.

fetch(' https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log(json);
    }).catch(err => console.log(err));
