import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario: string="";
  FrasesMot: any[] = [];


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const infoFormulario = localStorage.getItem("infoFormulario")
    if(infoFormulario){
      const infoFormularioJSON = JSON.parse(infoFormulario)
      console.log(infoFormularioJSON.nombreUsuario)
      this.nombreUsuario = infoFormularioJSON.nombreUsuario
    }

    this.fetchFrasesMot();
    
  }

  baseUrl="https://api.quotable.io/random";
  autor: string="";
  content: string="";
  _id: string="";

  fetchFrasesMot(){
    this.http.get(this.baseUrl).subscribe((response: any) =>{
      this.autor=response.author
      this.content=response.content
      this._id=response._id

    });

  }


}

