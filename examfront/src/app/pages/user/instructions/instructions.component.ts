import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{


  qid:any;
  quiz:any;

  constructor(private _route:ActivatedRoute,private _sub:SubjectService,private router: Router){}

  ngOnInit(): void {
     this.qid = this._route.snapshot.params['qid'];
     //console.log(this.qid);

     this._sub.getSubject(this.qid).subscribe((data:any)=>{
         console.log(data);
         this.quiz = data;
     },
     (error)=>{
         Swal.fire('Error','Error in loading Quiz','error');
     }
     
     );

  }


  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the Exam?',
      showCancelButton: true,
      confirmButtonText: `start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
