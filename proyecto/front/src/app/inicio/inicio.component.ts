import { Component } from '@angular/core';

import { AgregarComponent } from '../agregar/agregar.component';
import { BorrarComponent } from '../borrar/borrar.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LibroComponent } from '../libro/libro.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule,CommonModule,LibroComponent,AgregarComponent,BorrarComponent,ModificarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
}
