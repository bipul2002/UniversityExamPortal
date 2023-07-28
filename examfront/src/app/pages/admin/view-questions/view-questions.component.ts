import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent{
  qid: any;
  subjectTitle: any;
  questions = [
    {
      quesId: "1",
      content: "Number of primitive data types in Java are?",
      option1: "6",
      option2: "7",
      option3: "8",
      option4: "9",
      answer: "8",
    }
  ]

  constructor(private _route: ActivatedRoute, private _question: QuestionService,private _ques:QuestionService){}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.subjectTitle = this._route.snapshot.params['title'];
    console.log(this.qid);
    console.log(this.subjectTitle);
    // this._question.getQuestionsOfSubject(this.subjectId).subscribe((data:any)=>{
    //   console.log(data);
    //   this.questions = data;
    // },(error)=.{
    //   console.log(error);
    // })
    this._ques.getQuestionsOfSubject(this.qid).subscribe((data:any)=>{
          console.log(data);
          this.questions = data;
    },
      (error)=>{
        console.log(error);

      }
    )
  }

  //delete Question

  // deleteQuestion(quesId:any)
  // {
    
  // }

  deleteQuestion(quesId: any)
  {
    Swal.fire({
      icon: 'info',
      title: 'are you sure,want to delete this question',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        //delete function
        this._ques.deleteQuestion(quesId).subscribe((data:any) => {
      
          Swal.fire('Success', 'Quiz deleted', 'success');
          this.questions = this.questions.filter((q)=>q.quesId!=quesId);
        }, (error)=>{
          Swal.fire('Error', 'error in deleting subject', 'error');
        });

      }
    })

    
    
  }


}
