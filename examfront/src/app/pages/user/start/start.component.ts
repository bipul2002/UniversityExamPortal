import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{


  constructor(private locationst: LocationStrategy,private _route:ActivatedRoute,private _sub: SubjectService, private _ques:QuestionService){}

  qid:any;
  questions:any;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;




  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    //console.log(this.qid);
    this.loadQuestion();
    
  }
  loadQuestion() {
    this._ques.getQuestionsOfSubjectForTest(this.qid).subscribe((data:any)=>{
        
        this.questions = data;

        // creating a variable to store the user answer
        this.questions.forEach((q:any)=>{
          q['givenAnswer'] = '';

        });
        console.log(this.questions);

        
    },
      (error)=>{
        Swal.fire('Error','Error in loading Test','error');
      }
    );
  }

  preventBackButton() 
  {
    history.pushState(null, "", location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,"",location.href);
    });
  }

  

}
