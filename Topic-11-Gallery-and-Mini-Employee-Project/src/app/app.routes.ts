import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Add } from './add/add';
import { Detail } from './detail/detail';
import { Edit } from './edit/edit';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add', component: Add },
  { path: 'display/:id', component: Detail },
  { path: 'edit/:id', component: Edit },
];
