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

//Objeto nuevo  o instancia de algo
let gato = new Animal("Felino", "Michi", "pequeño","Mew");
gato.hacerSonido();
let perro = new Animal("Canino", "Firulais", "Grande","Rrrr");
perro.hacerSonido();
let gallina = new Animal("Ave", "Gallina", "Muy pequeño","Kikikiki");
gallina.hacerSonido();



