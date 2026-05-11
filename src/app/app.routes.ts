import { Routes , RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { ServiceComponent } from './service/service.component';
import { ServiceBoardComponent } from './service-board/service-board.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'service/:id', component: ServiceBoardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service-details/:id', component: ServiceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
