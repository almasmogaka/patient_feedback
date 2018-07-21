import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private route: Router, private dataService: DataService) { }

  onSubmit(form: NgForm) {      
    this.dataService.sendData(form.value).
          subscribe(data => {
            console.log(data);
          });
    //this.route.navigate(['info']);
  }

  ngOnInit() {
    
  }

}
