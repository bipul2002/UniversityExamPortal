import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{
  
  qid: any;
  subjectTitle: any;
  question = {
    quiz: {
      qid: '',
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  // to fetch the value of subjectId we have to use "Activated route"
  constructor(
    private _route: ActivatedRoute,
    private _ques: QuestionService

    ) {}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    console.log(this.qid);
    this.subjectTitle = this._route.snapshot.params['title'];
    this.question.quiz.qid = this.qid;
  }

  //adding a question

  formSubmit()
  {
    if(this.question.content.trim()=='' || this.question.content==null)
    {
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null)
    {
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null)
    {
      return;
    }
    if(this.question.option3.trim()=='' || this.question.option3==null)
    {
      return;
    }
    if(this.question.option4.trim()=='' || this.question.option4==null)
    {
      return;
    }

    //submit form
    this._ques.addQuestion(this.question).subscribe((data:any)=>{
        Swal.fire('Success','Question Added','success');
        this.question.content=''
        this.question.option1=''
        this.question.option2=''
        this.question.option3=''
        this.question.option4=''
        this.question.answer='';
    },
       (error)=>{
        Swal.fire('Error','Error Occur in adding Question','error');

       }
    );


  }


}
