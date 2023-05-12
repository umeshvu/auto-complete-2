import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoComplete2Component } from './auto-complete2/auto-complete2.component';

@NgModule({
  declarations: [AppComponent, AutoComplete2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTypeaheadModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
