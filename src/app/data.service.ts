import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private url="http://localhost:8000/add"

  constructor(private http: HttpClient) { }


  sendData(form): Observable<any> {    
    return this.http.post(this.url, form, httpOptions)
    .pipe(map(res => res));   
  }  

}
