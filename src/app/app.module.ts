import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlluserComponent } from './mycomponent/alluser/alluser.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlluserComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
