import {Topic} from './topic'

export interface Footer {
    StoreName: string;
    SitemapEnabled: boolean;
    NewsEnabled: boolean;
    BlogEnabled: boolean;
    ForumEnabled: boolean;
    RecentlyViewedProducts: boolean;
    CompareProductsEnabled: boolean;
    NewProducts: boolean;
    Topics: Topic[];
}