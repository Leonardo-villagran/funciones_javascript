//Función anónima
pintar = function (color='green') {
    ele.style.backgroundColor = color;
}

//Seleccionar el elemento una sola vez con color verde por defecto
ele = document.querySelector("#ele1");

//Pintar verde por defecto para probar la función
pintar();

//Presionar para pintar amarillo
ele.addEventListener("click", function() {
    pintar('yellow');
});



