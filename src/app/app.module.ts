import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { RoutingModule } from './/routing.module';
import { LocationComponent } from './location/location.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    QuestionsComponent,
    LocationComponent,
    AdminComponent
   
    
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
