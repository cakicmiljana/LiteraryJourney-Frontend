import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { UsersService } from '../../services/user.service'
import * as UserActions from './user.action'
import { User } from 'src/app/models/user'
import { Theme } from 'src/app/models/theme'
import { Book } from 'src/app/models/book'
import { RecursiveVisitor } from '@angular/compiler'
import { ReviewService } from 'src/app/services/review.service'
import { Review } from 'src/app/models/review'

@Injectable()
export class UserEffects {
    
    constructor(private action$: Actions, private userService: UsersService, 
        private reviewService: ReviewService) {

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
                this.userService.signupUser({
                    username: action.username, 
                    password: action.password,
                    country: action.country,
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

    completedThemes$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.getCompletedThemes),
            mergeMap((action) => 
                this.userService.getAllThemes(action.userId).pipe(
                    map((themes) => (UserActions.getCompletedThemesSuccess({themes}))),
                    tap((themes) => {
                        console.log("themes from effect: ", themes)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    completeTheme$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.completeTheme),
            mergeMap((action) => 
                this.userService.startTheme(action.userId, action.theme.id).pipe(
                    map((theme) => (UserActions.completeThemeSuccess({userId: action.userId, theme: theme} as {userId: string, theme: Theme}))),
                    tap((theme) => {
                        console.log("theme from effect: ", theme)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    readBook$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.completeBook),
            mergeMap((action) => 
                this.userService.readBook(action.userId, action.book.id).pipe(
                    map((book) => (UserActions.completeBookSuccess({userId: action.userId, book: book} as {userId: string, book: Book}))),
                    tap((book) => {
                        console.log("book from effect: ", book)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    rateJourney$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.rateJourney),
            mergeMap((action) => 
                this.reviewService.leaveReview(action.review).pipe(
                    map((review) => (UserActions.rateJourneySuccess({review: review} as {review: Review}))),
                    tap((review) => {
                        console.log("review from effect: ", review)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    updateUserPassword$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.updateUserPassword),
            mergeMap((action) => 
                this.userService.updateUserPassword(action.userId, action.password).pipe(
                    map(() => (UserActions.updateUserPasswordSuccess())),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )
}