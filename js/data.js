const exp = require("constants");

const cuentas = [
    {
        nombre: "Juan Pérez",
        usuario: "jperez",
        password: "password123",
        idCuenta: 1,
        saldoCuentaAhorros: 1500.75,
        estadoCuenta: true,
        fechaCreacion: "2023-01-15",
        tipoCuenta: "ahorros",
        email: "jperez@ejemplo.com",
        telefono: "+123456789"
    },
    {
        nombre: "Ana Gómez",
        usuario: "agomez",
        password: "securepass456",
        idCuenta: 2,
        saldoCuentaAhorros: 2500.50,
        estadoCuenta: true,
        fechaCreacion: "2022-05-22",
        tipoCuenta: "ahorros",
        email: "agomez@ejemplo.com",
        telefono: "+987654321"
    },
    {
        nombre: "Luis Rodríguez",
        usuario: "lrodriguez",
        password: "mypassword789",
        idCuenta: 3,
        saldoCuentaAhorros: 500.00,
        estadoCuenta: false,
        fechaCreacion: "2021-08-10",
        tipoCuenta: "ahorros",
        email: "lrodriguez@ejemplo.com",
        telefono: "+1122334455"
    },
    {
        nombre: "Carmen Sánchez",
        usuario: "csanchez",
        password: "pass2021",
        idCuenta: 4,
        saldoCuentaAhorros: 800.25,
        estadoCuenta: true,
        fechaCreacion: "2020-11-10",
        tipoCuenta: "ahorros",
        email: "csanchez@ejemplo.com",
        telefono: "+5544332211"
    },
    {
        nombre: "Pedro López",
        usuario: "plopez",
        password: "secure9876",
        idCuenta: 5,
        saldoCuentaAhorros: 1250.00,
        estadoCuenta: true,
        fechaCreacion: "2022-01-05",
        tipoCuenta: "ahorros",
        email: "plopez@ejemplo.com",
        telefono: "+122334455"
    },
    {
        nombre: "Lucía Martínez",
        usuario: "lmartinez",
        password: "luciaPass098",
        idCuenta: 6,
        saldoCuentaAhorros: 2300.45,
        estadoCuenta: true,
        fechaCreacion: "2021-09-12",
        tipoCuenta: "ahorros",
        email: "lmartinez@ejemplo.com",
        telefono: "+9988776655"
    },
    {
        nombre: "Roberto Díaz",
        usuario: "rdiaz",
        password: "robertSecure21",
        idCuenta: 7,
        saldoCuentaAhorros: 450.90,
        estadoCuenta: false,
        fechaCreacion: "2023-02-28",
        tipoCuenta: "ahorros",
        email: "rdiaz@ejemplo.com",
        telefono: "+1122112233"
    },
    {
        nombre: "María Castillo",
        usuario: "mcastillo",
        password: "mariacast789",
        idCuenta: 8,
        saldoCuentaAhorros: 1900.00,
        estadoCuenta: true,
        fechaCreacion: "2021-03-15",
        tipoCuenta: "ahorros",
        email: "mcastillo@ejemplo.com",
        telefono: "+3344556677"
    },
    {
        nombre: "Carlos Morales",
        usuario: "cmorales",
        password: "carpass1234",
        idCuenta: 9,
        saldoCuentaAhorros: 1350.35,
        estadoCuenta: true,
        fechaCreacion: "2020-12-20",
        tipoCuenta: "ahorros",
        email: "cmorales@ejemplo.com",
        telefono: "+8899776655"
    },
    {
        nombre: "Sofía Ruiz",
        usuario: "sruiz",
        password: "sofiasecure!",
        idCuenta: 10,
        saldoCuentaAhorros: 650.80,
        estadoCuenta: false,
        fechaCreacion: "2019-10-10",
        tipoCuenta: "ahorros",
        email: "sruiz@ejemplo.com",
        telefono: "+6677889900"
    },
    {
        nombre: "Gabriel Fernández",
        usuario: "gfernandez",
        password: "gabpass2020",
        idCuenta: 11,
        saldoCuentaAhorros: 1000.20,
        estadoCuenta: true,
        fechaCreacion: "2021-06-22",
        tipoCuenta: "ahorros",
        email: "gfernandez@ejemplo.com",
        telefono: "+1122445566"
    },
    {
        nombre: "Isabel Vargas",
        usuario: "ivargas",
        password: "isapass890",
        idCuenta: 12,
        saldoCuentaAhorros: 780.00,
        estadoCuenta: true,
        fechaCreacion: "2023-04-05",
        tipoCuenta: "ahorros",
        email: "ivargas@ejemplo.com",
        telefono: "+5566778899"
    },
    {
        nombre: "Diego Ramírez",
        usuario: "dramirez",
        password: "di3gopass",
        idCuenta: 13,
        saldoCuentaAhorros: 250.55,
        estadoCuenta: false,
        fechaCreacion: "2022-07-17",
        tipoCuenta: "ahorros",
        email: "dramirez@ejemplo.com",
        telefono: "+9988774433"
    },
    {
        nombre: "Paola Mendoza",
        usuario: "pmendoza",
        password: "pmendoza#321",
        idCuenta: 14,
        saldoCuentaAhorros: 3000.00,
        estadoCuenta: true,
        fechaCreacion: "2019-02-20",
        tipoCuenta: "ahorros",
        email: "pmendoza@ejemplo.com",
        telefono: "+4433221100"
    },
    {
        nombre: "Esteban Torres",
        usuario: "etorres",
        password: "estebansecure!",
        idCuenta: 15,
        saldoCuentaAhorros: 500.00,
        estadoCuenta: false,
        fechaCreacion: "2020-06-10",
        tipoCuenta: "ahorros",
        email: "etorres@ejemplo.com",
        telefono: "+8877665544"
    }
];

//export default usuarios;
module.exports = cuentas;