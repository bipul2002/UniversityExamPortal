import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http:HttpClient) { }
  //load all the subjects
  public subjects(){
    return this._http.get(`${baseUrl}/quiz/`);

  }


  //add subject
  public addSubject(subject:any){
    return this._http.post(`${baseUrl}/quiz/`, subject)
  }

   //delete subject
  public deleteSubject(qid: any){
   return this._http.delete(`${baseUrl}/quiz/${qid}`);
  }

  //add new category
  // public addSubject(subject){
  //   return this._http.post(`${baseUrl}/subject/`, subject);
  // }


  //get the single subject
  public getSubject(qid: any){
    return this._http.get(`${baseUrl}/quiz/${qid}`);
  }

  //update subjects

  public updateSubject(subject:any){
    return this._http.put(`${baseUrl}/quiz/`,subject);
  }

  //get subjects of semesters

  public getSubjectOfCategory(cid: any){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //get active subjects

  public getActiveSubjects(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get active subjects of the category

  public getActiveSubjectsOfCategory(cid: any){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }







  
 


}
