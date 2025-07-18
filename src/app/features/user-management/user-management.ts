import { Component } from '@angular/core';
import { User } from '../../core/models/Api_Model';
import { UserService } from '../../core/services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {
  users: User[] = [];
  currentUser: User = { id: 0, name: '', email: '', role: '' ,gender:''};
  isEdit = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  saveUser() {
    if (this.isEdit) {
      this.userService.updateUser(this.currentUser).subscribe(users => {
        this.users = users;
        this.resetForm();
      });
    } else {
      this.userService.addUser(this.currentUser).subscribe(users => {
        this.users = users;
        this.resetForm();
      });
    }
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.isEdit = true;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(users => this.users = users);
  }

  resetForm() {
    this.currentUser = { id: 0, name: '', email: '', role: '',gender: '' };
    this.isEdit = false;
  }
}

