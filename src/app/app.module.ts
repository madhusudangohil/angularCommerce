import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { ContactUsComponent } from './contactus.component';
import { AboutUsComponent } from './aboutus.component';
import { ColumnFilterPipe } from './columnFilter'
import {routing} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { HeaderlinksComponent } from './headerlinks/headerlinks.component';
import { FlyoutshoppingcartComponent } from './flyoutshoppingcart/flyoutshoppingcart.component';
import { CurrencyselectorComponent } from './currencyselector/currencyselector.component';
import { LogoComponent } from './logo/logo.component';
import { SearchboxComponent } from './searchbox/searchbox.component'

@NgModule({
  declarations: [
    AppComponent,    
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ColumnFilterPipe,
    HeaderComponent,
    HeaderlinksComponent,
    FlyoutshoppingcartComponent,
    CurrencyselectorComponent,
    LogoComponent,
    SearchboxComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [Title],
  bootstrap: [   
    AppComponent,
    FooterComponent,
    HeaderComponent]
})
export class AppModule { }
