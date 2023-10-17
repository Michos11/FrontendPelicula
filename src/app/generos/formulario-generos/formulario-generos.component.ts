import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeaLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css']
})
export class FormularioGenerosComponent implements OnInit {

  constructor (private formBuilder: FormBuilder) {}

  form: FormGroup;
  
  @Input()
  errores: string[] = [];

  @Input()
  modelo: generoCreacionDTO;
  
  @Output()
  onsubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void { 
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
   }

   guardarCambios(){
      this.onsubmit.emit(this.form.value);
   }

    obtenerErrorCampoNombre(){
      var campo = this.form.get('nombre');
      if (campo.hasError('required')){
        return 'El campo nombre es requerido'
      }

      if (campo.hasError('minlength')){
        return 'La longitud mínima es de 3 caracteres'
      }

      if (campo.hasError('primeraLetraMayuscula')){
        return campo.getError('primeraLetraMayuscula').mensaje;
      }
      return '';
    }
}
