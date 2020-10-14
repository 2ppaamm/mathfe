import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";
import { environment } from "../../environments/environment";
import { throwError } from "rxjs";
import { House } from "../models/house";
import { Skill } from "app/models/skill";
@Injectable()
export class HouseService {
  updateStatus: string = "";
  constructor(private http: HttpClient) {}

  getHouses(): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/houses`)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  getHousessByQuiz(houseid): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/quizzes/${houseid}/houses`)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  addHousesByQuiz(houses, houseid): Observable<any> {
    const apiUrl = `${environment.apiURL}/quizzes`;
    const url = `${apiUrl}/${houseid}/houses`;
    return this.http
      .post(url, houses)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  getHouse(id: String): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/houses/` + id)
      .map((response) => {
        return response["house"];
      })
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  getHousesByquize(housesid): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/quizzes/${housesid}/houses`)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  // deleteAllSHouses(housesid): Observable<any> {
  //   return this.http
  //     .get(`${environment.apiURL}/quizzes/${housesid}/houses`)
  //     .map((response) => response)
  //     .catch((error: any) => throwError(error || { message: "Server Error" }));
  // }

  deleteAllSHouses(housesid: String): Observable<Skill[]> {
    const apiUrl = `${environment.apiURL}/quizzes`;
    const url = `${apiUrl}/${housesid}/houses`;
    return this.http
      .delete<Skill[]>(url)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }

  deleteSkillByTrackId(housesid: String, skillid: String): Observable<House[]> {
    debugger;
    const apiUrl = `${environment.apiURL}/quizzes`;
    const url = `${apiUrl}/${housesid}/houses/${skillid}`;
    return this.http
      .delete<House[]>(url)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }


  // deleteSkillByTrackId(trackid: String, skillid: String): Observable<Skill[]> {
  //   const apiUrl = `${environment.apiURL}/tracks`;
  //   const url = `${apiUrl}/${trackid}/skills/${skillid}`;
  //   return this.http
  //     .delete<Skill[]>(url)
  //     .map((response) => response)
  //     .catch((error: any) => throwError(error || { message: "Server Error" }));
  // }



  addHouse(house: Object): Observable<House[]> {
    return this.http
      .post<House[]>(`${environment.apiURL}/houses`, house)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }
  updateHouse(house: House): Observable<House[]> {
    const apiUrl = `${environment.apiURL}/houses`;
    const url = `${apiUrl}/${house.id}`;
    return this.http
      .put<House[]>(url, house)
      .map((response) => response)
      .catch((error: any) =>
        throwError(error.error || { message: "Server Error" })
      );
  }
  updateHouseWithFormData(house: FormData, id: number): Observable<House[]> {
    const apiUrl = `${environment.apiURL}/houses`;
    const url = `${apiUrl}/${id}`;
    return this.http
      .post<any>(url, house)
      .map((response) => response)
      .catch((error: any) =>
        throwError(error.error || { message: "Server Error" })
      );
  }
  createHouse(): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/houses/create`)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }
  deleteHouse(id: String): Observable<House[]> {
    const apiUrl = `${environment.apiURL}/houses`;
    const url = `${apiUrl}/${id}`;
    return this.http
      .delete<House[]>(url)
      .map((response) => response)
      .catch((error: any) => throwError(error || { message: "Server Error" }));
  }
}
