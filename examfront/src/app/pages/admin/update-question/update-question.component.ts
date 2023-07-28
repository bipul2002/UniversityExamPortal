import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
  constructor(private _route: ActivatedRoute,private _ques: QuestionService,private route : Router)
  {

  }

  quesId= 0;
  question!:any;




  ngOnInit(): void {
    this.quesId =  this._route.snapshot.params['quesId'];
    //alert(this.quesId);
    this._ques.getQuestion(this.quesId).subscribe((data:any)=>{
      this.question = data;
      console.log(this.question);
},
(error)=>{
  console.log(error);
}
);

    
  }

  //update question

  public updateData()
  {
    //validate


    this._ques.updateQuestion(this.question).subscribe((data:any)=>{
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
