import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ElementsComponent } from './components/elements/elements.component';
import { NewsComponent } from './components/news/news.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CoursesComponent,
    ElementsComponent,
    NewsComponent,
    TeachersComponent,
    NewPostComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    /* APP_ROUTING */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
