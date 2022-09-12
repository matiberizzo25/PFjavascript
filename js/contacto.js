import expReg from "../export/expresiones.js";
import {
    nombre,
    apellido,
    email,
    telefono,
    consulta,
    enviar
} from "../export/dom.js";

const validacionContacto = () => {
    return new Promise((resolve, reject) => {
        if (nombre.value.length > 0 && apellido.value.length > 0 && email.value.length > 0 && telefono.value.length > 0 && consulta.value.length > 0) {
            if (expReg.eNombre.test(nombre.value) && expReg.eApellido.test(apellido.value) && expReg.eEmail.test(email.value) && expReg.eTelefono.test(telefono.value) && expReg.eConsulta.test(consulta.value)) {
                resolve('¡Formulario enviado correctamente!');
            } else if (!expReg.eNombre.test(nombre.value)) {
                reject('El nombre debe tener entre 3 y 30 caracteres y no puede contener números');
            } else if (!expReg.eApellido.test(apellido.value)) {
                reject('El apellido debe tener entre 3 y 30 caracteres y no puede contener números');
            } else if (!expReg.eEmail.test(email.value)) {
                reject('El email no es válido');
            } else if (!expReg.eTelefono.test(telefono.value)) {
                reject('El teléfono debe tener 10 dígitos');
            } else if (!expReg.eConsulta.test(consulta.value)) {
                reject('La consulta debe tener entre 1 y 255 caracteres');
            }
        } else {
            reject('Todos los campos son obligatorios');
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