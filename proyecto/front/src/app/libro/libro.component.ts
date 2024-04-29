import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Libro } from '../../libro';
import { librosServicio } from '../../libro.servicio';
import { ModificarComponent } from '../modificar/modificar.component';
import { AlquilarComponent } from '../alquilar/alquilar.component';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ModificarComponent,RouterModule,AlquilarComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  libros?: Libro[];
  servicio: librosServicio;
  
  constructor() { 
    this.servicio = inject(librosServicio);
    this.servicio.obtenerTodosLosLibros().subscribe((data) => {
      this.libros= data;
    });
  }
}
