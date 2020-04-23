const menu = document.querySelector('.menu-hamburguer');
const contenedorEnlaces = document.querySelector('.enlaces');

menu.addEventListener('click', hideShow);

function hideShow() {
     if (contenedorEnlaces.classList.contains('mostrar-menu')){
          contenedorEnlaces.classList.remove('mostrar-menu');
     }else{
          contenedorEnlaces.classList.add('mostrar-menu');
     }
}