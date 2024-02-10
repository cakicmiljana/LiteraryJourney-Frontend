import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Signup } from 'src/app/store/user/user.action';
import { selectUserFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username = "";
  password = "";
  country = "";
  user$: Observable<User> = this.store.select(selectUserFeature);
  userLoggedIn: boolean = false;
  user: User | undefined;

  constructor(private store: Store<AppState>, service: UsersService, private router: Router) {

  }

  ngOnInit() {

  }

  Signup() {
    this.store.dispatch(Signup({username: this.username, password: this.password, country: this.country}))
  }

}
