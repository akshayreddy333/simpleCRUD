import { Component, OnInit } from '@angular/core';
import {UserService} from '../../sharedServices/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private users:any;
  
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{
      this.users=users;
      console.log(this.users);
    },(error)=>{
      console.log(error);
    })
  }

}
