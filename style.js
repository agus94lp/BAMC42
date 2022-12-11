let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let enviar = document.getElementById("enviar");

function verificar(){
    if (nombre.value == ""){
        alert("Ingresa un nombre por favor");
        return;
    };
    if (apellido.value == ""){
        alert("Ingresa un apellido por favor");
        return;
    };
};

enviar.addEventListener('click', verificar);