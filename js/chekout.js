const nombre =  document.getElementById('nombre')
const apellido =  document.getElementById('apellido')
const direccion =  document.getElementById('direccion')
const email =  document.getElementById('email')
const telefono =  document.getElementById('telefono')
const tarjeta =  document.getElementById('tarjeta')
const cv =  document.getElementById('cvv')
const vencimiento =  document.getElementById('vencimiento')
const montoFinal = document.querySelector('.monto-final')

montoFinal.innerText = `$${localStorage.getItem('total')}, ${JSON.parse(localStorage.getItem('carrito')).length} productos`;

// testear expresiones regulares  = expReg.test(objeto.value)

const validacionCheckout = () => {
    const expRegNombre = /^[a-zA-Z\s]{3,30}$/;
    const expRegApellido = /^[a-zA-Z\s]{3,30}$/;
    const expRegDireccion = /^.{1,255}$/;
    const expRegEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const expRegTelefono = /^\d{10}$/;
    const expRegTarjeta = /^\d{16}$/;
    const expRegCVV = /^\d{3}$/;
    return new Promise((resolve, reject) => {
        if (nombre.value.length > 0 && apellido.value.length > 0 && direccion.value.length > 0 && email.value.length > 0 && telefono.value.length > 0 && tarjeta.value.length > 0 && cv.value.length > 0 && vencimiento.value.length > 0) {
            if (expRegNombre.test(nombre.value) && expRegApellido.test(apellido.value) && expRegDireccion.test(direccion.value) && expRegEmail.test(email.value) && expRegTelefono.test(telefono.value) && expRegTarjeta.test(tarjeta.value) && expRegCVV.test(cv.value)) {
                resolve('¡Compra realizada correctamente!');
            } else if (!expRegNombre.test(nombre.value)) {
                reject('El nombre debe tener entre 3 y 30 caracteres y no puede contener números');
            } else if (!expRegApellido.test(apellido.value)) {
                reject('El apellido debe tener entre 3 y 30 caracteres y no puede contener números');
            } else if (!expRegDireccion.test(direccion.value)) {
                reject('La dirección debe tener entre 1 y 255 caracteres');
            } else if (!expRegEmail.test(email.value)) {
                reject('El email no es válido');
            } else if (!expRegTelefono.test(telefono.value)) {
                reject('El teléfono debe tener 10 dígitos');
            } else if (!expRegTarjeta.test(tarjeta.value)) {
                reject('El número de tarjeta debe tener 16 dígitos');
            } else if (!expRegCVV.test(cv.value)) {
                reject('El CVV debe tener 3 dígitos');
            }
        } else {
            reject('Todos los campos son obligatorios');
        }
    })
}

const enviarFormulario = async () => {
validacionCheckout()
    .then((res) => {
        Swal.fire({
            icon: 'success',
            title: '¡Compra realizada con exito!',
            text: res,
            showConfirmButton: false,
            timer: 2500
        })
        localStorage.removeItem('carrito');
        localStorage.removeItem('total');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2500);
    })
    .catch((err) => {
        Toastify({
            text: err,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff0000, #d80254)",
        }).showToast();
    })
}

const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', enviarFormulario);

const goBack = document.getElementById('goBack');

goBack.addEventListener('click', () =>{
    window.location.href = "./carrito.html";
})
