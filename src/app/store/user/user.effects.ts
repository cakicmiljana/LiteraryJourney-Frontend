import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { UsersService } from '../../services/users.service'
import * as UserActions from './user.action'
import { User } from 'src/app/models/user'

@Injectable()
export class UserEffects {
    
    constructor(private action$: Actions, private userService: UsersService) {

    }
    
    loginUser$ = createEffect(() => 
        this.action$.pipe(
            ofType(UserActions.Login),
            mergeMap((action) => 
                this.userService.loginUser(action.username, action.password).pipe(
                    map((user) => (UserActions.LoginSuccess({user}))),
                    tap((user) => {
                        console.log("user from effect: ", user)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    signupUser$ = createEffect(() => 
        this.action$.pipe(
            ofType(UserActions.Signup),
            mergeMap((action) => 
                this.userService.signUpUser({
                    username: action.username, 
                    password: action.password, 
                    country: action.country
                } as User).pipe(
                    map((user) => (UserActions.SignupSuccess({user}))),
                    tap((user) => {
                        console.log("user from effect: ", user)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )
}