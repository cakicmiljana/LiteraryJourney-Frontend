import { createReducer, on } from '@ngrx/store'
import * as Actions from './user.action'
import { Theme } from '../../models/theme'
import { User } from '../../models/user'
import { CompletedThemesAdapter, initialState } from './user.state'
import { booksAdapter } from '../user/user.state'


export const UserReducer = createReducer(
    initialState,
    on(Actions.startJourney, (state, {theme}) => {
        return {
            ...state,
            currentTheme: theme
        }
    }),
    on(Actions.updateUserInfo, (state, {username, password, country}) => {
        return {
            ...state,
            user: {
                ...state.user,
                username,
                password,
                country
            }
        }
    }),
    on(Actions.getUserInfo, (state) => {
        return {
            ...state
        }
    }),
    on(Actions.completeBook, (state, {book}) => {
        
        return {
            ...state,
            completedBooks: booksAdapter.setOne(book, state.completedBooks)
        }
    }),
    on(Actions.completeTheme, (state, {theme}) => {
        return {
            ...state,
            completedBooks: booksAdapter.setAll([], state.completedBooks),
            currentTheme: {
                id: -1,
                title: '',
                books: []
            },
            completedThemes: CompletedThemesAdapter.addOne(theme, state.completedThemes)
        }
    }),
    on(Actions.LoginSuccess, (state, {user}) => {
        console.log("login success: ",user);
        return {
            ...state,
            user: user
        }
    }),
    on(Actions.Logout, (state) => {
        return initialState
    })
)