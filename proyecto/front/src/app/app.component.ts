import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RouterLink } from '@angular/router';
import { BorrarComponent } from './borrar/borrar.component';

import { ModificarComponent } from './modificar/modificar.component';
import { LibroComponent } from './libro/libro.component';
import { AlquilarComponent } from './alquilar/alquilar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InicioComponent,RouterLink,BorrarComponent,ModificarComponent,LibroComponent,AlquilarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreria';
 
}
