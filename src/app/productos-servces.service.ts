import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './models/prodructos.model';





@Injectable({
  providedIn: 'root'
})
export class ProductosServcesService {

  productos: Observable<Productos[]>=new Observable();
  constructor(private clienteHttp: HttpClient) {

  }

  getpProductos(): Observable<Productos[]>{
    console.log("obteniendo productos del ws");
     this.productos = this.clienteHttp.get<Productos[]>("http://localhost:80/productos");
     return this.productos;

  }

}
