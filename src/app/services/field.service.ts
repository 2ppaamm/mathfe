
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Field } from '../models/field';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class FieldService {

  constructor(private http: HttpClient) { }

  updateStatus: string = "";

  getFields(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/fields`).pipe(
      map((response) => response["fields"]),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),);
  }
  addField(field: Object): Observable<Field[]> {
    return this.http.post<Field[]>(`${environment.apiURL}/fields`, field).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getField(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/fields/` + id).pipe(
      map((response) => response['field']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updateField(field: Object): Observable<Field[]> {
    const apiUrl = `${environment.apiURL}/fields`;
    const url = `${apiUrl}/${field['id']}`;
    return this.http.put<any>(url, field).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deleteField(id: String): Observable<Field[]> {
    const apiUrl = `${environment.apiURL}/fields`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
}
