import { persona1, anniadirPersona,listar, focusTel,focusEmail,contador } from "./../funciones/funciones.js";
class Examen {
  constructor() {
    this.eventos();
  }

  eventos() {
    $(document).ready(() => persona1);
    $("#btn-anniadir").click(anniadirPersona);
    $('#btn-provincia').click(listar);
    $('#telefono').blur(focusTel);
    $('#email').blur(focusEmail);
    $('#coco').keypress(contador);
  }
}

export default Examen;
