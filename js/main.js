const obtainProducts = localStorage.getItem('Listado de Productos');

let parseProducts = JSON.parse(obtainProducts);
console.log(parseProducts);

const sectionProducts = document.querySelector('#products');

parseProducts.forEach(product =>{
    let nuevoProducto = document.createElement('div');
    nuevoProducto.className = 'product';
    nuevoProducto.innerHTML = `
                                <h3> ${product.titulo} </h3>
                                <p> ${product.precio}</p>
                                <p>${product.plataforma}</p>
                                <form action='#'>
                                <button class='addProduct'> Agregar Producto </button>
                                </form>`;
    sectionProducts.appendChild(nuevoProducto);
});

