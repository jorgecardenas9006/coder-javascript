/*
===================================================================
Proyecto:    PRACTICA DE BACKEND 1
Modulo:      1
Nombre proyecto:   cajero automatico
===================================================================
*/
const Usuarios = require('./Usuarios');
const readline = require('readline');
global.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usuario = new Usuarios();

rl.question('Por favor digite alguna de las siguiente opciones: \n1. Consultar saldo \n2. Retirar dinero \n3. Depositar dinero \n4. Cambiar contraseña \n5. Salir \n', (response) => {
    switch(response){
        case '1':
            usuario.solicitarDatos();
            break;
        case '2':
            console.log('Retirar dinero');
            break;
        case '3':
            console.log('Depositar dinero');
            break;
        case '4':
            console.log('Cambiar de contraseña');
            break;
        case '5':
            console.log('Gracias por usar nuestros servicios');
            break;
        default:
            console.log('Opcion no valida');
            break;
    }
    rl.close();
});