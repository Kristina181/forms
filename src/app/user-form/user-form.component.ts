import { Component } from '@angular/core';

import users from '../../assets/users.json';
import { User } from '../models/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  usersJSON = users.usersInfo;
  user = new User();

  onSubmit(): void {
    this.usersJSON.push(this.user);
    console.log(this.usersJSON);
    console.log(this.user);
  }


}
