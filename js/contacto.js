const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const consulta = document.getElementById('consulta');
const enviar = document.getElementById('enviar');

const validacionContacto = () => {
    const expRegNombre = /^[a-zA-Z\s]{3,30}$/;
    const expRegApellido = /^[a-zA-Z\s]{3,30}$/;
    const expRegEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const expRegTelefono = /^\d{10}$/;
    const expRegConsulta = /^.{1,255}$/;
    let validacion = true;
    return new Promise((resolve, reject) => {
        if (nombre.value.length > 0 && apellido.value.length > 0 && email.value.length > 0 && telefono.value.length > 0 && consulta.value.length > 0) {
            if (expRegNombre.test(nombre.value) && expRegApellido.test(apellido.value) && expRegEmail.test(email.value) && expRegTelefono.test(telefono.value) && expRegConsulta.test(consulta.value)) {
                resolve('¡Formulario enviado correctamente!');
            } else if (!expRegNombre.test(nombre.value)) {
                reject('El nombre debe tener entre 3 y 30 caracteres y no puede contener números');
                validacion = false;
            } else if (!expRegApellido.test(apellido.value)) {
                reject('El apellido debe tener entre 3 y 30 caracteres y no puede contener números');
                validacion = false;
            } else if (!expRegEmail.test(email.value)) {
                reject('El email no es válido');
                validacion = false;
            } else if (!expRegTelefono.test(telefono.value)) {
                reject('El teléfono debe tener 10 dígitos');
                validacion = false;
            } else if (!expRegConsulta.test(consulta.value)) {
                reject('La consulta debe tener entre 1 y 255 caracteres');
                validacion = false;
            }
        } else {
            reject('Todos los campos son obligatorios');
            validacion = false;
        }
    })
}

const enviarDatos = () => {
    validacionContacto().then((res) => {
        Toastify({
            text: res,
            duration: 3000,
            newWindow: true,
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        }).showToast();
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    }).catch(error => {
        Toastify({
            text: error,
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
        }).showToast();
    })
}

enviar.addEventListener('click', enviarDatos);

if (localStorage.getItem('datos')){
    let datos = localStorage.getItem('datos');
    let emailSt = localStorage.getItem('email');
    datos = datos.split(' ');
    nombre.value = datos[0];
    apellido.value = datos[1];
    email.value = emailSt;
}