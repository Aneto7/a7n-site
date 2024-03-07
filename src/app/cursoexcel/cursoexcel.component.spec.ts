import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosconsultoriasComponent } from './cursosconsultorias.component';

describe('CursosconsultoriasComponent', () => {
  let component: CursosconsultoriasComponent;
  let fixture: ComponentFixture<CursosconsultoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosconsultoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosconsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
