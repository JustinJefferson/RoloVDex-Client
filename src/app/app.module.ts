import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { YourCardsComponent } from './your-cards/your-cards.component';
import { SharedCardsComponent } from './shared-cards/shared-cards.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { CardFormComponent } from './card-form/card-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    YourCardsComponent,
    SharedCardsComponent,
    SettingsComponent,
    HelpComponent,
    NavigationComponent,
    CardComponent,
    CollectionComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
