
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable ,  throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(currentPage): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/questions?page=' + currentPage).pipe(
      map((response) => response),
      catchError((error: any) => throwError(error || { message: 'Server Error' })),);
  }

  deleteQuestion(id: String): Observable<any[]> {
    const apiUrl = `${environment.apiURL}/questions`;
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      map((response) => response));
  }

  getQuestionOptions(): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/questions/create').pipe(
      map((response) => response));
  }

  addQuestion(question: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/questions`, question).pipe(
      map((response) => response));
  }

  getQuestion(id: String): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/questions/` + id).pipe(
      map((response) => response['question']));
  }

  updateQuestion(question: any, id: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/questions/` + id, question).pipe(
      map((response) => response));
  }

  getSearchOptions(): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/questions/search_init').pipe(
      map((response) => response));
  }

  searchQuestions(searchQuery): Observable<any> {
    return this.http.post<any>(environment.apiURL + '/questions/search', searchQuery).pipe(
      map((response) => response));
  }
}
