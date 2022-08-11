const obtainProducts = localStorage.getItem('Listado de Productos');

let parseProducts = JSON.parse(obtainProducts);
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
                                <form action='#'>
                                <button class='addProduct'> Agregar Producto </button>
                                </form>`;
    sectionProducts.appendChild(nuevoProducto);
});

