let alumnos = {};
let alumnos2 = ["luis","isra"];

console.log(typeof(alumnos));
console.log(typeof(alumnos2));
console.log(alumnos2);

const Alumnos = document.querySelector('.alumnos');

for (let i = 0; i < alumnos2.length; i++) {
    let alumno= document.createElement('p');
    Alumnos.appendChild(alumno);
    alumno.innerHTML = `${alumnos2[i]}`
}

const Imagenes = document.querySelector('.imagenes');
let imagenes = [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1633354081548-6244f5c4a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1626511718763-a3c07f77bb12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
]
for (let i = 0; i < imagenes.length; i++) {
    let imagen= document.createElement('img');
    Imagenes.appendChild(imagen);
    imagen.src = `${imagenes[i]}`;
}


