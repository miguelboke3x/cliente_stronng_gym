import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Productos } from '../models/prodructos.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:Productos = new Productos(0,"","",0,"","",0,true);

  constructor() { }

  ngOnInit(): void {
  }

}
