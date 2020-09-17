import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
  values: object;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.apiService
      .getData()
      .subscribe((data: Observable<object>) => {
        data.subscribe(el => {
          console.log(el);
          this.values = el;
        },
          error => console.log(error));
      });
  }
  search(event): void {
    this.apiService.search(event);

  }


}
