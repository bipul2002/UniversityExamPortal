import { Component,OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semester.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private _sem:SemesterService){}
  semesters = [
    {
      cid: "51",
      title: "Semester 1",
    },
    {
      cid: "52",
      title: "Semester 2",
    },
    {
      ci: "53",
      title: "Semester 3",
    },
    {
      cid: "54",
      title: "Semester 4",
    },
    {
      cid: "55",
      title: "Semester 5",
    },
    {
      cid: "56",
      title: "Semester 6",
    },
    {
      cid: "57",
      title: "Semester 7",
    },
    {
      cid: "58",
      title: "Semester 8",
    },
    
  ];

  ngOnInit(): void {
    this._sem.semesters().subscribe((data:any)=>{
      this.semesters = data;
    },
    (error)=>{
     Swal.fire('Error','Error in loading the semesters','error');
    }
    );

    
    
  }
}
 