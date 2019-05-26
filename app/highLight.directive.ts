import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector:"[highLightSelector]",
})

export class HighLightDirective {
  constructor(el:ElementRef, render: Renderer){
    render.setElementStyle(el.nativeElement,"backgroundColor","yellow")
  }
}