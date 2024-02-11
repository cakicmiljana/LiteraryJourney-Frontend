import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { updateUserPassword } from 'src/app/store/user/user.action';
import { selectUserFeature } from 'src/app/store/user/user.selector';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent {
  user:Observable<User> = of();
  id: string = '';
  username = "";
  country = "";
  password = "";
  
  constructor(private service: UsersService, private store: Store<AppState>, private cdr: ChangeDetectorRef) {

  }
  
  ngOnInit() : void {
    this.user = this.store.select(selectUserFeature);
    this.user.subscribe((user: { id: string; username: string; country: string; password: string; }) => {
      this.id = user.id;
    })
  }

  saveAccountInfo() {
    this.store.dispatch(updateUserPassword({userId: this.id, password: this.password}))
  }
}
