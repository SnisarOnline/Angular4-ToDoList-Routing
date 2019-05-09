import { Component } from '@angular/core';
/**
 * Animation, router-animations
 * @Info https://angular.io/guide/animations
 * @Info https://angular.io/guide/route-animations#route-transition-animations
 * @Info https://www.techiediaries.com/angular-router-animations/
 * @Info https://medium.com/frontend-coach/angular-router-animations-what-they-dont-tell-you-3d2737a7f20b
 */
import {slideMyAnimation, slideAngularExampleAnimations} from './routing-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  // animations: [ slideAngularExampleAnimations, slideMyAnimation ] // register the animations
  // animations: [ slideAngularExampleAnimations ] // register the animations
  animations: [ slideMyAnimation ] // register the animations

})
export class AppComponent {
  title = ' Routing';
}
