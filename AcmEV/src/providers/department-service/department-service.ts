import { HttpClient} from '@angular/common/http';
import { Http,Headers,RequestOptions,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DepartmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DepartmentServiceProvider {

  constructor(public http: HttpClient) {
  }

  getDepartments() {
      return this.http.get('http://acmev.jelastic.cloudhosted.es/public/api/departments');
    }

}
