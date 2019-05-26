import {Component} from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  private greeting: string;
  private showToggle: boolean;
  private msgToChild: string;

  constructor(private service: LogService) {
  }

  ngOnInit() {
    this.greeting = 'Angular 2';
    this.service.logService(" AppComponent ngOnInit里面的greeting = " + this.greeting)
    this.msgToChild = "儿砸!"
  }

}
