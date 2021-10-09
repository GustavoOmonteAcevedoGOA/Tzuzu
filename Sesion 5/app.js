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