import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: { id?: number, name?: string } = {};

  constructor(private userService: UserService) {

  }

  async checkInputState(id: NgModel, name: NgModel, myForm: NgForm): Promise<void> {
    // console.log(id);
    // console.log(name);
    console.log(myForm.value);
    const result = await this.userService.getAllFilteredUsers(myForm.value.id, myForm.value.name).then();
    console.log(result);

  }
}
