import {
    formulario,
    nombre,
    apellido,
    edad,
    correo,
    contrasena,
    confirmarContrasena,
    submit,
    goBack,
    instructionList
} from "../export/dom.js"

// Validacion del formulario

const validarFormulario = () => {
    return new Promise((resolve, reject) => {
        if (nombre.value.length > 0 && apellido.value.length > 0 && edad.value.length > 0 && correo.value.length > 0 && contrasena.value.length > 0 && confirmarContrasena.value.length > 0){
            if (contrasena.value === confirmarContrasena.value && contrasena.value.length >= 6 && confirmarContrasena.value.length >= 6) {
                resolve('¡Formulario enviado correctamente!');
            } else if (contrasena.value.length < 6) {
                reject('La contraseña debe tener al menos 6 caracteres');
                instructionList[0].classList.add('error');
            } else {
                reject('Las contraseñas no coinciden');
                instructionList[1].classList.add('error');
            }
        } else {
            reject('Todos los campos son obligatorios');
            instructionList[2].classList.add('error');
        }
    })
}

// Comprobamos que todo este correcto y si lo esta guardamos datos en localStorage para utilizarlos mas tarde. Si no, mostramos un mensaje de error.

const enviarDatos = () => {
    validarFormulario().then((res) => {
        Toastify({
            text: res,
            duration: 3000,
            newWindow: true,
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        }).showToast();
        const datos = nombre.value + ' ' + apellido.value;
        const email = correo.value;
        setTimeout(() => {
            localStorage.setItem('datos', datos);
            localStorage.setItem('email', email);
            window.location.href = "../index.html";
        }, 2000);
        
    }).catch(error => {
        Toastify({
            text: error,
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
            }).showToast();
    }).finally(() => {
        nombre.value = '';
        apellido.value = '';
        edad.value = '';
        correo.value = '';
        contrasena.value = '';
        confirmarContrasena.value = '';
    })}


// Boton para volver a la pagina principal

goBack.addEventListener('click',(e)=>{
    window.location.href = "../index.html";
})

// Evento del boton submit

submit.addEventListener('click', enviarDatos);
