//Matrices


let matriz = [['perro','gato','leon'],['tortuga','oso','burro']];

let alumnosTabla=[['Juan',7,8,10],['Facundo',10,5,6],['Gema',7,8,10]];

let alumnos = document.querySelector("#alumnos");

for (let i = 0; i <alumnosTabla.length; i++) {
    let fila = document.createElement("tr");

    let aux=0;
    for (let j = 0; j < alumnosTabla[i].length; j++) {
        let columna = document.createElement("td");
        columna.innerHTML=`${alumnosTabla[i][j]}`;
        fila.appendChild(columna);
        if (j!=0) {
            aux+=alumnosTabla[i][j];
        }
        
    }
    let promedio = aux / (alumnosTabla[i].length-1);
    let columna = document.createElement("td");
    columna.innerHTML=`${promedio}`;
    fila.appendChild(columna);
    
    alumnos.appendChild(fila);
}

//Conjunto de informacion
//lista =[["Tuzul", "Calle ...", "Hombre", ""],[]]
//Si la fila es par ponemos un color si es impar ponemos otro color


let PersonasTabla=[['Juan','Calle Nº1345','Hombre',32],['Facundo','Calle Nº6548','Hombre',25],['Gema','Calle Nº5684','Mujer',30],['Maira','Calle Nº5687','Mujer',34]];

let personas = document.querySelector("#personas");

for (let i = 0; i < PersonasTabla.length; i++) {
    let fila=document.createElement("tr");
    for (let j = 0; j < PersonasTabla[i].length; j++) {
        let columna=document.createElement("td");
        columna.innerHTML=`${PersonasTabla[i][j]}`;
        fila.appendChild(columna);
        
    }
    if (i%2==0) {
        fila.style.background="blue";
        fila.style.color="yellow";
    }else{
        fila.style.background="red";
        fila.style.color="white";
    }
    personas.appendChild(fila);
    
}