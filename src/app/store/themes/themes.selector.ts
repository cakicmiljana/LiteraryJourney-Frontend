import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state'
import { Theme } from 'src/app/models/theme';

export const selectThemesFeature = createSelector(
  (state: AppState) => state.themes,
  (themes) => themes
);

export const selectAllThemesFeature = createSelector(
  selectThemesFeature,
  (themes) => themes.ids
    .map(id => themes.entities[id])
    .filter(theme => theme != null)
    .map(theme => <Theme>theme)
);

export const selectThemesList = createSelector(
  selectAllThemesFeature,
  (themes) => themes
);

// export const selectSongsDict = createSelector(
//     selectSongsFeature,
//     (songs) => songs.list
// )

// export const selectSelectedThemeId = createSelector(
//   selectAllThemesFeature,
//   (theme) => themes.selectedTheme
// );

// export const selectSelectedSong = createSelector(
//   selectSongsList,
//   selectSelectedSongId,
//   (songs, songId) => songs.find((song) => song.id === songId)
// );
