import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { ThemesComponent } from './components/themes/themes.component';
import { AccountComponent } from './components/account/account.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { LoginComponent } from './components/login/login.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { CreateThemeComponent } from './components/create-theme/create-theme.component';

const routes: Routes = [
  { path: 'app', component: MenuBarComponent },
  { path: 'app/themes', component: ThemesComponent },
  { path: 'app/account', component: AccountComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'app/account/update', component: AccountUpdateComponent },
  { path: 'app/statistics', component: StatisticsComponent },
  { path: 'app/create-theme', component: CreateThemeComponent },
  { path: '', component: LoginSignupComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    
    }
  }