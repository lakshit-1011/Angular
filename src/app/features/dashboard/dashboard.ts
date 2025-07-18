import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user';
import { User } from '../../core/models/Api_Model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  user:User[]=[];
  totalUsers: number = 0;
  totalStudent: number =0;
  totalTeacher: number =0;
  others : number = 0;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.totalUsers=users.length;
      this.user=users;
      this.totalStudent=users.filter((user)=>user.role.toLowerCase()==='student').length;
      this.totalTeacher=users.filter((user)=>user.role.toLowerCase()==='teacher').length;
      this.others = this.totalUsers - this.totalStudent - this.totalTeacher;
    });
  }
}
