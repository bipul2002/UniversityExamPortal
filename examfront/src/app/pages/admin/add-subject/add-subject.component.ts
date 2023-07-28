import { Component,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SemesterService } from 'src/app/services/semester.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';
// import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit{

  subject={
    title:'',
    description:'',
  }

  semesters=[
    {
      cid: 23,
      title: 'Semester 1',
    },
    {
      cid: 23,
      title: 'Semester 2',
    },
  ];

  subjectData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: '',
    },
  }

constructor(
  private _sem:SemesterService,
  private _subject: SubjectService,
  private _snack: MatSnackBar
){}

  formSubmit(){
    if(this.subject.title.trim() == '' || this.subject.title.trim()==null){
      this._snack.open('Title Required !!', ' ', {
        duration: 3000,
      });
      return;
    }


    // load semesters
    // this._sub.semesters().subscribe(
    //   (data:any)=>{
    //     //semester load
    //     this.semesters = data;
    //     console.log(this.semesters);
    //   },

    //   // handling error

    //   (error)=>{
    //     console.log(error);
    //     Swal.fire('Error!!','error in loading data from server','error')
    //   }
    // )

    //all done

    // this._subject.addSubject(this.subject).subscribe(
    //   (data: any) => {
    //     this.subject.title='',
    //     this.subject.description='',
    //     Swal.fire('Success !!', 'Category is added successfully', 'success');
    //   },
    //   (error)=>{
    //     console.log(error);
    //     Swal.fire('Error !!', 'Server error !!', 'error');
    //   }
    // );

  }

  addSubject(){

    //console.log(this.subjectData);
    if(this.subjectData.title=="" || this.subjectData.title==null){
      this._snack.open("Title Required !!",'',{
        duration: 3000,
      });
      return;
    }

    //call server
    // this._subject.addSubject(this.subjectData).subscribe(
    //   (data)=>{
    //     Swal.fire('Success','quiz is added','success')
    //     this.subjectData = {
    //       title: '', 
    //       description: '',
    //       maxMarks: '',
    //       numberOfQuestions: '',
    //       active: true,
    //       category: {
    //         cid: '',
    //       },
    //   };
    // ),
    // (error)=>{
    //   Swal.fire('Error!! ','Error while adding quiz', 'error')
    //   console.log();
    // }

    //call the serve

    this._subject.addSubject(this.subjectData).subscribe((data)=>{
      Swal.fire('Success','subject is added','success');
      this.subjectData = {
        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: '',
        },
      };
    },
    (error)=>{
      Swal.fire('Error!! ','Error while adding quiz', 'error');
      console.log(error);
    });
  }


  ngOnInit(): void {
    //load semester 

      this._sem.semesters().subscribe(
      (data:any)=>{
        //semester load
        this.semesters = data;
        console.log(this.semesters);
      },

      // handling error

      (error)=>{
        console.log(error);
        Swal.fire('Error!!','error in loading data from server','error')
      }
    );

  }
}
