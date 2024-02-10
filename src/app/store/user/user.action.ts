import { createAction, props } from '@ngrx/store'
import { Book } from 'src/app/models/book';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';

// export const loginUser = createAction('Login User', props<{user: User}>);
// export const loginUserSuccess = createAction('Login User Success', props<{user: User}>);
export const startJourney = createAction('Start Journey', props<{theme: Theme}>());
export const updateUserInfo = createAction('Update User Info', props<{username: string, password: string, country: string}>());
export const getUserInfo = createAction('Get User Info');
export const completeBook = createAction('Complete Book', props<{book: Book}>());
export const completeTheme = createAction('Complete Theme', props<{theme: Theme}>());
export const Login = createAction('Login', props<{username: string, password: string}>());
export const LoginSuccess = createAction('Login Success', props<{user: User}>());
export const Logout = createAction('Logout');
export const Signup = createAction('Signup', props<{username: string, password: string, country: string}>());
export const SignupSuccess = createAction('Signup Success', props<{user: User}>());
export const DeleteAccount = createAction('Delete Account', props<{user: User}>());