import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.css'
})
export class NavlinkComponent {
  @Input() href!: string;
  @Input() label!: string;

  @Input({transform: booleanAttribute}) button:boolean = false;
}
