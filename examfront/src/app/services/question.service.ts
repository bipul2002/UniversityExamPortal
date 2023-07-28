import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) {}

  public getQuestionsOfSubject(qid: any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`); 
  }

  //add question

  public addQuestion(question:any)
  {
    return this._http.post(`${baseUrl}/question/`,question);
  }

  //delete question
  public deleteQuestion(quesId: any){
    return this._http.delete(`${baseUrl}/question/${quesId}`);
   }

   // add a single question

   public getQuestion(quesId: any){
    return this._http.get(`${baseUrl}/question/${quesId}`);
  }

  //update a question
  public updateQuestion(question:any){
    return this._http.put(`${baseUrl}/question/`,question);
  }


  //question required for the tes

  public getQuestionsOfSubjectForTest(qid: any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`); 
  }








}
