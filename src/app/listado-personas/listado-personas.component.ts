import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  @Input() array: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
