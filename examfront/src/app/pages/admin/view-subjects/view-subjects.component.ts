import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit{
  subjects=[
    {
      qid: 23,
      title:'Basic Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
    },
    {
      qid: 24,
      title:'Angular',
      description: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
    },
  ]

  constructor(private _subject: SubjectService){

  }

  ngOnInit(): void {
    this._subject.subjects().subscribe(
      (data:any)=> {
        this.subjects = data;
        console.log(this.subjects);
      },
      (error)=> {
        console.log(error);
        Swal.fire('Error!!,',"Error in loading the data!",'error');
      }
    );
  }

  deleteSubject(qid: any)
  {
    Swal.fire({
      icon: 'info',
      title: 'are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        //delete function
        this._subject.deleteSubject(qid).subscribe((data:any) => {
          this.subjects = this.subjects.filter((Subject)=>Subject.qid!=qid);
          Swal.fire('Success', 'Quiz deleted', 'success');
        }, (error)=>{
          Swal.fire('Error', 'error in deleting subject', 'error');
        });

      }
    })

    
    
  }

 
}
