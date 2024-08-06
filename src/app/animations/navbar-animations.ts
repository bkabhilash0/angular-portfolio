import {animate, state, style, transition, trigger} from "@angular/animations";

export const navbarAnimation = [
  trigger('openClose', [
    state('open', style({
      transform: 'translateX(0)',
      opacity: 1,
    })),
    state('closed', style({
      transform: 'translateX(100%)',
      opacity: 0,
    })),
    transition('* => *', animate("0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)")),])
]
