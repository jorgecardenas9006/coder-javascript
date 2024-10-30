/*
===================================================================
Proyecto:    PRACTICA DE BACKEND 1
Version:      0.0.1
Nombre proyecto:   cajero automatico
===================================================================
*/
const Usuarios = require('./Usuarios');
const readline = require('readline');
const Cuenta = require('./Cuentas');

global.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usuario = new Usuarios();
const cuenta = new Cuenta();

function mostrarMenu() {
    rl.question('Por favor digite alguna de las siguientes opciones: \n1. Consultar saldo \n2. Retirar dinero \n3. Depositar dinero \n4. Cambiar contraseña \n5. Salir \n', (response) => {
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
                rl.close();
                break;
            default:
                console.log('Opción no válida');
                mostrarMenu();
                break;
        }
    });
}

// Inicia el menú
mostrarMenu();
