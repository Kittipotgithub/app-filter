import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getData(): Promise<any> {
    return this.httpClient
      .get('https://api.publicapis.org/categories')
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
}
