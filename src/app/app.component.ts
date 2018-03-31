import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signupForm: NgForm; 
defaultQuestion =  'pet';
answer:string = "";
genders = ['male', 'female'];
submitted = false;
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
}
  suggestUserName() {
    const suggestedName = 'Aba123';
    this.signupForm.form.patchValue(
      {
        userData:{
        userName: suggestedName,
        }
      }
  );
   
    /*
    this.signupForm.setValue({
      userData:{
        userName: suggestedName, // using name attribute of html to bind
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
*/
  }
  /*
  onSubmit(form: NgForm ){
    console.log(form);
  }
  */
 onSubmit( ){
  console.log(this.signupForm);
  this.submitted = true;
  this.user.username = this.signupForm.value.userData.userName;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;
  
  this.signupForm.reset();

}
}
