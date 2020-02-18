import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'congratulations',
  canActivate: [AuthGuard],
  component: CongratulationsComponent
}, {
  path: '', redirectTo: 'congratulations', pathMatch: 'full' ,
}, {
  path: '**', redirectTo: 'congratulations'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
