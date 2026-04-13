document.getElementById("Titulo").textContent = "Titulo 23";
document.querySelector("#contenedor").style.backgroundColor = "lightblue";

var elementos = document.getElementsByClassName("parrafo");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "Blue";
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botoncito").addEventListener("click", function () { 
        this.textContent = "¡Gracias!"; 
        alert("¡Clic detectado!"); 
    });
}); 

document.addEventListener("DOMContentLoaded"), function() {
 document.getElementById("tarea")
}