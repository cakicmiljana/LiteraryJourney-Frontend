import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  @Output() logoutEvent: EventEmitter<void> = new EventEmitter<void>();

  logOut() {
    this.logoutEvent.emit();
  }

}
