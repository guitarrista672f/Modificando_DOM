

// Seleccionar circulo
let circulo=document.querySelector('.circulo');

//Seleccionar img
let picture=document.querySelector('img');

//Seleccionar boton de cambio de estilos

let btn=document.getElementById('btn-cambiar');

btn.onclick=cambiarEstilo;


function cambiarEstilo(){
    circulo.classList.toggle('rojo');
    //picture.classList.toggle('picture');
}