import { Component, OnInit } from '@angular/core';

import { form } from '../../assets/userForm';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  formInfo: any;

  getData(): Promise<object> {
    return Promise.resolve(form);
  }

 async ngOnInit(): Promise<void> {
    this.formInfo = await this.getData();
 }

}
