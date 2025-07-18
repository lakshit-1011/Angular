import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/Api_Model';
import { users as dummyUsers } from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [...dummyUsers]; 
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<User[]> {
    const newUser: User = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return of(this.users);
  }

  deleteUser(id: number): Observable<User[]> {
    this.users = this.users.filter(u => u.id !== id);
    return of(this.users);
  }
   updateUser(user: User): Observable<User[]> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) this.users[index] = user;
    return of(this.users);
  }
}

