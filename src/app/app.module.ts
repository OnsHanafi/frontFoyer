import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerAddComponent } from './foyer-add/foyer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FoyerListComponent,
    FoyerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
