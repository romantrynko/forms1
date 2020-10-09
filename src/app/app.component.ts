import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj: {id?: number, name?: string} = {};

  checkInputState(id: NgModel, name: NgModel): void {
    console.log(id);
    console.log(name);
  }
}
