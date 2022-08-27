function ingresoDatos() {
    var comercio = document.getElementById("comercio").value;
    var titular = document.getElementById("titular").value;
    var telefono = document.getElementById("telefono").value;
    return comercio != "" && titular != "" && telefono != "";
}

function enviar() {

    if (ingresoDatos()) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "GRACIAS POR INSCRIBIRTE NOS COMUNICAREMOS A LA BREVEDAD",
            showConfirmButton: true,
        });
        document.getElementById("peligro").innerHTML = "";
        console.log(document.querySelector("#comercio").value);
        console.log(document.querySelector("#titular").value);
        console.log(document.querySelector("#telefono").value);
    } else {
        document.getElementById("peligro").innerHTML = "Debe ingresar todos los campos";
    }
    document.getElementById("comercio").value = "";
    document.getElementById("titular").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("comercio").focus();
}


var button = document.querySelector("#enviar");
button.onclick = enviar;