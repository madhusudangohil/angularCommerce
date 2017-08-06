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
  constructor(private commonService: CommonService){}

  ngOnInit(): void {
    console.log("Footer Init");
    this.commonService
        .getFooter()
        .subscribe(f=> 
          { 
              this.foot = f; 
              //this.topics = this.foot.Topics; 
              console.log(f)
          });
  }
}
