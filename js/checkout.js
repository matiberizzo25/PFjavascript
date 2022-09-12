import expReg from "../export/expresiones.js";
import {
    nombre,
    apellido,
    direccion,
    email,
    telefono,
    tarjeta,
    cv,
    montoFinal
} from "../export/dom.js";

montoFinal.innerText = `$${localStorage.getItem('total')}, ${JSON.parse(localStorage.getItem('carrito')).length} productos`;

// Validacion del checkout

const checkoutVal = () => {
    return new Promise((resolve, reject) => {
            if (expReg.eNombre.test(nombre.value) && expReg.eApellido.test(apellido.value) && expReg.eDireccion.test(direccion.value) && expReg.eEmail.test(email.value) && expReg.eTelefono.test(telefono.value) && expReg.eTarjeta.test(tarjeta.value) && expReg.eCvv.test(cv.value)) {
                resolve('¡Compra realizada correctamente!');
            } else if (!expReg.eNombre.test(nombre.value)) {
                reject('El nombre debe tener entre 3 y 30 caracteres y no puede contener números');
            }
            else if (!expReg.eApellido.test(apellido.value)) {
                reject('El apellido debe tener entre 3 y 30 caracteres y no puede contener números');
            }
            else if (!expReg.eDireccion.test(direccion.value)) {
                reject('La dirección debe tener entre 3 y 30 caracteres');
            }
            else if (!expReg.eEmail.test(email.value)) {
                reject('El email no es válido');
            }
            else if (!expReg.eTelefono.test(telefono.value)) {
                reject('El teléfono debe tener 10 dígitos');
            }
            else if (!expReg.eTarjeta.test(tarjeta.value)) {
                reject('La tarjeta debe tener 16 dígitos');
            }
            else if (!expReg.eCvv.test(cv.value)) {
                reject('El CVV debe tener 3 dígitos');
            }
    });
}

const checkout =  () => {
    checkoutVal().then((res) => {
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 3000
        });
        setTimeout(() => {
            localStorage.removeItem('carrito');
            localStorage.removeItem('total');
            window.location.href = '../index.html';
        }, 1500);
    }).catch((err) => {
        Toastify({
            text: err,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
            stopOnFocus: true,
        }).showToast();
    });
}

const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', checkout);

const goBack = document.getElementById('goBack');

goBack.addEventListener('click', () => {
    window.location.href = "./carrito.html";
})

// En el checkout la primera vez no funciona de la mejor manera pero si cuando se recarga la pagina