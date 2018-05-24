import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DegreeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DegreeService {

  constructor(public http: HttpClient) {
  }

  getDegrees() {
      return this.http.get('http://acmev.jelastic.cloudhosted.es/public/api/degrees');
    }

}
