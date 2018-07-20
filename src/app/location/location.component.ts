import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private route: Router) { }

  location(f) {
    this.route.navigate(['info']);
  }

  ngOnInit() {
    
  }

}
