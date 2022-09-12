const expReg = {
    eNombre: /^[a-zA-Z\s]{3,30}$/,
    eApellido: /^[a-zA-Z\s]{3,30}$/,
    eDireccion: /^.{1,255}$/,
    eEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    eTelefono: /^\d{10}$/,
    eTarjeta: /^\d{16}$/,
    eCvv: /^\d{3}$/,
    eConsulta: /^.{1,255}$/
}

export default expReg;