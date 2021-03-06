import { Routes } from '@angular/router';

// components that are parts of the routing
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LeaderdetailComponent } from '../leaderdetail/leaderdetail.component';
import { ContactComponent } from '../contact/contact.component';

//TODO about and contact
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'dishdetail/:id', component: DishdetailComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'leaderdetail/:id', component: LeaderdetailComponent },
  { path: 'contactus', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
