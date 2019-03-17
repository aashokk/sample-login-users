import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm : FormGroup;
  constructor(private formBulder : FormBuilder, private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.addForm = this.formBulder.group({
      id : [],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required]
    });
  }

  onSubmit(){
    this.userService.createUsers(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-user']); 
    });
  }

}
