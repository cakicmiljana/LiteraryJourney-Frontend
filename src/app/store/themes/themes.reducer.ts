import { createReducer, on } from '@ngrx/store'
import * as Actions from './themes.action'
import { initialState } from './themes.state'
import { adapter } from './themes.state'

export const ThemesReducer = createReducer(
    initialState,
    on(Actions.selectTheme, (state, {theme}) => {
        return {
            ...state,
            selectedTheme: theme
        }
    }),
    on(Actions.loadThemesSuccess, (state, {themes}) => 
        adapter.setAll(themes, state)
        
    ),
    on(Actions.RateJourney, (state, {journeyId, rating}) => 
        adapter.updateOne({id: journeyId, changes: {...state.entities[journeyId], rating: rating}}, state)

    )
)