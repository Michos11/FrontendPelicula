import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'generos';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiUrl, {observe: 'response', params});
  }

  public obtenerTodos(){
    return this.http.get<generoDTO[]>(`${this.apiUrl}/todos`);
  }

  public obtenerPorId(id: number): Observable<generoDTO>{
    return this.http.get<generoDTO>(`${this.apiUrl}/${id}`);
  }

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiUrl, genero);
  }

  public editar(id: number, genero : generoCreacionDTO){
    return this.http.put(`${this.apiUrl}/${id}`, genero);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
