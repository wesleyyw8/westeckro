import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordVisible: boolean = true;
  user = new User();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.customRegexValidator(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i)]],
      password: ['', [Validators.required,
        this.customRegexValidator(/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?\/&gt;.&lt;,])(?!.*\s).*$/)]],
    });
  }

  customRegexValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const customRegex = nameRe.test(control.value);
      return customRegex ? null : {customRegex: {value: control.value}};
    };
  }

  showPassword() {
    this.isPasswordVisible = false;
  }

  hidePassword() {
    this.isPasswordVisible = true;
  }

  save(form: NgForm) {
    console.log(form.submitted);
  }
}
