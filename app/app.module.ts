import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HighLightDirective} from "./highLight.directive";

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, HighLightDirective ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
