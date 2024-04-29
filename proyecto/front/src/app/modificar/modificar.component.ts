import { Component, OnInit, inject } from '@angular/core';
import { Libro } from '../../libro';
import { librosServicio } from '../../libro.servicio';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PediridComponent } from '../pedirid/pedirid.component';


@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    PediridComponent
  ],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent{  
  libro: Libro={id:0,titulo:"asje",autor:"autor",anio:0,cantPag:0,editorial:"editorial",prestado:false} ;
  idlibro:number
  constructor(private servicio: librosServicio,
    private route: ActivatedRoute) { 
    this.idlibro = parseInt(this.route.snapshot.params['ISBN'], 10);
    this.servicio.obtenerLibroPorId(this.idlibro).subscribe((data:any) => {
      console.log(data)
      this.libro = data;
    });
  }
  modificarLibro(e: Event){
    e.preventDefault();
    console.log(this.idlibro);
    
    this.servicio.modificarLibro(this.idlibro, this.new_(this.idlibro, (<HTMLInputElement>document.getElementById("titulo")).value,(<HTMLInputElement>document.getElementById("autor")).value,Number((<HTMLInputElement>document.getElementById("año")).value),Number((<HTMLInputElement>document.getElementById("paginas")).value),(<HTMLInputElement>document.getElementById("editorial")).value))
    .subscribe(() => {
      console.log('Se modifico exitosamente');
    }, error => {
      console.error('Error al modificar el turno', error);
    });
  }
   new_(
    id?: number,
    titulo?: string,
    autor?: string,
    anio?: number,
    cantPag?: number,
    editorial?: string,
    prestado?: boolean,
     // id last cause usually set by db
  ): Libro {
    return {
      id: (id ?? -1),
      titulo: (titulo ?? ''),
      autor: (autor ?? ''),
      anio: (anio ?? 2024),
      cantPag: (cantPag ?? 0),
      editorial: (editorial ?? ''),
      prestado: (prestado ?? false)
    };
  }
}
  
