
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Difficulty } from '../models/difficulty';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class DifficultyService {

  constructor(private http: HttpClient) { }

  updateStatus: string = "";

  getDifficulties(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/difficulties`).pipe(
      map((response) => response["difficulties"]),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),)
  }
  addDifficulty(difficulty: Object): Observable<Difficulty[]> {
    return this.http.post<Difficulty[]>(`${environment.apiURL}/difficulties`, difficulty).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getDifficulty(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/difficulties/` + id).pipe(
      map((response) => response['difficulty']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updateDifficulty(difficulty: Object): Observable<Difficulty[]> {
    const apiUrl = `${environment.apiURL}/difficulties`;
    const url = `${apiUrl}/${difficulty['id']}`;
    return this.http.put<any>(url, difficulty).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deleteDifficulty(id: String): Observable<Difficulty[]> {
    const apiUrl = `${environment.apiURL}/difficulties`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
}
