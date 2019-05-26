import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HighLightDirective} from "./highLight.directive";
import {LogService} from "./log.service";

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, HighLightDirective ],
  providers: [ LogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
