// Clase que representa un usuario
export class Usuario {
  constructor(id, nombre, fechaCreacion) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion || new Date().toISOString();
  }

  // Validación del nombre
  static validar(nombre) {
    if (!nombre || nombre.length === 0) {
      throw new Error("El nombre no puede estar vacío");
    }
    if (nombre.length > 50) {
      throw new Error("El nombre no puede tener más de 50 caracteres");
    }
    return true;
  }
}
