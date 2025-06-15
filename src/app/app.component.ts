import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whiteboard-app';
  currentDate: string = new Date().toLocaleDateString();
 
  @Output() login = new EventEmitter<void>();
 Login() {
  this.login.emit();
 }
}
