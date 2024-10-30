// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)
const data = require('./data.js');

class Usuarios {
    constructor() {
        this._usuarios = data; // Asegúrate de que data sea un arreglo de usuarios [{ usuario, senha }]
    }

    getUsuario(usuario) {
        return this._usuarios.find(u => u.usuario === usuario);
    }

    login(usuario, senha) {
        let u = this.getUsuario(usuario);
        if (u && u.senha === senha) {
            return true;
        }
        return false;
    }

    solicitarDatos() {
        rl.question('Por favor digite su usuario: ', (usuario) => {
            rl.question('Por favor digite su contraseña: ', (senha) => {
                if (this.login(usuario, senha)) {
                    console.log('Login exitoso');
                } else {
                    console.log('Usuario o contraseña incorrectos');
                }
                rl.close();
            });
        });
    }
}

module.exports = Usuarios;
