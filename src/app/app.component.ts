import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[];//Arreglo de tareas
  ultimoId: number;
  tareaCompleta: number;
  constructor() {
    this.tareas = [{
      id: 1,
      titulo: 'Terminar el API',
      completada: false
    }, {
      id: 2,
      titulo: 'Terminar historias de usuario',
      completada: true
    }, {
      id: 3,
      titulo: 'Comprar boletos para el cine',
      completada: false
    },
    new Tarea({ id: 4, titulo: 'Comprar mandado', completada: false })
    ];
    this.ultimoId = 4;
  }

  agregarTarea(tituloTarea: string) {
    const tareaNueva = new Tarea({ titulo: tituloTarea });
    tareaNueva.id = ++this.ultimoId;
    this.tareas.push(tareaNueva);
  }

  eliminarTarea(idTarea: number) {
    this.tareas = this.tareas.filter(function (tarea) {
      return tarea.id !== idTarea;
    });
  }

  actualizaTareasCompletadas() {
    
    this.tareaCompleta = this.tareas.filter(function (tarea) {
      return tarea.completada === true;
    }).length;
  }
}


class Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  constructor(valores: Object = {}) {
    Object.assign(this, valores);
  }
}
