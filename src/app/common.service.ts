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
    return this.http.get('http://localhost:15536/api/commonApi/footer')
          .map(r => {
            console.log(r);
            return r.json() as Footer});
          /*.map(({AllowCustomersToApplyForVendorAccount,
            BlogEnabled,
    CompareProductsEnabled,
    CustomProperties,
    ForumEnabled,    
    NewProductsEnabled,
    NewsEnabled,
    RecentlyViewedProducts,    
    ShoppingCartEnabled,
    SitemapEnabled,
    StoreName,
    Topics,
    Url,
    WishlistEnabled} ) => {
            Topics = Topics.map(t=> new Topic(t.Name, t.IncludeInFooterColumn2, t.IncludeInFooterColumn3))
            return new Footer(AllowCustomersToApplyForVendorAccount,
            BlogEnabled,
    CompareProductsEnabled,
    CustomProperties,
    ForumEnabled,    
    NewProductsEnabled,
    NewsEnabled,
    RecentlyViewedProducts,    
    ShoppingCartEnabled,
    SitemapEnabled,
    StoreName,
    Topics,
    Url,
    WishlistEnabled);
          });*/

             //.map((r: Response) => r.json());
    
  }

}
