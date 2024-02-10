import { createAction, props } from '@ngrx/store'
import { Review } from 'src/app/models/review';
import { Theme } from 'src/app/models/theme';

export const loadThemes = createAction('Load Themes');
export const loadThemesSuccess = createAction('Load Themes Success', props<{themes: Theme[]}>());
export const selectTheme = createAction('Select Theme', props<{theme: Theme}>());
export const RateJourney = createAction('Rate Journey', props<{userId: number, journeyId: number, rating: number, comment: string}>());
export const RateJourneySuccess = createAction('Rate Journey Success', props<{review: Review}>());