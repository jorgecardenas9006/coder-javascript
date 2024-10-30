//importar data.js
import { data } from './data.js';
//importar usuarios.js
import Usuarios from './usuarios.js'; 

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
            return this._cuentas.find(u => u.usuario === cuenta);
        }
}