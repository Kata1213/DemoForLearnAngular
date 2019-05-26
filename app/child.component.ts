import { Component } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'childSelector',
  templateUrl: './app/child.component.html'
})

export class ChildComponent {

  @Input() private messageOfChild: string;

  constructor(){ }

  ngOnInit(){ }

}
