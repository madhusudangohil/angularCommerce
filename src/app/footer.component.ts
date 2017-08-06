import { Component } from '@angular/core';
import {OnInit} from  '@angular/core';
import { CommonService } from './common.service';
import {Footer } from './footer';
import {Topic } from './topic';

@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [CommonService]
})
export class FooterComponent implements OnInit {
  foot: Footer;
  isDataLoaded : boolean;
  constructor(private commonService: CommonService){}

  ngOnInit() {
    console.log("Footer Initialization");
    this.commonService
        .getFooter()        
        .subscribe(f=> 
          { 
              this.foot = f;
              this.isDataLoaded = true;
              console.log(this.foot.AllowCustomersToApplyForVendorAccount)
              console.log(this.foot);
          });
  }
}
