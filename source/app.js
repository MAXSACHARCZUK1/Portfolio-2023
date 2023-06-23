
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

  
  // Código JavaScript existente permanece igual

  // Obtenemos los enlaces de navegación
  const enlaces = document.querySelectorAll('nav ul li a');

  // Obtenemos las secciones de contenido
  const secciones = document.querySelectorAll('section');

  // Obtenemos el encabezado
  const encabezado = document.querySelector('header');

  // Iteramos sobre los enlaces
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); // Evitamos la acción predeterminada del enlace

      // Obtenemos el identificador de la sección correspondiente al enlace seleccionado
      const seccionId = enlace.getAttribute('href');

      // Ocultamos todas las secciones
      secciones.forEach(seccion => {
        seccion.style.display = 'none';
      });

      // Mostramos el encabezado si se selecciona la opción "Home"
      if (seccionId === 'home') {
        encabezado.style.display = 'block';
      } else {
        // Ocultamos el encabezado para las demás secciones
        encabezado.style.display = 'none';
      }

      // Mostramos la sección correspondiente
      const seccionMostrar = document.getElementById(seccionId);
      if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
      }
    });
  });

  // Agregar efecto de scroll suave a los enlaces
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      const targetId = enlace.getAttribute('href'); // Obtener el ID del elemento de destino
      const targetElement = document.querySelector(targetId); // Obtener el elemento de destino

      if (targetElement) {
        // Calcular la posición del elemento de destino en relación con la ventana
        const targetPosition = targetElement.offsetTop;

        // Realizar el desplazamiento suave utilizando el método scrollIntoView
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  const textoAnimado = document.getElementById('texto-animado');
const texto = "Visita mi GitHub y Linkedin";
let index = 0;

function escribirTexto() {
  if (index < texto.length) {
    textoAnimado.textContent += texto.charAt(index);
    index++;
    setTimeout(escribirTexto, 100); // Ajusta el tiempo de retraso entre cada letra (en milisegundos)
  }
}

escribirTexto();



