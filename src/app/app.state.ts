import { Theme } from "./models/theme";
import { User } from "./models/user";
import { UserState } from "./store/user/user.state";

export interface AppState {
    user: UserState
    // allThemes: Theme[],
    // selectedTheme: number
    // user?: User,
    // currentTheme?: number,
    // completedThemes?: number[],
}