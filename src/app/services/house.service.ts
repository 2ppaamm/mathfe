
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  throwError } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { House } from '../models/house';
@Injectable()
export class HouseService {

	updateStatus: string = "";
	constructor(private http: HttpClient) { }

	getHouses(): Observable<any> {
		return this.http.get(`${environment.apiURL}/houses`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	getHouse(id: String): Observable<any> {
		return this.http.get(`${environment.apiURL}/houses/` + id).pipe(
			map((response) => {
				return response['house']
			}),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	addHouse(house: Object): Observable<House[]> {
		return this.http.post<House[]>(`${environment.apiURL}/houses`, house).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	updateHouse(house: House): Observable<House[]> {
		const apiUrl = `${environment.apiURL}/houses`;
		const url = `${apiUrl}/${house.id}`;
		return this.http.put<House[]>(url, house).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
	}
	updateHouseWithFormData(house: FormData, id: number): Observable<House[]> {
		const apiUrl = `${environment.apiURL}/houses`;
		const url = `${apiUrl}/${id}`;
		return this.http.post<any>(url, house).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
	}
	createHouse(): Observable<any> {
		return this.http.get(`${environment.apiURL}/houses/create`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	deleteHouse(id: String): Observable<House[]> {
		const apiUrl = `${environment.apiURL}/houses`;
		const url = `${apiUrl}/${id}`;
		return this.http.delete<House[]>(url).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
}
