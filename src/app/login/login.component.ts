import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted : boolean = false;
  loginForm : FormGroup;
  inValid : boolean = false;
  constructor(private formbuilder : FormBuilder, private router : Router) {
    console.log('login component');
   }

   onSubmit(){
     this.submitted = true;
     console.log(this.loginForm.controls.email.value);
     if(this.loginForm.invalid){
       return ;
     }
     if(this.loginForm.controls.email.value == 'as@gmail.com' && this.loginForm.controls.password.value == "ashok"){
       this.router.navigate(['list-user']);
     } else {
       this.inValid = true;
     }



     console.log('on submit');
   }
  submitForm(){
    console.log('submitted');
  } 
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email : ['', Validators],
      password : ['', Validators]
    });
  }

}
