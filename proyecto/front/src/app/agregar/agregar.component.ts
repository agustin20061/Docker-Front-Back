import { Component } from '@angular/core';
import { librosServicio } from '../../libro.servicio';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../libro';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  constructor(private servicio: librosServicio,
    private route: ActivatedRoute){}
  modificarLibro(e: Event){
    e.preventDefault();
    console.log(Number((<HTMLInputElement>document.getElementById("isbn")).value));
    
    this.servicio.agregarLibro( this.new_(Number((<HTMLInputElement>document.getElementById("isbn")).value), (<HTMLInputElement>document.getElementById("titulo")).value,(<HTMLInputElement>document.getElementById("autor")).value,Number((<HTMLInputElement>document.getElementById("año")).value),Number((<HTMLInputElement>document.getElementById("paginas")).value),(<HTMLInputElement>document.getElementById("editorial")).value))
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
