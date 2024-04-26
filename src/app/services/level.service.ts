
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Level } from '../models/level';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';
@Injectable()

export class LevelService {

  constructor(private http: HttpClient) { }

  updateStatus: string = "";

  getLevels(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/levels`).pipe(
      map((response) => response["levels"]),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),)
  }
  addLevel(level: Object): Observable<Level[]> {
    return this.http.post<Level[]>(`${environment.apiURL}/levels`, level).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getLevel(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/levels/` + id).pipe(
      map((response) => response['level']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updateLevel(level: Object): Observable<Level[]> {
    const apiUrl = `${environment.apiURL}/levels`;
    const url = `${apiUrl}/${level['id']}`;
    return this.http.put<any>(url, level).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deleteLevel(id: String): Observable<Level[]> {
    const apiUrl = `${environment.apiURL}/levels`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
}