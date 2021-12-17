class Persona {
  nombre;
  apellidos;
  direccion;
  telefono;
  email;
  constructor(nombre, apellidos, direccion, telefono, email) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
  }

  toString() {
   return "Nombre: " + this.nombre +
    " Apellidos: " + this.nombre +
    " Direccion: " + this.nombre +
    " Email: " + this.nombre +
    " Telefono" + this.telefono;
  }
}

export default Persona;
