import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, catchError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class librosServicio {
  private url = "http://localhost:3000/"

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  obtenerTodosLosLibros(){
    return this.http.get<Libro[]>(this.url + "");
  }
  obtenerLibroPorId(id:number){
    return this.http.get<Libro>(this.url +id);
  }

  agregarLibro(libro : Libro): Observable<void>  {
    return this.http.post<void>(this.url + "", "{ \"libro\": " +  JSON.stringify(libro) + "}", this.httpOptions) 
  }

  cancelarLibros(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(this.url + id);
  }

  modificarLibro(id : number, libro : Libro): Observable<void> {
    return this.http.put<void>(this.url  + id, "{ \"libro\": " + JSON.stringify(libro) + "}", this.httpOptions);
  }
}
