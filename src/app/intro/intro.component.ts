import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'afs-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  intro: {
    tagLine: string,
    title: string,
    description: string
  }; 
  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.intro = this._configService.getContent().intro;
  }

}
