import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombreUsuario: [''],
      nombreMail: [''],
      nombrePassword: ['']
   })
  }
  ngOnInit() {

  }

  onSubmit() {
    localStorage.setItem("infoFormulario", JSON.stringify(this.formulario.value))
  }

}

