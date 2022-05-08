import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/prodructos.model';

import { ProductosServcesService } from '../productos-servces.service';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos:Productos[] = new Array<Productos>();


  constructor(private servicio:ProductosServcesService) {

  }

  ngOnInit(): void {
    this.servicio.getpProductos().subscribe(
      productos => {
        this.productos = productos;
        console.log(this.productos);
      });
  }
}
