import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getlogin(): Observable<any> {
    return this.http.get('https://starter-15bd2.firebaseio.com/.json')
          .pipe(map(res => res));
  }
  

}
