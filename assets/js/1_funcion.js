//función de expresión solicitada.

var example = function(a,b,c){
    return a+b+c;
}

//Función para mostrar el resultado en html

function calcular(a,b,c){
    let valor=example(a,b,c);
    let span = document.querySelector('#resultado');
    span.innerHTML=valor;

}