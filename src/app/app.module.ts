import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { PersonComponent } from './person/person.component';
import { EditPersonFormComponent } from './edit-person-form/edit-person-form.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    PersonComponent,
    EditPersonFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
