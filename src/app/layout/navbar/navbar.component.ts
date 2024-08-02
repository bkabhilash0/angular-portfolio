import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() darkMode!: boolean;
  @Output() toggle = new EventEmitter();

  toggleMode() {
    this.toggle.emit();
  }
}
