import { Component, Input, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { Observable, of } from 'rxjs'
import { ThemesService } from '../../services/themes.service'
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'
import { loadThemes } from 'src/app/store/themes/themes.action';
import { selectAllThemesFeature, selectThemesList } from 'src/app/store/themes/themes.selector';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  theme$: Observable<Theme[]> = of([]);
  

  constructor(private store: Store<AppState>, private ThemesService: ThemesService) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadThemes());
    this.theme$ = this.store.select(selectAllThemesFeature);
  }

  
  preventClose(event: Event) {
    event.stopPropagation();
  }

}
