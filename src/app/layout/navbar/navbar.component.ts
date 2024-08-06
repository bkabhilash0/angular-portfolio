import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {navbarAnimation} from "../../animations/navbar-animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: navbarAnimation
})
export class NavbarComponent implements OnInit {
  @Input() darkMode!: boolean;
  @Output() toggle = new EventEmitter();

  ngOnInit() {
    window.addEventListener('resize', this.updateAnimations);
  }

  isOpen = false;

  updateAnimations(event: UIEvent) {
    this.isOpen = window.innerWidth >= 640;
  }

  toggleMode() {
    this.toggle.emit();
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
