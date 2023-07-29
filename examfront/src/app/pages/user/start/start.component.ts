import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  submitQuiz()
  {
    Swal.fire({
      title: 'Do you want to submit the test?',

      showCancelButton:true,
      confirmButtonText: 'submit',
      
      icon: 'info',

    }).then((e)=>{
      if(e.isConfirmed)
      {
        //calculation
        this.questions.forEach((q:any)=>{
          if(q.givenAnswer == q.answer){
            this.correctAnswer++;
            let markSingle = this.questions[0].quiz.maxMarks/this.questions.length;
            this.marksGot += markSingle;
          }

         
          
          

        });
        console.log("Correct Answer:" + this.correctAnswer);
        console.log("Marks Got" + this.marksGot);

      }

    });
  }

  
    
  



}
