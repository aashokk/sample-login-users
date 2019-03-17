import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm : FormGroup;
  constructor(private userService : UserService, private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    let userId = localStorage.getItem('editUserId');
    if(!userId){
      alert('User id not valid');
      this.router.navigate(['list-user']);
    }

    this.editForm = this.formBuilder.group({
      id : [],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required]
    });

    this.userService.getUserById(+userId).subscribe(data => {
      this.editForm.setValue(data);
    });

    //this.editForm.setValue(this.userService.getUserById(+userId));
  }

  onSubmit(){
    this.userService.updateUsers(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-user']);
    }); 
  }

}
