import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  
  isPassword: boolean = true;

  constructor() { }

  ngOnInit() {}

  showPassword(){
    this.isPassword = false;
  }
 
  hidePassword(){
    this.isPassword = true;
  }
}
