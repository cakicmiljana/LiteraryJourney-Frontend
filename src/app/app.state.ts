import { Theme } from "./models/theme";
import { User } from "./models/user";
import { ThemesState } from "./store/themes/themes.state";
import { UserState } from "./store/user/user.state";

export interface AppState {
    themes: ThemesState,
    user: UserState
    // allThemes: Theme[],
    // selectedTheme: number
    // user?: User,
    // currentTheme?: number,
    // completedThemes?: number[],
}