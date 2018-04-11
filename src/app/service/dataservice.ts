import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../shared/users';
@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  getDataList(): Observable<User[]> {
    return this.http.get('assets/data.json')
      .map(response => {
        return response.json();
      });

  }
}
