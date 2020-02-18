import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: Router;

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{
        provide: Router, useValue: mockRouter
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

  it('in case forms is valid, change routes methods should be called', () => {
    const email = component.loginForm.controls.email;
    const password = component.loginForm.controls.password;
    email.setValue('asdasd@awdaw.com');
    password.setValue('asdASD#3a');
    const btn = fixture.nativeElement.querySelectorAll('button[type="submit"]')[0];
    btn.click();
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
