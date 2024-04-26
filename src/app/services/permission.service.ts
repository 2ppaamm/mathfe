
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Permission } from '../models/permission';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';
@Injectable()
export class PermissionService {

  constructor(private http: HttpClient) { }

  updateStatus: string = "";

  getPermissions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/permissions`).pipe(
      map((response) => response["permissions"]),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),);
  }
  addPermission(permission: Object): Observable<Permission[]> {
    return this.http.post<Permission[]>(`${environment.apiURL}/permissions`, permission).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getPermission(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/permissions/` + id).pipe(
      map((response) => response['permission']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updatePermission(permission: Object): Observable<Permission[]> { 
    const apiUrl = `${environment.apiURL}/permissions`;
    const url = `${apiUrl}/${permission['id']}`;
    return this.http.put<any>(url, permission).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deletePermission(id: String): Observable<Permission[]> {
    const apiUrl = `${environment.apiURL}/permissions`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
}