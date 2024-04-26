
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable ,  throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class SkillService {
  public updateStatus = "";
  constructor(private http: HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get(`${environment.apiURL}/skills`).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }

  getQuestios(skillId): Observable<any> {
    return this.http.get(`${environment.apiURL}/skills/${skillId}/questions`).pipe(
      map((response) => {
        return response["questions"];
      }),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }

  addSkill(skill: Object): Observable<Skill[]> {
    return this.http.post<Skill[]>(`${environment.apiURL}/skills`, skill).pipe(
      map((response) => response),
      catchError((error: any) => {
        console.error(error);
        let msg = "Server Error 123";
        if (error.json) {
          msg = error;
        } else {
          msg = error.error.message;
        }
        return throwError({
          message: msg
        })
      }),);
  }

  getSkill(id: String): Observable<any> {
    return this.http.get(`${environment.apiURL}/skills/` + id).pipe(
      map((response) => {
        return response['skill']
      }),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
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
    return this.http.put<Skill[]>(url, skill).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }
  updateSkillWithFormData(skill: FormData, id: number): Observable<Skill[]> {
    const apiUrl = `${environment.apiURL}/skills`;
    const url = `${apiUrl}/${id}`;
    return this.http.post<any>(url, skill).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  copySkill(id: string): Observable<Skill[]> {
    const apiUrl = `${environment.apiURL}/skills`;
    // const apiUrl = 'https://devapi.allgifted.com/skills'
    const url = `${apiUrl}/${id}` + `/copy`;
    return this.http.post<any>(url, null).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error.error || { message: 'Server Error' })),);
  }

  deleteSkill(id: String): Observable<Skill[]> {
    const apiUrl = `${environment.apiURL}/skills`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Skill[]>(url).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }
  deleteSkillWithTracks(id: String): Observable<Skill[]> {
    const apiUrl = `${environment.apiURL}/skills`;
    const url = `${apiUrl}/${id}?delink_tracks=TRUE`;
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
