var angular = require('@angular/core');
import "@angular/compiler";

@angular.Component({
  standalone: true,
	selector: 'app',
	template: `<button (click)="increment()">{{ cnt }}</button>`,
	styles: `
		:host {
			color: blue;
      background-color: blue;
      padding: 20px;
		}
	`,

})

export class App {
  cnt = 0;
  increment() {
    this.cnt += 1;
    console.log(this.cnt);
  }
}
