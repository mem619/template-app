import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../interfaces/http-response';
import { UserSampleModel } from '../models/user-sample-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(public http: HttpClient) { }

  getUsers(filters): Observable<HttpResponse<UserSampleModel[]>> {
    return this.http.get<UserSampleModel[]>('https://jsonplaceholder.typicode.com/users', { params: filters , observe: 'response'}).pipe(
      map( resp => {
        const response = {} as HttpResponse<UserSampleModel[]>;
        response.count = +resp.headers.get('X-Total-Count');
        response.data = resp.body.map(data => new UserSampleModel(data));

        return response;
      })
    );
  }
}
