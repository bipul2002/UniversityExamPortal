import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSemestersComponent } from './view-semesters.component';

describe('ViewSemestersComponent', () => {
  let component: ViewSemestersComponent;
  let fixture: ComponentFixture<ViewSemestersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSemestersComponent]
    });
    fixture = TestBed.createComponent(ViewSemestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
