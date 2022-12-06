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

cambiaColor= function (id_b){
    let b=document.querySelector(id_b);
    b.addEventListener("click", function() {
        b.style.backgroundColor = color;
    });
}

cambiaColor('#box01');
cambiaColor('#box02');
cambiaColor('#box03');
cambiaColor('#box04');


/*
b01=document.querySelector("#box01");
b01.addEventListener("click", function() {
    b01.style.backgroundColor = color;
});

b02=document.querySelector("#box02");
b02.addEventListener("click", function() {
    b02.style.backgroundColor = color;
});

b03=document.querySelector("#box03");
b03.addEventListener("click", function() {
    b03.style.backgroundColor = color;
});

b04=document.querySelector("#box04");
b04.addEventListener("click", function() {
    b04.style.backgroundColor = color;
});*/