
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable ,  throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class SkillTrackService {

	constructor(private http: HttpClient) { }

	getSkills(): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	getSkillsByTrack(trackid): Observable<any> {
		return this.http.get(`${environment.apiURL}/tracks/${trackid}/skills`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	addSkill(skill: Skill, trackid: String): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/tracks`;
		const url = `${apiUrl}/${trackid}/skills/${skill.id}`;
		return this.http.post<Skill[]>(url, skill).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	addSkillByTrack(skills, trackid): Observable<any> {
		const apiUrl = `${environment.apiURL}/tracks`;
		const url = `${apiUrl}/${trackid}/skills`;
		return this.http.post(url, skills).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	getSkill(id: String): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills/` + id).pipe(
			map((response) => response['skill']),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}

	updateSkill(skill: Object): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/skills`;
		const url = `${apiUrl}/${skill['id']}`;
		return this.http.put<Skill[]>(url, skill).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
	}

	deleteSkill(trackid: String, skillid: String): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/tracks`;
		const url = `${apiUrl}/${trackid}/skills/${skillid}`;
		return this.http.delete<Skill[]>(url).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	deleteSkillByTrackId(trackid: String, skillid: String): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/tracks`;
		const url = `${apiUrl}/${trackid}/skills/${skillid}`;
		return this.http.delete<Skill[]>(url).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	deleteAllSkills(trackid: String): Observable<Skill[]> {
		const apiUrl = `${environment.apiURL}/tracks`;
		const url = `${apiUrl}/${trackid}/skills`;
		return this.http.delete<Skill[]>(url).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
	createSkill(): Observable<any> {
		return this.http.get(`${environment.apiURL}/skills/create`).pipe(
			map((response) => response),
			catchError((error: any) => throwError(error || { message: 'Server Error' })),);
	}
}
