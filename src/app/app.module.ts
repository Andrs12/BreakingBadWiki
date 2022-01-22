import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CharactersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
