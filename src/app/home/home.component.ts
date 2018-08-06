import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: {
    heading: string,
    headingText: string,
    buttonText: string,
    buttonLink: string
  }

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.home = this._configService.getContent().home;
  }

}
