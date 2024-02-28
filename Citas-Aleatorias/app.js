let botoElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('citas');
let autorElem = document.getElementById('autor');

function generarEnteroAleaatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}

citasA=[
    {
      "autor": "Albert Einstein",
      "texto": "La imaginación es más importante que el conocimiento. El conocimiento es limitado, mientras que la imaginación abarca el mundo entero, impulsando el progreso, dando a luz a la evolución."
    },
    {
      "autor": "Martin Luther King Jr.",
      "texto": "Tengo un sueño, un sueño en el que mis cuatro hijos vivirán un día en una nación donde no serán juzgados por el color de su piel, sino por el contenido de su carácter."
    },
    {
      "autor": "Nelson Mandela",
      "texto": "Siempre parece imposible hasta que se hace."
    },
    {
      "autor": "Mahatma Gandhi",
      "texto": "No hay camino para la paz, la paz es el camino."
    },
    {
      "autor": "Leonardo da Vinci",
      "texto": "El aprendizaje nunca agota la mente."
    }
  ];


function cambiarCita() {

   
     let indiceAleatorio=generarEnteroAleaatorio(0,5);
     console.log(indiceAleatorio);
    citaElem.innerText=`"${citasA[indiceAleatorio].texto}"`;
   autorElem.innerText=citasA[indiceAleatorio].autor;
}
cambiarCita();
botoElem.addEventListener('click',cambiarCita);



