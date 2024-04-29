import { Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { InicioComponent } from './inicio/inicio.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { PediridComponent } from './pedirid/pedirid.component';
import { LibroComponent } from './libro/libro.component';
import { AlquilarComponent } from './alquilar/alquilar.component';

export const routes: Routes = [{
    path: 'Agregar', // al no poner ruta, arranca mostrandose el componente
    component: AgregarComponent,
    title: 'Pagina Inicio'
  },
  {
    path: '',
    component: InicioComponent,
    title: 'Detalle'
  },
  {
    path: 'Borrar',
    component: BorrarComponent,
    title: 'Borrar'
  },
  
  {
    path: 'Modificar/:ISBN',
    component: ModificarComponent,
    title: 'Modificar'
  },
  {
    path: 'PedirId',
    component: PediridComponent,
    title: 'pedirId'
  },
  {
    path:'Libro',
    component: LibroComponent,
    title: 'Libro'
  },
  {
    path:'Alquilar/:id',
    component: AlquilarComponent,
    title: 'Alquilar'
  }
  
];
