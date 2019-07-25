import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {YourCardsComponent} from './your-cards/your-cards.component';
import {SharedCardsComponent} from './shared-cards/shared-cards.component';
import {SettingsComponent} from './settings/settings.component';
import {HelpComponent} from './help/help.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'yourcards', component: YourCardsComponent },
  { path: 'sharedcards', component: SharedCardsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
