import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, retry } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://www.potterapi.com/v1/houses?key=$2a$10$uO8ooOUh7hPLnBF/HVyPgOHA3FptZxvqGr916lQl9L8RMWVWYOA3O';
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;

  subject = new Subject();

  constructor(private http: HttpClient) { }

  getData(): Observable<object> {
    return this.subject
      .pipe(
      debounceTime(3000),
      map(searchText =>
        this.http.get(`${this.apiRoot}${searchText}?key=${this.token}`)),
      retry(2));
  }

  search(event): void {
    const searchText = event?.target.value;
    this.subject.next(searchText);
  }
}
