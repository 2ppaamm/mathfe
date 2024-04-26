
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  throwError } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get(`${environment.apiURL}/enrols/users`).pipe(
      map((response) =>  response['houses']),
    catchError((error: any) => throwError(error || {message: 'Server Error'} )),);
  }
  getCourses(): Observable<any> {
    return this.http.get(`${environment.apiURL}/courses`).pipe(
    map((response) => response['courses']),
    catchError((error: any) => throwError(error || {message: 'Server Error'} )),);
  }

  getLeaders(): Observable<any> {
    return this.http.get(`${environment.apiURL}/leaders`).pipe(
    map((response) => response),
    catchError((error: any) => throwError(error || {message: 'Server Error'} )),);
  }

  getTeach(): Observable<any> {
    return this.http.get(`${environment.apiURL}/enrols/teachers`).pipe(
    map((response) => response['houses']),
    catchError((error: any) => throwError(error || {message: 'Server Error'} )),);
  }

  getUser(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/protected`).pipe(
    map((response) => response['user']));
  }

  getDashboard(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/protected`).pipe(
    map((response) => response['data']),
    catchError((error: any) => throwError(error || {message: 'Server Error'} )),);
  }
}
