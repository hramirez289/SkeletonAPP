import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private  router : Router) { }

  ngOnInit() {
  }

  enviarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        emailEnviado: this.email,
        passwordEnviado: this.password,
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }

}
