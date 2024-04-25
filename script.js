 document.addEventListener('DOMContentLoaded', () => {
        const botonesLeerMas = document.querySelectorAll('.boton-leer-mas');
        const textosLeerMas = document.querySelectorAll('.leer-mas-texto');
        
        botonesLeerMas.forEach((boton, index) => {
            boton.addEventListener('click', () => {
                textosLeerMas[index].classList.toggle('hidden');
            });
        });
    });

const botonNav = document.querySelector('#mobileMenuBtn');
    const nav = document.querySelector('#mobileMenu');
    
    botonNav.addEventListener('click', () => {
        nav.classList.toggle('hidden')
    });
