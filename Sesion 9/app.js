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
