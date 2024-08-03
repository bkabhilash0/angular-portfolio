import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  darkMode: boolean = false;

  ngOnInit() {
    const isDark = localStorage.getItem("darkMode")
    if (isDark) {
      this.darkMode = JSON.parse(isDark);
    }
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode
  }

  toggleMode() {
    this.darkMode = !this.darkMode
    localStorage.setItem("darkMode", JSON.stringify(this.darkMode))
  }
}
