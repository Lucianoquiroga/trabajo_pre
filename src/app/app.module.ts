import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { InformationComponent } from './components/information/information.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CoursesComponent,
    NewsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxyESmBGZu53f5zz9m_w7eTzrtNf70VKM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
