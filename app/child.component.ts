import { Component } from '@angular/core';
import {Input,Output,EventEmitter} from "@angular/core";

@Component({
  selector: 'childSelector',
  templateUrl: './app/child.component.html'
})

export class ChildComponent {

  @Input() private messageOfChild: string;

  @Output() private outputer = new EventEmitter<string>();

  constructor(){ }

  ngOnInit(){ }

  msgSendToParent(){
    this.outputer.emit("这是要专递给父组件的信息! 爹!")
  }

}
