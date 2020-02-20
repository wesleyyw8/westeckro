import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';
import { User } from './user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordVisible: boolean = false;
  user = new User();
  postError = false;
  postErrorMessage = '';
  isLoading = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.customRegexValidator(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i)]],
      password: ['', [Validators.required,
        this.customRegexValidator(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})/)]],
    });
  }

  customRegexValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const customRegex = nameRe.test(control.value);
      return customRegex ? null : {customRegex: {value: control.value}};
    };
  }

  showPassword(event) {
    this.isPasswordVisible = true;
    setTimeout(() => {
      this.isPasswordVisible = false;
    }, 500);
  }

  save(form: NgForm) {
    if (this.loginForm.valid) {
      this.user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.isLoading = true;
      this.postError = false;
      this.authService.logIn(this.user).subscribe(
        result => {
          console.log('success: ', result);
          this.router.navigate(['/congratulations']);
        },
          error => this.onHttpError(error)
        );
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error;
    this.isLoading = false;
  }
}
