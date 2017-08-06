import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { ColumnFilterPipe } from './columnFilter'

@NgModule({
  declarations: [    
    FooterComponent,
    ColumnFilterPipe    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [   
    FooterComponent]
})
export class AppModule { }
