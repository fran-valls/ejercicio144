import { Component } from '@angular/core';

@Component({
  selector: 'app-jabonera',
  templateUrl: './jabonera.component.html',
  styleUrls: ['./jabonera.component.css']
})
export class JaboneraComponent {
  public nombre: string;
  public nivelMaximo: number;
  public nivelActual: number;
  public cantidadDispensada: number;
  public bateria: number;
  public encendido: boolean;
  public readonly imagenOn: string;
  public readonly imagenOf: string;

  constructor() {
    this.nombre = "Deliplus";
    this.nivelMaximo = 500;
    this.nivelActual = 0;
    this.cantidadDispensada = 10;
    this.bateria = 100;
    this.encendido = false;
    this.imagenOn = "assets/img/jabonera-on.png"
    this.imagenOf = "assets/img/jabonera-off.png";
  }

  public comprobarAjustes(): void {
    if (this.nivelActual < 0) {
      this.nivelActual = 0;
    }
    if (this.bateria <= 0) {
      this.bateria = 0;
      this.encendido = false;
    }
  }
  public dispensar(): void {
    if (this.encendido) {
      this.nivelActual -= this.cantidadDispensada;
      this.bateria -= 3;
      this.comprobarAjustes();
    }
  }
  public rellenarJabon(): void {
    this.nivelActual = this.nivelMaximo;
  }
  public cargarBateria(): void {
    this.bateria = 100;
  }

  public power(): void {
    this.bateria -= 0.1;
    this.encendido = !this.encendido;
    this.comprobarAjustes();
  }

  public obtenerPorcentajeJabon(): number {
    return this.nivelActual*100/this.nivelMaximo
  }
}
