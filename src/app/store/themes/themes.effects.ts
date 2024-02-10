import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
import { ThemesService } from '../../services/themes.service'
import * as ThemesActions from './themes.action'
import { Review } from 'src/app/models/review'

@Injectable()
export class ThemesEffects {
    
    constructor(private action$: Actions, private themesService: ThemesService) {

    }
    
    loadTheme$ = createEffect(() => 
        this.action$.pipe(
            ofType(ThemesActions.loadThemes),
            mergeMap(() => 
                this.themesService.getAllThemes().pipe(
                    map((themes) => 
                        (ThemesActions.loadThemesSuccess({themes: themes}))),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )

    rateJourney$ = createEffect(() => 
    this.action$.pipe(
        ofType(ThemesActions.RateJourney),
            mergeMap((action) => 
                this.themesService.addNewReview({
                    userId: action.userId,
                    themeId: action.journeyId,
                    rating: action.rating,
                    comment: action.comment
                } as Review).pipe(
                    map((review) => (ThemesActions.RateJourneySuccess({review}))),
                    catchError(() => of({ type: 'load error'}))
                )
            )
    ))
}