//Template Strings
let texto = "Hola como estas";

let texto2 = `Hola
    como 
    estas que tal te va`;


console.log(texto2);

//Javascript es UNICODE

const container = document.querySelector('.container');

container.innerHTML=`<h1>${texto}</h1>`


/*--===========Herencia=============--*/

let objeto = {
    nombre: "Gustavo",
    saludar: function(){
        alert(this.nombre);
    }
};
console.log(objeto);




/*--===========se utiliza con librerias o cuando estemos programando en el backend o cuando tengamos un ejercio que requiera varios objetos con varios metodos evitamos copiar el codigo=============--*/

/*--===========clases inician con Mayuscula=============--*/
//clase padre
//Super clase
class Animal{
    constructor(tipoAnimal,nombre,tamaño,sonido){
        this.tipoAnimal=tipoAnimal;
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.sonido=sonido;
    }
    
    saludar(params){
        alert(this.nombre + "te saluda");
    };
    hacerSonido(){
        alert(this.sonido);
    };
}


//Herencia
//clase hijo
class Ave extends Animal{
    //juntos super y contructor solo los requeridos de los heredados
    constructor(volador, tipoAnimal,nombre,tamaño,sonido){
        super( tipoAnimal,nombre,tamaño,sonido);
        this.volador = volador;
        /* super.tipoAnimal = tipoAnimal;
        super.nombre = nombre;
        super.tamaño = tamaño;
        super.sonido = sonido; */

    };
    volar(distancia){
        if(this.volador){
            alert("volando..." + distancia+this.sonido);
        }else{
            alert("No estoy volando");
        }

    };
}



//clase hijo
class Felino extends Animal{
    //juntos super y contructor solo los requeridos de los heredados
    constructor(velocidad, tipoAnimal,nombre,sonido){
        super( tipoAnimal,nombre,"", sonido);
        this.velocidad = velocidad;
        /* super.tipoAnimal = tipoAnimal;
        super.nombre = nombre;
        super.tamaño = tamaño;
        super.sonido = sonido; */

    };
    correr(distancia){
        alert("corriendo..." + distancia+this.sonido);
        

    };
}
//Objeto nuevo  o instancia de algo
let gato = new Animal("Felino", "Michi", "pequeño","Mew");
gato.hacerSonido();
let perro = new Animal("Canino", "Firulais", "Grande","Rrrr");
perro.hacerSonido();
let gallina = new Animal("Ave", "Gallina", "Muy pequeño","Kikikiki");
gallina.hacerSonido();

/*--========================--*/

let gallina2 = new Ave(false,"Ave", "Gallina", "Muy pequeño","Kikikiki");
gallina2.volar(2000);
let paloma = new Ave(true,"Ave", "Paloma", "pequeño","Kikikiki");
paloma.volar(2000);


/*--========================--*/

let tigre = new Felino(200, "Felino", "tigre", "Grrrr");
tigre.correr(2000);

//polimorfismo tienen las propiedades en comun y generalizan distintos tipos de objetos
let animales = [gallina2,paloma,tigre];

for (let i = 0; i < animales.length; i++) {
    animales[i].hacerSonido();
    
}

//trabajar  con clases Cliente  
//Nuevos
//Regulares         metodo transferir regresa el 3% de lo que paga
//Frecuente         metodo transferir regresa el 5% de lo que paga

//metodo transferir dinero de un cliente a otro

