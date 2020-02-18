import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';
import { AuthService } from './auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: Router;
  let mockAuthService;
  
  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockAuthService = jasmine.createSpyObj(['logIn']);
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [
      {
        provide: Router, useValue: mockRouter
      },
      {
        provide: AuthService, useValue: mockAuthService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('forms should be invalid when loading the application', () => {
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('password validation', () => {
    const password = component.loginForm.controls.password;
    expect(password.invalid).toBeTruthy();
    password.setValue('asd');
    expect(password.invalid).toBeTruthy();
    password.setValue('asdASD123');
    expect(password.invalid).toBeTruthy();
    password.setValue('asdASD#3a');
    expect(password.invalid).toBeFalsy();
  });

  it('email validation', () => {
    const email = component.loginForm.controls.email;
    expect(email.invalid).toBeTruthy();
    email.setValue('adhjkashdjkasd');
    expect(email.invalid).toBeTruthy();
    email.setValue('asdasd@awdaw.com');
    expect(email.invalid).toBeFalsy();
  });

  it('message "enter a valid email" should be visible only after user clicks on submit button with an invalid email', () => {
    const email = fixture.nativeElement.querySelectorAll('#email')[0];
    email.value = 'wesleyyy';
    email.dispatchEvent(new Event('input'));
    let firstInvalidContainer = fixture.nativeElement.querySelectorAll('.invalid-container')[0];
    expect(firstInvalidContainer).toBeUndefined();
    const btn = fixture.nativeElement.querySelectorAll('button[type="submit"]')[0];
    btn.click();
    fixture.detectChanges();
    firstInvalidContainer = fixture.nativeElement.querySelectorAll('.invalid-container')[0];
    expect(firstInvalidContainer.textContent).toContain('Enter a valid email ');
  });

  it('after click on submit button, in case forms is valid, the method that goes to other page should be called', () => {
    const email = component.loginForm.controls.email;
    const password = component.loginForm.controls.password;
    mockAuthService.logIn.and.returnValue(of(true));
    email.setValue('asdasd@awdaw.com');
    password.setValue('asdASD#3a');
    const btn = fixture.nativeElement.querySelectorAll('button[type="submit"]')[0];
    btn.click();
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
