//Seleccionar el elemento una sola vez de forma global
var ele = document.querySelector("#ele1");

//Función anónima que pinta sin seleccionar el elemento
pintar = function (color='green') {
    ele.style.backgroundColor = color;
}

//Pintar verde por defecto para probar la función
pintar();

//Presionar para pintar amarillo
ele.addEventListener("click", function() {
    pintar('yellow');
});



