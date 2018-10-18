import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[];//Arreglo de tareas
  ultimoId: number;

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
    new Tarea({ id: 4, titulo: 'Comprar mandado' })
    ];
    this.ultimoId = 4;
  }

  agregarTarea(tituloTarea: string) {
    const tareaNueva = new Tarea({titulo: tituloTarea});
    tareaNueva.id = ++this.ultimoId;
    this.tareas.push(tareaNueva);
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
