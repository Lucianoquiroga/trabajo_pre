import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewsComponent } from './components/news/news.component';
import { RegisterComponent } from './components/register/register.component';
import { InformationComponent } from './components/information/information.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'contacto', component: ContactsComponent },
  { path: 'nosotros', component: InformationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false });
