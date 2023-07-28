import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private userService:UserService,private snack:MatSnackBar){}

  //object 
  public user = {   
    username: '',
    password: '',
    name: '',
    email: ''
  };

  ngOnInit(): void {}

   formSubmit(){
    console.log(this.user); 
    if(this.user.username=="" || this.user.username==null || this.user.password==null || this.user.password=="" || this.user.name==null || this.user.name=="" || this.user.email==null || this.user.email==""){
      //alert("user id required !!");
      // passing duration as an Object
      this.snack.open('Username is required!!', '',{
        duration:2000,  
        // verticalPosition: 'top',
        // horizontalPosition: 'right'           
      });
      return;
    }

    //validation


    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        //alert('Success');
        Swal.fire('Successsfully done!!','user is registered','success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert('Something went wrong');
        this.snack.open('some thing went wrong','',{
          duration:2000
        })
      }
    );

   }

}
