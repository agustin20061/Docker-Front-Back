import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { librosServicio } from '../../libro.servicio';
import { Libro } from '../../libro';
import { ModificarComponent } from '../modificar/modificar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pedirid',
  standalone: true,
  imports: [RouterModule,CommonModule,ModificarComponent,RouterOutlet,FormsModule],
  templateUrl: './pedirid.component.html',
  styleUrl: './pedirid.component.css'
})
export class PediridComponent {
  libros: Libro[] = [];
  servicio: librosServicio;
  ISBN?:number;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) { 
    this.servicio = inject(librosServicio);
    this.servicio.obtenerTodosLosLibros().subscribe((data) => {
      this.libros= data;
    });

  }
  submitForm() {
    if (this.ISBN) {
      this.router.navigate(['/Modificar', this.ISBN]);
    }
  }
}

