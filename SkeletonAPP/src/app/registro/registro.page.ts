import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { SQLiteService } from '../sqlite.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario: FormGroup;
  nombreUsuario=""
  nombreMail=""
  nombrePassword=""

  constructor( private fb: FormBuilder, private SQLite: SQLiteService) {
    this.formulario = this.fb.group({
      nombreUsuario: [''],
      nombreMail: [''],
      nombrePassword: ['']
   })
  }
  ngOnInit() {
    this.SQLite.openDatabase()
  }

  onSubmit() {
    localStorage.setItem("infoFormulario", JSON.stringify(this.formulario.value))
    this.SQLite.addUser(this.nombreUsuario, this.nombreMail, this.nombrePassword)
    console.log("usuario creado con exito", this.nombreUsuario)
  }

}

