//función de expresión solicitada.
suma = (a,b) => a+b;

//Función para mostrar el resultado en html

function calcular(a,b){
    let valor=suma(a,b);
    let span = document.querySelector('#resultado');
    span.innerHTML=valor;

}