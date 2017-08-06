import {Topic} from './topic'

export class Footer {
   
   constructor(
    Url: string,
    StoreName: string,
    WishlistEnabled: boolean,
    ShoppingCartEnabled: boolean,
    SitemapEnabled: boolean,
    NewsEnabled: boolean,
    BlogEnabled: boolean,
    CompareProductsEnabled: boolean,
    ForumEnabled: boolean,
    RecentlyViewedProducts: boolean,
    NewProductsEnabled: boolean,
    AllowCustomersToApplyForVendorAccount: boolean,
    Topics: Topic[],
    CustomProperties: Object,
       ){}

}