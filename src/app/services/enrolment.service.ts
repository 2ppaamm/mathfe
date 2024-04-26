
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Enrolment } from '../models/enrolment';

@Injectable()
export class EnrolmentService {

  constructor(private http: HttpClient) { }
  updateStatus: string = "";

  getEnrolments(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/enrolments`).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: any) => {
        return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
      }
      ),);
  }
  addEnrolment(role: Object): Observable<Enrolment[]> {
    return this.http.post<any[]>(`${environment.apiURL}/enrolments`, role).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  getEnrolment(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/enrolments/` + id).pipe(
      map((response) => response['enrolment']),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  updateEnrolment(enrolment: Object): Observable<Enrolment[]> {
    const apiUrl = `${environment.apiURL}/enrolments`;
    const url = `${apiUrl}/${enrolment['id']}`;
    return this.http.put<any>(url, enrolment).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  } 
  deleteEnrolment(id: String): Observable<Enrolment[]> {
    const apiUrl = `${environment.apiURL}/enrolments`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  createEnrolment(): Observable<any> {
		return this.http.get(`${environment.apiURL}/enrolments/create`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  
// testing service
  test(): Observable<any> {

    return this.http.get(`${environment.apiURL}/quizzes`).pipe(map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}

}
