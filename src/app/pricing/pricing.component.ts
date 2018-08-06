import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afs-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  content: {
    tagLine: string,
    title: string,
    description: string
  }; 

  constructor(private _configServices: ConfigService) { }

  ngOnInit() {
    this.content = this._configServices.getContent().pricing;
  }

}
