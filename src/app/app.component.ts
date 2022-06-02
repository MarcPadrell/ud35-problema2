import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ud35-problema2';

  nombre: any = "";
  email: any = "";
  mensaje: any = "";
  respuesta: any = "";

  array_persona: any = [];

  save_person() {

    let array_let = [this.nombre, this.email, this.mensaje, this.respuesta];
    this.array_persona.push(array_let);

  }

}
