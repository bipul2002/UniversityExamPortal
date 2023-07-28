import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-subject',
  templateUrl: './load-subject.component.html',
  styleUrls: ['./load-subject.component.css']
})
export class LoadSubjectComponent {

  subjects=[
    {
      qid: 23,
      title:'Basic Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      category: {
        cid: 11,
        title: "Semester 1",
      }
    },
    {
      qid: 24,
      title:'Angular',
      description: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      category: {
        cid: 22,
        title: "Semester 2",
      }
    },
    {
      qid: 25,
      title:'PostgreSQL',
      description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      category: {
        cid: 22,
        title: "Semester 2",
      }
    },
  ]

  qid: any;
  constructor(private _route: ActivatedRoute,private _sub:SubjectService) {}

  ngOnInit(): void {
    

    this._route.params.subscribe((params)=>{
      this.qid = params['subjectId'];
      if(this.qid == 0){
        //load all the quiz
        this._sub.getActiveSubjects().subscribe((data:any)=>{
           this.subjects = data;
           console.log(this.subjects);
        },
          (error)=>{
           Swal.fire('Error','Error in loading the subjects','error');
 
          }
        );
 
       console.log("Load all the subject");
     }
     else{
       console.log("Load specific subjects");
       this._sub.getActiveSubjectsOfCategory(this.qid).subscribe((data:any)=>{
           this.subjects = data;
       },
       (error)=>{
        Swal.fire('Error','Error in loading semester subjects','error');
       }
       )
     }

    });



   // console.log(this.qid);
    
  }
}
