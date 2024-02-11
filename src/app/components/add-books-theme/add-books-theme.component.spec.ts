import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksThemeComponent } from './add-books-theme.component';

describe('AddBooksThemeComponent', () => {
  let component: AddBooksThemeComponent;
  let fixture: ComponentFixture<AddBooksThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBooksThemeComponent]
    });
    fixture = TestBed.createComponent(AddBooksThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
