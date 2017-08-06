import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Footer } from './footer'
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private http: Http) {
    console.log('Constructor');
   }

  getFooter() : Observable<Footer> {
    let footer = this.http.get('http://localhost:15536/api/commonApi/footer')
                          .map(r=> r.json() as Footer)                          
    return footer;
  }

}
