import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'contact', component: Contact },
];
