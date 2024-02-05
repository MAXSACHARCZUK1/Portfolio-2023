
document.addEventListener('DOMContentLoaded', function() {
  const secciones = document.querySelectorAll('section');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });
  const encabezado = document.querySelector('header');
  encabezado.style.display = 'block';
})
  const abrirMenu = document.getElementById('abrir');
  const cerrarMenu = document.getElementById('cerrar');
  const nav = document.getElementById('nav');

  abrirMenu.addEventListener('click', function() {
    nav.classList.add('visible');
  });
  cerrarMenu.addEventListener('click', function() {
    nav.classList.remove('visible');
  });
  const enlaces = document.querySelectorAll('nav ul li a');
  const secciones = document.querySelectorAll('section');
  const encabezado = document.querySelector('header');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); 
      const seccionId = enlace.getAttribute('href');
      secciones.forEach(seccion => {
        seccion.style.display = 'none';
      });
      if (seccionId === 'home') {
        encabezado.style.display = 'block';
      } else {
        encabezado.style.display = 'none';
      }
      const seccionMostrar = document.getElementById(seccionId);
      if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
      }
    });
  });
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); 

      const targetId = enlace.getAttribute('href');
      const targetElement = document.querySelector(targetId); 
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  const textoAnimado = document.getElementById('texto-animado');
const texto = "Visit my GitHub and Linkedin";
let index = 0;

function escribirTexto() {
  if (index < texto.length) {
    textoAnimado.textContent += texto.charAt(index);
    index++;
    setTimeout(escribirTexto, 100); 
  }
}
escribirTexto();



