function imprimir() {
  let comercio = document.querySelector("#comercio").value;
  let titular = document.querySelector("#titular").value;
  let telefono = document.querySelector("#telefono").value;
  console.log(comercio);
  console.log(titular);
  console.log(telefono);
}

function enviar() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "GRACIAS POR INSCRIBIRTE NOS COMUNICAREMOS A LA BREVEDAD",
    showConfirmButton: true,
  });
  console.log(document.querySelector("#comercio").value);
  console.log(document.querySelector("#titular").value);
  console.log(document.querySelector("#telefono").value);
  document.getElementById("comercio").value = "";
  document.getElementById("titular").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("comercio").focus();
}
var button = document.querySelector("#enviar");
button.onclick = enviar;
