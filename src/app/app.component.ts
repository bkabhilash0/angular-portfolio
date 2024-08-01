import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkMode: boolean = true

  @HostBinding('class.dark') get mode() {
    return this.darkMode
  }

  toggleMode(){
    this.darkMode = !this.darkMode
  }
}
