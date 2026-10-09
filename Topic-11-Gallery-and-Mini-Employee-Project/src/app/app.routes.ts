import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Add } from './add/add';
import { Detail } from './detail/detail';
import { Edit } from './edit/edit';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add', component: Add },
  { path: 'display/:id', component: Detail },
  { path: 'edit/:id', component: Edit },
  { path: '**', component: PageNotFound },
];
