import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private _http: HttpClient) {}

  //Load all semesters
  public semesters(){

   const token = localStorage.getItem('token');
    return this._http.get(`${baseUrl}/category/`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
      
    });
  }

  //add new semester

  public addSemester(semester:any)
  {
    return this._http.post(`${baseUrl}/category/`,semester);

  }


}
