import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  private greeting: string;
  private showToggle: boolean;

	constructor() {	}

  ngOnInit() {
    this.greeting = 'Angular 2';
  }

}
