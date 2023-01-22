import { Component } from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";

// v1 (also need to write in layout [@fadeInOut]="isShowing ? 'open' : 'close'")
// const fadeInOut = trigger('fadeInOut', [
//   state('open', style({opacity: 1})),
//   state('close', style({opacity: 0})),
//   transition('open => close', animate('1s ease-out')),
//   transition('close => open', animate('1s ease-in')),
// ])

// v2
const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({opacity: 0}), animate('1s ease-in')]),
  transition('* => void', [animate('1s ease-out'), style({opacity: 0}),]),
])

@Component({
  selector: 'app-states-animation',
  templateUrl: './states-animation.component.html',
  styleUrls: ['./states-animation.component.css'],
  animations: [fadeInOut]
})
export class StatesAnimationComponent {
  isShowing = false

  constructor() {
  }

  onToggleShow() {
    this.isShowing = !this.isShowing;
  }

  onAnimationStart(event$: AnimationEvent) {
    console.log(event$)
  }

  onAnimationDone(event$: AnimationEvent) {
    console.log(event$)
  }

}
