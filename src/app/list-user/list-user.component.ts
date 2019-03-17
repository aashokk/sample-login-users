import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.mode';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users : User [] ;
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data
    });
    //console.log(this.users);  
  }

  addUser(){
    this.router.navigate(['add-user']);
  }

  editUser(user : User){
    //console.log(user);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }

  deleteUser(user : User) : void {
    this.userService.deleteUsers(user).subscribe(data => {
      this.router.navigate(['list-user']);
    });
  }
}
