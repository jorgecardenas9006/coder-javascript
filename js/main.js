/*
===================================================================
Proyecto:    PRACTICA DE JAVASCRIPT 1
Version:      0.0.1
Nombre proyecto:   cajero automatico javascript
===================================================================
*/
import Usuarios from "./Usuarios.js";
import Cuentas from "./Cuentas.js"

const usuario = new Usuarios();
const cuenta = new Cuentas();
let response = '';

function mostrarMenu() {
    response =prompt('Por favor digite alguna de las siguientes opciones: \n1. Consultar saldo \n2. Retirar dinero \n3. Depositar dinero \n4. Cambiar contraseña \n5. Salir \n')
    // Validar si el usuario y contraseña son correctos
    let user = usuario.solicitarUsuario();
    let pass = usuario.solicitarPassword();
    response = !usuario.login(user, pass) ? (console.log('Usuario o contraseña incorrectos'), '5') : response;
    switch(response) {
        case '1':
            console.log('Tu saldo es: ', cuenta.consultarSaldo(user));
            mostrarMenu();  
            break;
        case '2':
            console.log('data de la cuenta:', cuenta.getCuenta(user));
            break;
        case '3':
            console.log('Depositar dinero');
            mostrarMenu();  
            break;
        case '4':
            console.log('Cambiar de contraseña');
            mostrarMenu();  
            break;
        case '5':
            console.log('Gracias por usar nuestros servicios');
            break;
        default:
            console.log('Opción no válida');
            mostrarMenu();
            break;
    }
}

// Inicia el menú
mostrarMenu();