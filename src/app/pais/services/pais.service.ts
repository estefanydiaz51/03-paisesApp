import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(
    private http: HttpClient
  ) { }

  get httpParams (){
    return  new HttpParams().set(
      'fields', 'name,capital,cca2,flags,population'
    )
  }

  buscarPais( termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const apiUrl = 'https://restcountries.com/v2';
    const url = `${apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha( id: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);

  }

  buscarRegion( region: string): Observable<Country[]> {
    const params = new HttpParams().set(
      'fields', 'name,capital,alpha2Code,flags,population'
    )
    const apiUrl = 'https://restcountries.com/v2';
    const url = `${apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params });
  }
  



}
