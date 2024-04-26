
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import 'rxjs/Rx';
import { environment } from '../../environments/environment';
@Injectable()
export class CourseService {

	constructor(private http: HttpClient) { }

	updateStatus: string = "";

	getCourses(): Observable<any[]> {
		return this.http.get<any[]>(`${environment.apiURL}/courses`).pipe(
			map((response) => response),
			catchError((error: any) => {
				return throwError((error.json() ? error : (error.statusText)) || { message: 'Server Error' })
			}
			),);
	}

	getOpenCourses(): Observable<any[]> {
		return this.http.get<any[]>(`${environment.apiURL}/opencourses`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}

	addCourse(course: Object): Observable<Course[]> {
		return this.http.post<Course[]>(`${environment.apiURL}/courses`, course).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error 123123' })),);
	}
	getCourse(id: String): Observable<any> {
		return this.http.get<any>(`${environment.apiURL}/courses/` + id).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	updateCourse(course: FormData, id: number): Observable<Course[]> {
		const apiUrl = `${environment.apiURL}/courses`;
		const url = `${apiUrl}/${id}`;
		return this.http.post<any>(url, course).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
	}

	deleteCourse(id: String): Observable<Course[]> {
		const apiUrl = `${environment.apiURL}/courses`;
		const url = `${apiUrl}/${id}`;
		return this.http.delete<any>(url).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
}
