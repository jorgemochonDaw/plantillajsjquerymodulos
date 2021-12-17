import Persona from "./Persona.js";
class GuiaTelefonica {
  personas;
  calle;
  numero;
  codigoPostal;
  poblacion;
  provincia;
  constructor(calle, numero, codigoPostal, poblacion, provincia, Persona) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
    this.personas = Persona;
  }

  addPersona(persona) {
    this.personas = persona;
  }
  removePersona(nombre) {
    if (this.personas.nombre == nombre) {
      delete this.personas;
    } else {
      console.log("No se encontro el nombre no se puede borrar");
    }
  }
  getPersona(nombre) {
    if (this.personas.nombre == nombre) {
      return this.personas;
    } else {
      return 'No existe la persona';
    }
  }

  toString() {
    return "Calle: " + this.calle +
     " Numero: " + this.numero +
     " Codigo postal: " + this.codigoPostal +
     " Poblacion: " + this.poblacion +
     " Provincia" + this.provincia;
   }
}

export default GuiaTelefonica;
