import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightingComponent } from './lighting/lighting.component';
import { SecurityComponent } from './security/security.component';
import { WateringComponent } from './watering/watering.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes = [
  { path: '', redirectTo: '/notifications', pathMatch: 'full' },
  { path: 'lighting', component: LightingComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'watering', component: WateringComponent },
  { path: 'notifications', component: NotificationsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
