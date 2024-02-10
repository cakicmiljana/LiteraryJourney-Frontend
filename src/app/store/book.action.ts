import { createAction, props } from '@ngrx/store';

export const loadBooks = createAction('Load Books');
export const loadBooksSuccess = createAction('Load Books Success');
export const selectBook = createAction(
    'Select a Book', 
    props<{bookID: number}>());