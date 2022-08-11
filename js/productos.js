const products = [
    {id: 1, titulo: 'Mad Max', plataforma: 'XBOX', stock: 73, precio: 554, foto: './assets/1.jpg'},
    {id: 2, titulo: 'Doom 64 standard', plataforma: 'XBOX', stock: 29, precio: 233, foto: './assets/2.jpg'},
    {id: 3, titulo: 'Stela', plataforma: 'XBOX', stock: 30, precio: 554, foto: './assets/3.jpg'},
    {id: 4, titulo: 'Gran Turismo 7', plataforma: 'PS4', stock: 93, precio: 14000, foto: './assets/4.jpg'},
    {id: 5, titulo: 'LEGO Star Wars the Skywalker Saga', plataforma: 'PS4', stock: 73, precio: 554, foto: '../assets/5.jpg'},
    {id: 6, titulo: 'Pokemon Legends', plataforma: 'PS4', stock: 43, precio: 18000, foto: './assets/6.jpg'},
    {id: 7, titulo: 'Ghost of Tsuhishima', plataforma: 'PS4', stock: 12, precio: 10000, foto: './assets/7.jpg'},
    {id: 8, titulo: 'Tom Clancys Rainbow Six Extraction', plataforma: 'PS4', stock: 83, precio: 7000, foto: '../assets/8.png'},
    {id: 9, titulo: 'God of War 4', plataforma: 'PS4', stock: 29, precio: 5000, foto: './assets/9.jpg'},
    {id: 10, titulo: 'Elden Ring', plataforma: 'PS4', stock: 47, precio: 15000, foto: './assets/10.jpg'},
    {id: 11, titulo: 'Horizon Forbiden West', plataforma: 'PS4', stock: 14, precio: 14000, foto: './assets/11.jpeg'},
    {id: 12, titulo: 'Spiderman Miles Morales', plataforma: 'PS4', stock: 38, precio: 14000, foto: './assets/12.jpg'},
    {id: 13, titulo: 'Deagon Ball Z: Kakarot', plataforma: 'PS4', stock: 15, precio: 15000, foto: './assets/13.jpg'},
    {id: 14, titulo: 'Demon Slayer The Hinokami Chronicles', plataforma: 'PS4', stock: 43, precio: 15000, foto: './assets/14.jpg'},
    {id: 15, titulo: 'Sekiro Shadows Die Twice', plataforma: 'PS4', stock: 51, precio: 12000, foto: './assets/15.jpg'},
];

let JSONproducts = JSON.stringify(products);
localStorage.setItem('Listado de Productos',JSONproducts);

// Luego hay que definir las fotos para crearlas en el DOM  