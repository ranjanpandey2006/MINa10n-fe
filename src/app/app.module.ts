import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LightingComponent } from './lighting/lighting.component';
import { SecurityComponent } from './security/security.component';
import { WateringComponent } from './watering/watering.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LightingComponent,
    SecurityComponent,
    WateringComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
