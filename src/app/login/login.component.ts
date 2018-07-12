import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  errors: any;
  constructor(private route: Router) {} 
  
  onSubmit(form: NgForm) {
    if(form.valid) {
      this.route.navigate(['location']);
    }
    else{
      this.errors="Invalid password or username";
    }
  }

  ngOnInit() {
  }
 

}
