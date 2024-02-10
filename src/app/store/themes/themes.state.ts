import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Theme } from "src/app/models/theme";

// export interface ThemesState {
//     allThemes: Theme[],
//     // selectedTheme: number
// }

export interface ThemesState extends EntityState<Theme> {

}

export const adapter=createEntityAdapter<Theme>();
export const initialState : ThemesState = adapter.getInitialState({

})
// {
//     allThemes: []
//     selectedTheme: -1
// }