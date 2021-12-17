import GuiaTelefonica from "./../clases/GuiaTelefonica.js";
import Persona from "./../clases/Persona.js";

export const persona1 = function cargarClases() {
  const persona1 = new Persona(
    "Coco",
    "mochon",
    "Calle coco",
    "22@gmail.com",
    666666666
  );
  return persona1;
};

const guia1 = new GuiaTelefonica();
guia1.addPersona(persona1());
// guia1.removePersona('jorge');
guia1.getPersona("jorge");

$("#ejercicio1").text(guia1.getPersona("Coco"));

export function anniadirPersona(e) {
  e.preventDefault();
  const nombre = $("#nombre").val();
  const apellido = $("#apellido").val();
  const direccion = $("#direccion").val();
  const email = $("#email").val();
  const telefono = $("#telefono").val();
  const postal = $("#postal").val();
  const numero = $("#numero").val();

  const patronNumero = /^(\d)*/;
  const patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const patronPostal = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
  const patronNumeroC = /^(\d)*/;
  if (patronNumero.test(telefono) == false || telefono == "") {
    alert("Digite solo numeros,no texto");
    if (patronEmail.test(email) == false) {
      alert("Correo invalido");
    }
    if (patronPostal.test(postal) == false) {
      alert("Postal invalido");
    }
    if (patronNumeroC.test(postal) == false) {
      alert("NUmero de calle invalido");
    }
  } else {
    const persona2 = new Persona(nombre, apellido, direccion, email, telefono);
    const guia2 = new GuiaTelefonica(postal, numero, persona2);
    guia2.addPersona(persona2);
    guia2.getPersona(nombre);
    $("#ejercicio2").text(guia2.getPersona("jorge"));
    // console.log(guia2.toString());
  }
}

export function listar(e) {
  e.preventDefault();
  const provincia = $("#provincia").val();
  if (provincia == "Madrid") {
    const persona3 = new Persona("Pepe");
    const guia3 = new GuiaTelefonica("", "", "", "Madrid", persona3);

    const persona4 = new Persona("Jorge");
    const guia4 = new GuiaTelefonica("", "", "", "Madrid", persona4);
    guia3.addPersona(persona3);
    guia4.addPersona(persona4);
    $("#resu").text(
      "Personas que viven en Madrid " +
        guia3.getPersona("Pepe") +
        guia4.getPersona("Jorge")
    );
  } else {
    $("#resu").text("Personas que viven en Madrid, 0 ");
  }
}

export function focusTel() {
  const telefono = $("#telefono").val();
  const patronNumero = /^(\d)*/;
  if (patronNumero.test(telefono) == false || telefono == "") {
    alert("nunero invalido");
  }
}

export function focusEmail() {
  const email = $("#email").val();
  const patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (patronEmail.test(email) == false) {
    alert("Correo invalido");
  }
}

let n = 0;

export function contador() {
    n++;
    $('#c').text(n);
}