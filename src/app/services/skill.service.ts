import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
@Injectable()
export class SkillService {

	constructor(private http: HttpClient) { }

	getSkills(): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills`)
			.map((response) => response)
			.catch((error: any) => throwError(error.json().error || { message: 'Server Error' }));;
	}

	addSkill(skill: Object): Observable<Skill[]> {
		return this.http.post<Skill[]>(`${environment.apiURL}/skills`, skill)
			.map((response) => response)
			.catch((error: any) => throwError(error.json().error || { message: 'Server Error' }));
	}

	getSkill(id: String): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills/` + id)
			.map((response) => response['skill'])
			.catch((error: any) => throwError(error.json().error || { message: 'Server Error' }));
	}

	updateSkill(skill: Object): Observable<Skill[]> {

		if (skill['check'] == 1) {
			skill['check'] = "TRUE";
		} else if (skill['check'] == 0) {
			skill['check'] = "FALSE";
		} else {
			skill['check'] = (skill['check'] + "").toUpperCase();
		}
		
		const apiUrl = `${environment.apiURL}/skills`;
		const url = `${apiUrl}/${skill['id']}`;
		return this.http.put<Skill[]>(url, skill)
			.map((response) => response)
			.catch((error: any) => throwError(error.error || { message: 'Server Error' }));
	}

	deleteSkill(id: String): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/skills`;
		const url = `${apiUrl}/${id}`;
		return this.http.delete<Skill[]>(url)
			.map((response) => response)
			.catch((error: any) => throwError(error.json().error || { message: 'Server Error' }));
	}

	createSkill(): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills/create`)
			.map((response) => response)
			.catch((error: any) => throwError(error.json().error || { message: 'Server Error' }));;
	}
}
