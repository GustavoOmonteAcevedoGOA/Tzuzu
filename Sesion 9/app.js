let persona = {
    nombre:"Karen",
    estatura:165,
    ciudad:"Colombia",
    saludar:function(){
        console.log(`hola soy ${this.nombre}`);
    },
    direccion:{
        calle:"Mi calle",
        numero:5,
        cp:10000,
        ciudad:"Bogota",
        pais:"Colombia"
    }
}

persona.saludar();

persona.estatura
persona.direccion.cp

let listaPersonas = [persona, {nombre:"lesli",estatura:160}]
console.log(``);

console.log(listaPersonas);
for (let i = 0; i < listaPersonas.length; i++) {
    let parrafo= document.createElement("p");
    parrafo.innerHTML= listaPersonas[i].nombre;
    let parrafo2= document.createElement("p");
    parrafo2.innerHTML= listaPersonas[i].estatura;

    //object.keys(listaPersonas[i])[i]


    document.body.appendChild(parrafo);
    document.body.appendChild(parrafo2);

    console.log(listaPersonas[i].nombre);

       
}

/*-------------- for of ---------------*/

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(key);
  console.log(value);
  
/*  a 
    1 
    b 
    2 
    c 
    3 */
}

/*--===========for in=============--*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"



let pizzas =[
    {
      name: "Hawaina",
      price: 799,
      size: "Small",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza1.jpg?raw=true",
      tiempo: "30 minutos",
    },
    {
      name: "Buffalo Chicken",
      price: 899,
      size: "Medium",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza2.jpg?raw=true",
    },
    {
      name: "Jamon",
      price: 499,
      size: "Small",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza3.jpg?raw=true",
      extras: "Tomate, Aceitunas"
    },
    {
      name: "Pepperoni",
      price: 1399,
      size: "Large",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza4.jpg?raw=true",
    },
    {
      name: "Chicken BBQ",
      price: 1299,
      size: "Large",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza5.jpg?raw=true",
    },
    {
      name: "Alfredo",
      price: 999,
      size: "Large",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza6.jpg?raw=true",
    },
    {
      name: "Margarita",
      price: 699,
      size: "Medium",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza7.jpg?raw=true",
    },
    {
      name: "Chiken mushroom",
      price: 699,
      size: "Small",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza8.jpg?raw=true",
    },
    {
      name: "Six cheese",
      price: 799,
      size: "Medium",
      image: "https://github.com/GustavoOmonteAcevedoGOA/Tzuzu/blob/main/Sesion%209/imagenes/pizza9.jpg?raw=true",
    }
  ]
  console.log(pizzas[1].image);
  

  const containerCard = document.querySelector('.container__card');

pizzas.map((pizza) => {
    let card = document.createElement("div");
    card.classList.add("card__pizza");
    let pizzaimg= document.createElement("img");
    pizzaimg.src= pizza.image;    
    let pizzaname= document.createElement("p");    
    
    pizzaname.innerHTML= `nombre : ${pizza.name}`;
    let pizzaprice= document.createElement("p");
    pizzaprice.innerHTML= `price : ${pizza.price}`;
    let pizzasize= document.createElement("p");
    pizzasize.innerHTML= `size : ${pizza.size}`;

    //object.keys(listaPersonas[i])[i]

    containerCard.appendChild(card);
    card.appendChild(pizzaimg);
    card.appendChild(pizzaname);
    card.appendChild(pizzaprice);
    card.appendChild(pizzasize);
})

/*--========================--*/


const containerCard2 = document.querySelector('.container__card2');


for (const pizza2 of pizzas) {  

  let card2 = document.createElement("div");
  card2.classList.add("card__pizza");

  for (const key in pizza2) {
    if (key === "image") {
      let pizzaimg= document.createElement("img");
      pizzaimg.src= pizza2[key];
      card2.appendChild(pizzaimg);
    }else{
      let pizzaDato= document.createElement("p");
      
      if (key == "tiempo") {
        
        pizzaDato.innerHTML=`${pizza2[key]}`;
      }else{
        pizzaDato.innerHTML= `${key} : ${pizza2[key]}`;
      }
      card2.appendChild(pizzaDato);
    }    
  }
  containerCard2.appendChild(card2);
 
  
  console.log(`pizza2`);
  console.log(pizza2);
  console.log(`pizza2`);
  
}
