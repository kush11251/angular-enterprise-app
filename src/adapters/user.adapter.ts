// User adapter
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserAdapter {
  adapt(user: IUser): any {
    return {
      ...user,
      fullName: `${user.name} ${user.email}`,
    };
  }
}