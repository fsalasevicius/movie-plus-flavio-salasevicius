import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasNuevaComponent } from './peliculas-nueva.component';

describe('PeliculasNuevaComponent', () => {
  let component: PeliculasNuevaComponent;
  let fixture: ComponentFixture<PeliculasNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
