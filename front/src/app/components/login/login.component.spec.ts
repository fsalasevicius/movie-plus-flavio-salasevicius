import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent } from '../../app.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  it('Existe el AppComponent', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });

});