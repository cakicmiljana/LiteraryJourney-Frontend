import { Component, Input, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { Observable, of } from 'rxjs'
import { ThemesService } from '../../services/theme.service'
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'

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
    // this.store.dispatch(loadThemes());
    this.theme$ = this.ThemesService.getAllThemes();
  }
  
  preventClose(event: Event) {
    event.stopPropagation();
  }

}
