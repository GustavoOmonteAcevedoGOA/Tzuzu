let boton = document.querySelector(".perfil__media");
boton.onclick = function(){
    const cardShare = document.querySelector('.card__share');
    //programacion funcional
    cardShare.classList.toggle('oculto');
};

//position
//static,absolute,relative,sticky,

let Animales ={
    nombre: "Dino",
    edad:2,
    color:"blanco",
    tipoDePelaje:"pelaje corto"
}