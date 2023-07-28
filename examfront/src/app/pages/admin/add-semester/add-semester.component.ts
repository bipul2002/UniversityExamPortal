import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SemesterService } from 'src/app/services/semester.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent {

  semester = {
    title: '',
    description: '',
  };

  constructor(private _semester: SemesterService, private _snack:MatSnackBar){}


  formSubmit()
  {

    // console.log("button is clicked");

    // console.log(this.semester.title);
    // console.log(this.semester.description);
    if(this.semester.title==null || this.semester.title.trim()==''){

      this._snack.open('Title Required!!', '',{
        duration: 3000,
      });
      return;
    }

    if(this.semester.description==null || this.semester.description.trim()==''){

      this._snack.open('Description Required!!', '',{
        duration: 3000,
      });
      return;
    }


    // add semester

    // this._semester.addSemester(this.semester).subscribe(data:any)=>{
    //     Swal.fire('Success!!', 'semster added successfully','success');
    //   },
    //   (error)=>{
    //     console.log(error);
    //     Swal.fire('Error !!', 'Server error!!','error');
    //   }
    //   );


    this._semester.addSemester(this.semester).subscribe(
      (data:any)=>{
        //success
        //console.log(data);
        //alert('Success');

        this.semester.title= '';
        this.semester.description = '';
        Swal.fire('Success!!','semester is added successfully','success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert('Something went wrong');
        // this._snack.open('some thing went wrong','',{
        //   duration:2000
        // })
        Swal.fire('Error !!', 'Server error!!','error');
      }
    );
    


  }

}
