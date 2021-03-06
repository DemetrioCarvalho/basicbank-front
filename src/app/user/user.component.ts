import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
    users: User[];
    constructor(private userService: UserService) { }
 
    ngOnInit(): void {
      this.userService
      .getAllUsers()
      .subscribe(
        (users) => {
          this.users = users;
        }
      );
    }	

}
