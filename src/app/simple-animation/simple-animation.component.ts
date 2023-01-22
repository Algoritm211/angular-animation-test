import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

const enterTransition = transition(':enter', [
  style({ opacity: 0 }),
  animate('1s ease', style({ opacity: 1 })),
])
const fadeIn = trigger('fadeIn', [enterTransition])

const exitTransition = transition(':leave', [
  style({ opacity: 1 }),
  animate('1s ease-out', style({ opacity: 0 })),
])

const fadeOut = trigger('fadeOut', [exitTransition]);


@Component({
  selector: 'app-simple-animation',
  templateUrl: './simple-animation.component.html',
  styleUrls: ['./simple-animation.component.css'],
  animations: [fadeIn, fadeOut],
})
export class SimpleAnimationComponent {

  isShowing = false

  constructor() {
  }

  onToggleShow() {
    this.isShowing = !this.isShowing;
  }
}
