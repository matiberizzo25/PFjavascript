import { signUp, logOut, bienvenida, notif, interaction } from "../export/dom.js";

logOut.className = 'log-out';
logOut.innerHTML = 'LOG OUT';

const comprobarSignUp = ()  => {
        if (localStorage.getItem('datos')){
        signUp.remove();
        interaction.appendChild(logOut);
        let elementoUsuario = document.createElement('p');
        elementoUsuario.className = 'username animate__animated animate__fadeIn animate__delay-1s animate__medium';
        elementoUsuario.innerHTML = `Bienvenido <span>${localStorage.getItem('datos')}</span>`;
        bienvenida.appendChild(elementoUsuario);
        } else {
            setInterval(() => {
                Toastify({
                    text: '¡Logueate para obtener increibles beneficios!',
                    duration: 3000,
                    gravity: 'bottom',
                    position: 'right',
                    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
                }).showToast();
            }, 30000);
        }
}

const comprobarCarrito = () => {
    if (localStorage.getItem('carrito')){
        notif.innerHTML = JSON.parse(localStorage.getItem('carrito')).length;
    } else {
        notif.innerHTML = '';
    }
}

comprobarCarrito();
comprobarSignUp();