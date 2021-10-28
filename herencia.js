class Cliente{
    constructor(saldo){
        this.saldo=saldo;
    }
}
class Nuevo extends Cliente{
    constructor(saldo){
        super(saldo);
    }
    transferir(cantidad,cliente){
        if (this.saldo< cantidad){
            return false;
        }
        else{
            this.saldo = this.saldo-cantidad;
            cliente.saldo = cliente.saldo +cantidad;
            return true;
        }

    }
}
class Regular extends Cliente{
    constructor(saldo){
        super(saldo);
    }
    transferir(cantidad,cliente){
        if (this.saldo< cantidad){
            return false;
        }
        else{
            this.saldo = this.saldo-cantidad;
            cliente.saldo = cliente.saldo +cantidad;
            let beneficio  = cantidad*0.03;
            this.saldo = this.saldo+beneficio;
            return true;
        }
    }
}
class Frecuente extends Cliente{
    constructor(saldo){
        super(saldo);
    }
    transferir(cantidad,cliente){
        if (this.saldo< cantidad){
            return false;
        }
        else{
            this.saldo = this.saldo-cantidad;
            cliente.saldo = cliente.saldo +cantidad;
            let beneficio  = cantidad*0.05;
            this.saldo = this.saldo+beneficio;
            return true;
        }
    }
}

let cliente1 = new Regular(1000);
let cliente2 = new Regular(1000);
let cliente3 = new Regular(1000);


cliente1.transferir(154,cliente2);
console.log(cliente1.saldo,cliente2.saldo);
cliente2.transferir(108,cliente1);
console.log(cliente1.saldo,cliente1.saldo);

const boton = document.querySelector('#boton');
const formulario = document.querySelector('#formulario');
boton.onclick = function(){

}

