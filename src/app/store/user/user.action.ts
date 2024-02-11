import { createAction, props } from '@ngrx/store'
import { Book } from 'src/app/models/book';
import { Review } from 'src/app/models/review';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';

// export const loginUser = createAction('Login User', props<{user: User}>);
// export const loginUserSuccess = createAction('Login User Success', props<{user: User}>);
export const startJourney = createAction('Start Journey', props<{theme: Theme}>());
export const updateUserPassword = createAction('Update User Password', props<{userId:string, password: string}>());
export const updateUserPasswordSuccess  = createAction('Update User Password Success');
export const getUserInfo = createAction('Get User Info');
export const completeBook = createAction('Complete Book', props<{userId: string, book: Book}>());
export const completeBookSuccess = createAction('Complete Book Success', props<{userId: string, book: Book}>());
export const completeTheme = createAction('Complete Theme', props<{userId: string, theme: Theme}>());
export const completeThemeSuccess = createAction('Complete Theme Success', props<{userId: string, theme: Theme}>());
export const Login = createAction('Login', props<{username: string, password: string}>());
export const LoginSuccess = createAction('Login Success', props<{user: User}>());
export const Logout = createAction('Logout');
export const Signup = createAction('Signup', props<{username: string, password: string, country: string}>());
export const SignupSuccess = createAction('Signup Success', props<{user: User}>());
export const DeleteAccount = createAction('Delete Account', props<{user: User}>());
export const getCompletedThemes = createAction('Get Completed Themes', props<{userId: string}>());
export const getCompletedThemesSuccess = createAction('Get Completed Themes Success', props<{themes: Theme[]}>());
export const rateJourney = createAction('Rate Journey', props<{review: Review}>());
export const rateJourneySuccess = createAction('Rate Journey Success', props<{review: Review}>());