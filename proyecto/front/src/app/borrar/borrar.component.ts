import { Component, OnInit } from '@angular/core';
import { librosServicio } from '../../libro.servicio';
import { Libro } from '../../libro';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.css'
})
export class BorrarComponent implements OnInit{
  idlibro!:number;
  constructor(private servicio: librosServicio, private route: ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.idlibro = 0;
  }
  cancelarTurno(){
    this.servicio.cancelarLibros(this.idlibro).subscribe(data => {

    });
  }
}