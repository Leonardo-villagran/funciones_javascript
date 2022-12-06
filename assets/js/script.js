//Función anónima
pintar = function (color='green') {
    ele.style.backgroundColor = color;
}

//Seleccionar el elemento una sola vez copn color verde por defecto
seleccionar = function () {
    ele = document.querySelector("#ele1");
    pintar();
}
seleccionar();


//Presionar para pintar amarillo
ele.addEventListener("click", function() {
    pintar('yellow');
});


