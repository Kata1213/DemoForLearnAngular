import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HighLightDirective} from "./highLight.directive";
import {LogService} from "./log.service";
import {ChildComponent} from "./child.component";

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, HighLightDirective ,ChildComponent],
  providers: [ LogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
