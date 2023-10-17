import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-genereico',
  templateUrl: './listado-genereico.component.html',
  styleUrls: ['./listado-genereico.component.css']
})
export class ListadoGenereicoComponent implements OnInit{
  @Input()
  listado;
  constructor(){}
  ngOnInit(): void {
  }
  
}
