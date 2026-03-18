// App component
import { Component } from '@angular/core';
import { UserService } from './services/api/v1/users/user.service';

@Component({
  selector: 'app-root',
  template: '<button appPrimaryButton>Click me!</button>',
})
export class AppComponent {
  constructor(private userService: UserService) {}
}