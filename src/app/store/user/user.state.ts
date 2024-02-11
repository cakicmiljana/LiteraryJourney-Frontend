import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Book } from "src/app/models/book";
import { Theme } from "src/app/models/theme";
import { User } from "src/app/models/user";

export interface BooksState extends EntityState<Book> {
    
}

export const booksAdapter=createEntityAdapter<Book>();

export interface CompletedThemesState extends EntityState<Theme> {
    
}

export const CompletedThemesAdapter=createEntityAdapter<Theme>();

export interface UserState {
    user: User,
    currentTheme: Theme,
    completedBooks: BooksState,
    completedThemes: CompletedThemesState,
    createdThemeId: string
}

export const booksInitialState : BooksState = booksAdapter.getInitialState();
export const completedThemesInitialState : CompletedThemesState = CompletedThemesAdapter.getInitialState();
export const initialState: UserState = {
    user: {
        id: '',
        username: "unknown",
        password: "unknown",
        country: "unknown",
        userType: "",
        themeIDs: [],
        books: [],
        statistics: {
            userId: "",
            genres: new Map<string, number>(),
            pages: new Map<string, number>(),
            authors: new Map<string, number>(),
            languages: new Map<string, number>(),
        }
    },
    currentTheme: {
        id: '',
        title: '',
        books: [],
        genres: [],
        reviews: []
    },
    completedBooks: booksInitialState,
    completedThemes: completedThemesInitialState,
    createdThemeId: ''
}