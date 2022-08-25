
// Seleccion del DOM

const signUp = document.getElementById('sign-up');
const formulario = document.querySelector('.formulario-hidden');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmar');
const submit = document.querySelector('.submit');

// Validacion del formulario

const validarFormulario = () => {
    return new Promise((resolve, reject) => {
        if (nombre.value.length > 0 && apellido.value.length > 0 && edad.value.length > 0 && correo.value.length > 0 && contrasena.value.length > 0 && confirmarContrasena.value.length > 0) {
            if (contrasena.value === confirmarContrasena.value && contrasena.value.length >= 6) {
                resolve();
            } else if (contrasena.value.length < 6) {
                reject('La contraseña debe tener al menos 6 caracteres');
                Toastify({
                    text: "La contraseña debe tener al menos 6 caracteres",
                    duration: 3000,
                    backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
                    }).showToast();
            } else {
                reject(Toastify({
                    text: "Las contraseñas no coinciden",
                    duration: 3000,
                    backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
                    }).showToast());
                confirmarContrasena.classList.add('error');
            }
        } else {
            reject('Todos los campos son obligatorios');
            Toastify({
                text: "Todos los campos son obligatorios",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
                }).showToast(); 
        }
    })
}

// Comprobamos que todo este correcto y si lo esta guardamos datos en localStorage para utilizarlos mas tarde. Si no, mostramos un mensaje de error.

const enviarFormulario = async () => {
    try {
        await validarFormulario();
        localStorage.setItem('datos', nombre.value + ' ' + apellido.value);
        sessionStorage.setItem('contrasena', contrasena.value);
        Toastify({
            text: "El formulario se ha enviado correctamente",
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
        formulario.classList.add('formulario-hidden');
        formulario.classList.remove('formulario-show');
        confirmarContrasena.classList.remove('error');
        comprobarSignUp();
    } catch (error) {
        Toastify({
            text: 'El formulario no se ha enviado correctamente',
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
            }).showToast();
    }
}

// Evento del boton submit

submit.addEventListener('click', enviarFormulario);

signUp.addEventListener('click', () => {
    formulario.classList.add('formulario-show');
    formulario.classList.remove('formulario-hidden');
    signUp.remove();
})

// Funcion para comprobar el signUp

const comprobarSignUp = ()  => {
    if (localStorage.getItem('datos')) {
        signUp.remove();
        
        let elementoUsuario = document.createElement('h3');
        elementoUsuario.innerHTML = `Bienvenido ${localStorage.getItem('datos')}`;
        document.body.appendChild(elementoUsuario);
    }
}

// llamo a la funcion para comprobar si el usuario esta logueado, si lo esta me devolvera el nombre y el boton signUp ya no estara disponible

comprobarSignUp();