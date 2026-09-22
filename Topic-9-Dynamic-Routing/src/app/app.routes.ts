import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'user/:id/:name', component: User },
];
