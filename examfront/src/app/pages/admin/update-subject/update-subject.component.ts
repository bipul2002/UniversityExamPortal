import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SemesterService } from 'src/app/services/semester.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent{

  constructor(
    private _route: ActivatedRoute,
    private _subject:SubjectService,
    private _sem: SemesterService,
    private route:Router
    ){}

  qid = 0;
  subject:any;
  semesters: any;


  ngOnInit(): void{
    this.qid =  this._route.snapshot.params['qid'];
    //alert(this.qid);
    this._subject.getSubject(this.qid).subscribe((data:any)=>{
          this.subject = data;
          console.log(this.subject);
    },
    (error)=>{
      console.log(error);
    }
    );

    this._sem.semesters().subscribe((data:any)=>{
         this.semesters = data;
    },
    (error)=>{
      alert("error in loading Categories");
    }
    );
  }

  //update Quiz function
  public updateData()
  {
    //validate


    this._subject.updateSubject(this.subject).subscribe((data:any)=>{
      Swal.fire('Success!!','Updated Successfully','success').then((e)=>{
        this.route.navigate(['/admin/view-subjects'])
      })
    },
    (error)=>{
      Swal.fire('Error!!','Error in Updating Subject','error');

    }
    );
  }


}
