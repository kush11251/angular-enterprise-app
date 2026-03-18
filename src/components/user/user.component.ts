// User component
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/v1/users/user.service';

@Component({
  selector: 'app-user',
  template: '<div *ngFor="let user of users">{{ user.name }}</div>',
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((users) => {
      this.users = users;
    });
  }
}