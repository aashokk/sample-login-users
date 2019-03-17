import { Injectable } from '@angular/core';
import { User } from '../model/user.mode';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  i : number = 0;
  fakeUser : User[] = [
    {id : 1, firstName : "ashok", lastName :"kumar", email : "as@gmail.com"},
    {id : 2, firstName : "kumar", lastName :"ashok", email : "ku@gmail.com"},
    {id : 3, firstName : "sidd", lastName :"kumar", email : "sidd@gmail.com"},
  ]
  constructor(private http : HttpClient) { }
  
  getUsers(){
    return of(this.fakeUser);
  }

  createUsers(user : User){
    return of(this.fakeUser.push(user));
  }

  getUserById(idVal : number){
    var obj = this.fakeUser.filter(x => x.id == idVal)[0];
    return of(obj);
  }

  updateUsers(user : User){
    let updateItem = this.fakeUser.find(this.findToIndexUpdate, user.id);
    let index=this.fakeUser.indexOf(updateItem);
    return of(this.fakeUser[index] = user);
  }
  findToIndexUpdate(newItem){
    console.log(newItem); // this = user.id and newItem = user obj value each time this funcation is looping
    return newItem.id === this;
  }

  deleteUsers(user : User){
    const index = this.fakeUser.findIndex(fakeUsr => fakeUsr.id === user.id);
    return of(this.fakeUser.splice(index));
  }

}
