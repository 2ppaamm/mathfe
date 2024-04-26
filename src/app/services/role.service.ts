
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  updateStatus: string = "";

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/roles`).pipe(
      map((response) => response["roles"]),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),);
  }
  addRole(role: Object): Observable<Role[]> {
    return this.http.post<Role[]>(`${environment.apiURL}/roles`, role).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getRole(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/roles/` + id).pipe(
      map((response) => response['role']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updateRole(role: Object): Observable<Role[]> {
    const apiUrl = `${environment.apiURL}/roles`;
    const url = `${apiUrl}/${role['id']}`;
    return this.http.put<any>(url, role).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deleteRole(id: String): Observable<Role[]> {
    const apiUrl = `${environment.apiURL}/roles`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
}
