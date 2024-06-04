import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario: string="";


  constructor() {

  }

  ngOnInit() {
    const infoFormulario = localStorage.getItem("infoFormulario")
    if(infoFormulario){
      const infoFormularioJSON = JSON.parse(infoFormulario)
      console.log(infoFormularioJSON.nombreUsuario)
      this.nombreUsuario = infoFormularioJSON.nombreUsuario
    }
    
  }

}

