import { Component, inject } from '@angular/core';
import { librosServicio } from '../../libro.servicio';
import { Libro } from '../../libro';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alquilar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './alquilar.component.html',
  styleUrl: './alquilar.component.css'
})
export class AlquilarComponent {
  libro: Libro={id:0,titulo:"asje",autor:"autor",anio:0,cantPag:0,editorial:"editorial",prestado:false} ;
  idlibro:number
  constructor(private servicio: librosServicio,
    private route: ActivatedRoute) { 
    this.idlibro = parseInt(this.route.snapshot.params['id'], 10);
    this.servicio.obtenerLibroPorId(this.idlibro).subscribe((data:any) => {
      console.log(data)
      this.libro = data;
    });
  }
  modificarLibro(e: Event){
    e.preventDefault();
    console.log(this.idlibro);
    
    this.servicio.modificarLibro(this.idlibro, this.new_(this.idlibro, this.libro.titulo,this.libro.autor,this.libro.anio,this.libro.cantPag,this.libro.editorial,true))
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
