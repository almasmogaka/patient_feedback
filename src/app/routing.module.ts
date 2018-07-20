import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey.component';
import { LocationComponent } from './location/location.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'info', component: AdminComponent },
  { path: 'welcome', component: QuestionsComponent },
  { path: 'quiz', component: SurveyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule 
  ],
  declarations: []
})
export class RoutingModule { }
