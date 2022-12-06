//Función que define el estilo de un div 

const pintarColorBase = (id_box,color_base) => {
    elemento=document.querySelector(id_box);
    elemento.style.backgroundColor = color_base;
    elemento.style.width='200px';
    elemento.style.height='200px';
}

//Entregar estilo a cada div 

pintarColorBase('#box01','green');
pintarColorBase('#box02','red');
pintarColorBase('#box03','blue');
pintarColorBase('#box04','yellow');

//Definición de la variable globalque guarda el color

var color;

//Al presionar el botón se cambia el tipo de color seleccionado

document.addEventListener('keydown', function (event) {
    var c=document.querySelector('#color');

    if (event.key === 'a') color='red';
    else if (event.key === 's') color='green';
    else if (event.key === 'd') color='yellow';

    c.innerHTML=color;
    c.style.color=color;
    });

//Función anónima para dar a cada uno de los div el color seleccionado:

box01.addEventListener("click", function() {
    box01.style.backgroundColor = cgit statusolor;
});
box02.addEventListener("click", function() {
    box02.style.backgroundColor = color;
});
box03.addEventListener("click", function() {
    box03.style.backgroundColor = color;
});
box04.addEventListener("click", function() {
    box04.style.backgroundColor = color;
});

