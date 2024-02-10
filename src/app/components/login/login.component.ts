import { Component, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { Login, Logout } from 'src/app/store/user/user.action';
import { Observable, Subscription, of } from 'rxjs';
import { selectUserFeature } from 'src/app/store/user/user.selector';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  user$: Observable<User> = this.store.select(selectUserFeature);
  userLoggedIn: boolean = false;
  user: User | undefined;

  constructor(private store: Store<AppState>, service: UsersService, private router: Router) {

  }

  
  ngOnInit() : void {;
    
    this.user$ = this.store.select(selectUserFeature);
    this.user$.subscribe(user => {
      console.log("login ", user)
      this.user=user;
      
      if (this.user && this.user.id !== -1) {
        this.userLoggedIn = true;
      }
    })
  }
  
  Login() {
    
    {
      console.log("it is: ", this.username + this.password);
    }
    this.store.dispatch(Login({username: this.username, password: this.password}))
    // if(this.user && this.user.id!=-1) 
  }

  handleLogout() {
    this.userLoggedIn=false;
    
    this.store.dispatch(Logout());
    console.log("out ", this.user?.id)
  }
}
