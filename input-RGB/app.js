const inputRojo=document.getElementById('rojo');
const inputVerde=document.getElementById('verde');
const inputAzul=document.getElementById('azul');

const tectoRojo=document.getElementById('texto-rojo');
const tectoVerde=document.getElementById('texto-verde');
const tectoAzul=document.getElementById('texto-azul');

let rojo=inputRojo.value;
let verde=inputVerde.value;
let azul=inputAzul.value;

tectoRojo.innerText=rojo;
tectoVerde.innerText=verde;
tectoAzul.innerText=azul;


function actualizarColor(rojo, verde, azul){
    const colorRGB= `rgb(${rojo},${verde},${azul})`;
document.body.style.backgroundColor=colorRGB;
}

//para actualizar Rojo

inputRojo.addEventListener('change', (e)=>{
let rojo=e.target.value;
tectoRojo.innerText=rojo;
actualizarColor(rojo,verde,azul);

});

//para actualizar Verde

inputVerde.addEventListener('change', (e)=>{
     verde=e.target.value;
    tectoVerde.innerText=verde;
    actualizarColor(rojo,verde,azul);
    
    });

    //para actualizar azul

inputAzul.addEventListener('change', (e)=>{
    azul=e.target.value;
    tectoAzul.innerText=azul;
    actualizarColor(rojo,verde,azul);
    
    });