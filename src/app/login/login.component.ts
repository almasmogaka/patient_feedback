import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  errors: any;
  login: Object={};
  constructor(private route: Router, private dataService: DataService) {} 
  
  onSubmit(form: NgForm) {
    if(form.valid) {
      this.route.navigate(['location']);
    }
    else{
      this.errors="Invalid password or username";
    }
  }
  getlogin() {
    this.dataService.getlogin().subscribe(
      data => this.login=data );
      console.log(this.login);
     
  }

  ngOnInit() {
   this.getlogin();
  }
 

}
