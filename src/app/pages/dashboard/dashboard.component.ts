import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  // Variable para almacenar los datos del listado
  medicList: any[] = [];

  constructor(
  
    private http: HttpClient // Inyectar HttpClient
  ) {}

  ngOnInit(): void {

    this.http.get('http://localhost:7070/api/Eleccions/vista-elecciones')
      .subscribe(
        (data: any[]) => { // Observa un arreglo de objetos, no un objeto único
          // Imprimir los datos en la consola
          console.log('Datos de la API:', data);
  
          // Comprueba si data es un arreglo con al menos un elemento
          if (data.length > 0) {
            // Actualiza medicList con los datos reales de la API
            this.medicList = data;
            console.log(this.medicList);
          } else {
            console.error('La respuesta de la API no contiene datos.');
          }
        },
        (error) => {
          console.error('Error al obtener datos de la API', error);
        }
      );
  }
  

}
