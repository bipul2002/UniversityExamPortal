import { Component,OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semester.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-semesters',
  templateUrl: './view-semesters.component.html',
  styleUrls: ['./view-semesters.component.css']
})
export class ViewSemestersComponent implements OnInit {
  Semesters = [
    {
      subjectId: 23,
      title: 'S\fsdsds',
      description: "this is testing category",
    },
    {
      subjectId: 24,
      title: 'Semester 2fsdvfdsbv',
      description: "this is testing category",
    },
    {
      subjectId: 25,
      title: 'Semester 3sdfsvcx ',
      description: "this is testing category",
    },
    
  ];

  constructor(private semester:SemesterService){}

  ngOnInit(): void {


    this.semester.semesters().subscribe((data:any)=>{
      this.Semesters = data;
      console.log(this.Semesters);
    },
    (error)=>{

      console.log(error);
      Swal.fire('Error!!', 'Error in loading the data','error');

    });

   
    
  }
}
