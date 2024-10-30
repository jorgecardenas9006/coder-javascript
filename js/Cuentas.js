//importar data.js
const data = require('./data.js');

class Cuentas {
    constructor() {
        this._cuentas = [];
        this._data = data;
    }
        get cuentas() {
            return this._cuentas;
        }
    
        set cuentas(cuenta) {
            this._cuentas.push(cuenta);
        }
    
        getCuenta(cuenta) {
            return this._data.find(u => u.usuario === cuenta);
        }
        consultarSaldo(cuenta) {
            let u = this.getCuenta(cuenta);
            if (u) {
                return u.saldoCuentaAhorros;
            }
            return null;
        }
        montoRetirar(cuenta, monto) {
            let u = this.getCuenta(cuenta);
            if (u) {
                u.saldoCuentaAhorros -= monto;
                return u.saldoCuentaAhorros;
            }
            return null;
        }
}
module.exports = Cuentas;