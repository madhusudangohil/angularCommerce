import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Footer } from './footer';
import { Topic } from './topic';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private http: Http) {
    console.log('Constructor');
   }

  getFooter() : Observable<Footer>{
    console.log('inside service')
    return this.http.get('http://localhost:15536/common/footer')
          .map(r => {
            console.log(r);
            return r.json() as Footer});
  }

  getHeaderLinks() {
    console.log('inside headerlink service')
    return this.http.get('http://localhost:15536/common/headerlinks')
          .map(r => {
            console.log(r);
            return r.json()});
  }

 getCurrencies() {
    console.log('inside currency service')
    return this.http.get('http://localhost:15536/common/currencies')
          .map(r => {
            console.log(r);
            return r.json()});
  }

  getLogo(){
    console.log('inside currency service')
    return this.http.get('http://localhost:15536/common/logo')
          .map(r => {
            console.log(r);
            return r.json()});
  }
}
