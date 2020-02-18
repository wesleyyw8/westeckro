import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'congratulations',
  component: CongratulationsComponent
}, {
  path: '', redirectTo: 'login', pathMatch: 'full' ,
}, {
  path: '**', redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
