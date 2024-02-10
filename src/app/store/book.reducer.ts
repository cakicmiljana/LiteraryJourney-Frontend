import { createReducer, on } from "@ngrx/store"
import * as Actions from './book.action'
import { Book } from "../models/book"

// export interface AppState {
//     books: Book[],
//     selectedBook: number
// }

// export const initialState: AppState = {
//     books: [],
//     selectedBook: 0,
// }

export const booksReducer = createReducer(
    //initialState,
    on(Actions.selectBook, (state, {bookID}) => {
        return {
            //...state,
            selectedBook: bookID
        }
    })
)