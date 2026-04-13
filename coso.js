document.getElementById("Titulo").textContent = "Titulo 23";

/*----------------------------------------------------------------------------------*/

document.querySelector("#contenedor").style.backgroundColor = "lightblue";

/*----------------------------------------------------------------------------------*/
const botonAgregar = document.getElementById('tarea');
const inputTexto = document.getElementById('inputTarea');
const listaUl = document.getElementById('lista');

/*----------------------------------------------------------------------------------*/

var elementos = document.getElementsByClassName("parrafo");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "red";
};

/*----------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botoncito").addEventListener("click", function () { 
        this.textContent = "¡Gracias!"; 
        alert("¡Clic detectado!"); 
    });
}); 

/*----------------------------------------------------------------------------------*/

botonAgregar.addEventListener("click", function() {
  const texto = inputTexto.value;
    if (texto.trim() === "") return;

   const li = document.createElement("li");
   li.textContent = texto;
   
   const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
       li.remove();
    };
  
    li.appendChild(botonEliminar);
    listaUl.appendChild(li);

    inputTexto.value = "";

});

/*----------------------------------------------------------------------------------*/

const input = document.querySelector("#email").style.border = "2px solid turquoise";

/*----------------------------------------------------------------------------------*/

const uno = document.querySelector("#contraseña").placeholder="ingrese su nombre aqui :v";

/*----------------------------------------------------------------------------------*/

document.getElementById("publicar").addEventListener("click",
    function () {
        const comentario = document.getElementById("comentario").value;
        if (comentario.trim() === "") return;
        
        let nuevo = document.createElement("li");
        nuevo.textContent = comentario;
        document.getElementById("listaComentarios").appendChild(nuevo);
        
        const botonEli = document.createElement("button");
        botonEli.textContent = "Eliminar";
        botonEli.onclick = function() {
        nuevo.remove();
        };

        nuevo.appendChild(botonEli);
        
        document.getElementById("comentario").value = "";
     });



