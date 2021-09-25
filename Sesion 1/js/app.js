let edad = 123412;
let nombre = "Tzuzul";
let auto = true;


const edad1= 3242;
const nombre1= "Gustavo";
const auto1= false;



alert("Hola Amigos");

console.log(`Hola`);


function saludar(nombre){

    let saludo = "hola " + nombre;
    alert(saludo);
}

saludar("Gustavo");

//imprimir un mensaje con el nombre y la edad de una persona

nombre3= "Gustavo";
edad3= 25;
fechaDeNacimiento="15/04/1996";
function presentar(nombre3,edad3){
    console.log(`mi nombre es :${nombre} y tengo: ${edad3} años`);
    
}

//imprimir un mensaje que nos diga si somos mayores de edad

function mayorOmenor(edad3){
    (edad3>18)?console.log(`eres mayor de edad`):console.log(`eres menor de edad`);
        
}

//imprimir un mensaje con el dia de nuestra fecha de nacimiento

function fecha(){
    
}

function divicion(divisor,dividendo){
    let resultado = divisor / dividendo;
    if (resultado == 0) {
        prompt("error")
    }else{
        prompt(`la division es ${resultado}`)
    }

}
let divisor = prompt("ingrese el divisor")
let dividendo =prompt("ingrese el dividendo")
divicion(divisor,dividendo);


function Tributar(edad,ingresos){
    if (edad > 16 && ingresos >= 1000) {
        prompt("tiene que tributar")
    }else{
        prompt("no puede tributar")
    }

}
let edad4 = prompt("ingrese edad")
let ingresos =prompt("ingrese ingresos")
Tributar(edad4,ingresos);




function Entrada(edad){
    if (edad < 4) {
        prompt("tiene entrada gratis")
    }else if(edad>=4 && edad<=18){
        prompt("su entrada es de 5$")
    
    }else if(edad>18){
        prompt("su entrada es de 10$")
    }

}
let edad5 = prompt("ingrese edad")

Entrada(edad5);

function comprobar2(){
    let pedir = prompt('Contraseña: ')
    if (pedir.toLowerCase() == contrasena.toLowerCase() ) {
        alert('Acceso concedido');
    }
    else{
        alert('Acceso denegado');
    }
}
const contrasena='contraseña';
comprobar2(contrasena);
